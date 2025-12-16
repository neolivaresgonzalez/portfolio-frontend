'use client';

import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';


interface StrapiIconProps extends HTMLAttributes<HTMLDivElement> {
    size?: number;
}


const StrapiIcon = ({ className, size = 28, ...props }: StrapiIconProps) => {
    return (
        <div
            className={cn(className)}
            {...props}
        >
            <img src="https://cdn.brandfetch.io/idlqZpnu18/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1708005045932" alt="Strapi" />
        </div>
    );
}

StrapiIcon.displayName = 'StrapiIcon';

export { StrapiIcon };
