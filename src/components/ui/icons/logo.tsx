'use client';

// Based on personal logo generated with ChatGPT
// Based on lucid-animated Icons

import type { HTMLAttributes } from 'react';
import logo from '@/assets/logos/logo-black-rounded-transparent.png';

import { cn } from '@/lib/utils';


interface LogoIconProps extends HTMLAttributes<HTMLDivElement> {
    size?: number;
}


const LogoIcon = ({ className, size = 28, ...props }: LogoIconProps) => {
    return (
        <div
            className={cn(className)}
            {...props}
        >
            <img src={logo} alt="Logo" />
        </div>
    );
}

LogoIcon.displayName = 'LogoIcon';

export { LogoIcon };
