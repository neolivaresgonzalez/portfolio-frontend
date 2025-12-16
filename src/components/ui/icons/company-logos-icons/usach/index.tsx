'use client';

import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import logo from '@/components/ui/icons/company-logos-icons/usach/logo.png';


interface UsachIconProps extends HTMLAttributes<HTMLDivElement> {
    size?: number;
}


const UsachIcon = ({ className, size = 28, ...props }: UsachIconProps) => {
    return (
        <div
            className={cn(className)}
            {...props}
        >
            <img src={logo} />
        </div>
    );
}

UsachIcon.displayName = 'UsachIcon';

export { UsachIcon };
