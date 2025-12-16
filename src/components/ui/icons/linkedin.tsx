'use client';

// Based on https://brand.linkedin.com/downloads
// Based on lucid-animated Icons

import type { HTMLAttributes } from 'react';
import logo from '@/assets/logos/linked-in-black.png';

import { cn } from '@/lib/utils';


interface LinkedInIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}


const LinkedInIcon = ({ className, size = 28, ...props }: LinkedInIconProps) => {
  return (
    <div
      className={cn(className)}
      {...props}
    >
      <img src={logo} alt="LinkedIn" />
    </div>
  );
}

LinkedInIcon.displayName = 'LinkedInIcon';

export { LinkedInIcon };
