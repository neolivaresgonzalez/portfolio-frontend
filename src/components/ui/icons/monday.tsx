'use client';

// Based on https://monday.com/p/news/press-kit/
// Based on lucid-animated Icons

import type { HTMLAttributes } from 'react';
import logo from '@/assets/logos/monday.svg';

import { cn } from '@/lib/utils';


interface MondayIconProps extends HTMLAttributes<HTMLDivElement> {
    size?: number;
}


const MondayIcon = ({ className, size = 28, ...props }: MondayIconProps) => {
    return (
        <div
            className={cn(className)}
            {...props}
        >
            <img src={logo} alt="Monday" />
        </div>
    );
}

MondayIcon.displayName = 'MondayIcon';

export { MondayIcon };
