'use client';

// Based on https://atlassian.design/logos/trello_app.zip
// Based on lucid-animated Icons

import type { HTMLAttributes } from 'react';
import logo from '@/assets/logos/confluence.svg';

import { cn } from '@/lib/utils';


interface ConfluenceIconProps extends HTMLAttributes<HTMLDivElement> {
    size?: number;
}


const ConfluenceIcon = ({ className, size = 28, ...props }: ConfluenceIconProps) => {
    return (
        <div
            className={cn(className)}
            {...props}
        >
            <img src={logo} alt="Confluence" />
        </div>
    );
}

ConfluenceIcon.displayName = 'ConfluenceIcon';

export { ConfluenceIcon };
