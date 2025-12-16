import qs from 'qs';

/**
 * Base URL for the Strapi API.
 * Defaults to localhost:1337 if not provided in environment variables.
 */
export const STRAPI_API_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

/**
 * Helper to fetch data from Strapi API.
 * @param path The API endpoint path (e.g. '/projects')
 * @param urlParamsObject The query parameters object (will be stringified via qs)
 * @param options Fetch options (headers, method, etc.)
 * @returns The JSON response from Strapi
 */
export async function fetchAPI(
  path: string,
  urlParamsObject: Record<string, any> = {},
  options: RequestInit = {}
) {
  try {
    // Get the API token from environment variables
    const token = import.meta.env.VITE_STRAPI_API_TOKEN;

    // Merge default and user options
    const mergedOptions = {
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
            ...options.headers,
        },
        ...options,
        // Remove headers from options if it exists within the spread to avoid duplication issues if structure differs, 
        // though properly we just spread options after. But we want to ensure headers are merged correctly.
    };

    // Build request URL
    const queryString = qs.stringify({
        ...urlParamsObject,
        ...(urlParamsObject.locale ? { locale: getStrapiLocale(urlParamsObject.locale) } : {})
    }, { encodeValuesOnly: true });
    const requestUrl = `${STRAPI_API_URL}/api${path}${queryString ? `?${queryString}` : ''}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`Please check if your server is running and you set all the required tokens.`);
  }
}

/**
 * Helper to get the full URL of a media asset.
 * @param url The relative URL from Strapi response
 * @returns The absolute URL
 */
export function getStrapiMedia(url: string | null) {
  if (url == null) {
    return null;
  }

  // Return the full URL if it's already absolute
  if (url.startsWith('http') || url.startsWith('//')) {
    return url;
  }

  // Otherwise prepend the Strapi URL
  return `${STRAPI_API_URL}${url}`;
}

/**
 * Maps the frontend language code to the corresponding Strapi locale.
 * @param languageCode The language code (e.g. 'en-US', 'es', 'fr-CA')
 * @returns The matched Strapi locale (e.g. 'en', 'es-419', 'fr-CA')
 */
export function getStrapiLocale(languageCode: string) {
    if (!languageCode) return 'en';

    // Exact matches
    if (languageCode === 'en' || languageCode.startsWith('en-')) return 'en';
    if (languageCode === 'fr-CA') return 'fr-CA';
    if (languageCode.startsWith('fr-')) return 'fr-CA'; // Fallback all French to CA if prefered
    if (languageCode === 'es-419') return 'es-419';
    if (languageCode.startsWith('es-')) return 'es-419'; // Fallback all Spanish to 419

    return 'en'; // Default fallback
}
