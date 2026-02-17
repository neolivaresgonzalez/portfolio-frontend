terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.0"
    }
  }
}

provider "aws" {
  region = "ca-central-1"
}

provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}

variable "domain_name" {
  default = "nolivares.com"
}

variable "legacy_domain_name" {
  default = "neolivaresgonzalez.com"
}

# --- Main Domain Resources (nolivares.com) ---

resource "random_id" "frontend_bucket_suffix" {
  byte_length = 4
}

resource "aws_s3_bucket" "frontend_bucket" {
  bucket = "portfolio-frontend-${random_id.frontend_bucket_suffix.hex}"
}

# Website configuration for SPA support
resource "aws_s3_bucket_website_configuration" "frontend_website" {
  bucket = aws_s3_bucket.frontend_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

# Public Access Block - Explicitly allowing public access for website hosting
resource "aws_s3_bucket_public_access_block" "frontend_public_access" {
  bucket = aws_s3_bucket.frontend_bucket.id

  block_public_acls       = false
  ignore_public_acls      = false
  block_public_policy     = false
  restrict_public_buckets = false
}

# Bucket Policy for Public Read Access
resource "aws_s3_bucket_policy" "frontend_policy" {
  bucket = aws_s3_bucket.frontend_bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.frontend_bucket.arn}/*"
      },
    ]
  })

  depends_on = [aws_s3_bucket_public_access_block.frontend_public_access]
}

# Main Domain Cert (DNS Validation via Cloudflare - Manual CNAMEs required)
resource "aws_acm_certificate" "cert" {
  provider                  = aws.us_east_1
  domain_name               = var.domain_name
  subject_alternative_names = ["www.${var.domain_name}"]
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

# Wait for certificate validation
resource "aws_acm_certificate_validation" "cert" {
  provider        = aws.us_east_1
  certificate_arn = aws_acm_certificate.cert.arn
}

# Note: No automatic Route53 validation for main domain as it is on Cloudflare.
# The user must add the CNAME records outputted below to Cloudflare.

# Main Domain CloudFront
resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = aws_s3_bucket_website_configuration.frontend_website.website_endpoint
    origin_id   = "S3-${aws_s3_bucket.frontend_bucket.bucket}"

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  aliases = [var.domain_name, "www.${var.domain_name}"]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-${aws_s3_bucket.frontend_bucket.bucket}"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.cert.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}

# --- Legacy Domain Resources (neolivaresgonzalez.com -> nolivares.com) ---

# Legacy Zone Data
data "aws_route53_zone" "legacy" {
  name = var.legacy_domain_name
}

# Redirect Bucket
resource "aws_s3_bucket" "redirect_bucket" {
  bucket = "portfolio-redirect-${random_id.frontend_bucket_suffix.hex}"
}

resource "aws_s3_bucket_website_configuration" "redirect_website" {
  bucket = aws_s3_bucket.redirect_bucket.id

  redirect_all_requests_to {
    host_name = var.domain_name
    protocol  = "https"
  }
}

# Legacy Cert (Validated via Route53)
resource "aws_acm_certificate" "legacy_cert" {
  provider                  = aws.us_east_1
  domain_name               = var.legacy_domain_name
  subject_alternative_names = ["www.${var.legacy_domain_name}"]
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "legacy_cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.legacy_cert.domain_validation_options : dvo.domain_name => dvo
  }

  allow_overwrite = true
  name            = each.value.resource_record_name
  records         = [each.value.resource_record_value]
  ttl             = 60
  type            = each.value.resource_record_type
  zone_id         = data.aws_route53_zone.legacy.zone_id
}

resource "aws_acm_certificate_validation" "legacy_cert_validation" {
  provider                = aws.us_east_1
  certificate_arn         = aws_acm_certificate.legacy_cert.arn
  validation_record_fqdns = [for record in aws_route53_record.legacy_cert_validation : record.fqdn]
}

# Legacy CloudFront (for Redirect)
resource "aws_cloudfront_distribution" "legacy_distribution" {
  origin {
    domain_name = aws_s3_bucket_website_configuration.redirect_website.website_endpoint
    origin_id   = "S3-Redirect-${aws_s3_bucket.redirect_bucket.bucket}"

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  enabled         = true
  is_ipv6_enabled = true

  aliases = [var.legacy_domain_name, "www.${var.legacy_domain_name}"]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-Redirect-${aws_s3_bucket.redirect_bucket.bucket}"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "allow-all" # S3 website redirect handles protocol, but cloudfront can too.
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.legacy_cert.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}

# Legacy DNS Records
resource "aws_route53_record" "legacy_apex" {
  zone_id = data.aws_route53_zone.legacy.zone_id
  name    = var.legacy_domain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.legacy_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.legacy_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "legacy_www" {
  zone_id = data.aws_route53_zone.legacy.zone_id
  name    = "www.${var.legacy_domain_name}"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.legacy_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.legacy_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

# --- Outputs ---

output "frontend_bucket_name" {
  value = aws_s3_bucket.frontend_bucket.bucket
}

output "cloudfront_domain_name" {
  value = aws_cloudfront_distribution.s3_distribution.domain_name
}

output "manual_dns_validation_records" {
  description = "CNAME records to add to Cloudflare for nolivares.com SSL validation"
  value = {
    for dvo in aws_acm_certificate.cert.domain_validation_options : dvo.domain_name => {
      name  = dvo.resource_record_name
      value = dvo.resource_record_value
      type  = dvo.resource_record_type
    }
  }
}


