'use client';

import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import logo from '@/components/ui/icons/company-logos-icons/kimn-it/logo.png';


interface KimnItIconProps extends HTMLAttributes<HTMLDivElement> {
    size?: number;
}


const KimnItIcon = ({ className, size = 28, ...props }: KimnItIconProps) => {
    return (
        <div
            className={cn(className)}
            {...props}
        >
            <img src={logo} />
        </div>
    );
}

KimnItIcon.displayName = 'KimnItIcon';

export { KimnItIcon };
