'use client';

import type { HTMLAttributes } from 'react';
import monday from '@/assets/logos/monday.svg';

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
            <img src={monday} alt="Monday" />
        </div>
    );
}

MondayIcon.displayName = 'MondayIcon';

export { MondayIcon };
