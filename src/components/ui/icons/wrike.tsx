'use client';

// Based on https://cdnlogo.com/logo/wrike_129209.html
// Based on lucid-animated Icons

import type { HTMLAttributes } from 'react';
import logo from '@/assets/logos/wrike.svg';

import { cn } from '@/lib/utils';


interface WrikeIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}


const WrikeIcon = ({ className, size = 28, ...props }: WrikeIconProps) => {
  return (
    <div
      className={cn(className)}
      {...props}
    >
      <img src={logo} alt="Wrike" />
    </div>
  );
}

WrikeIcon.displayName = 'WrikeIcon';

export { WrikeIcon };
