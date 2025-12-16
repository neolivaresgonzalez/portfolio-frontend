'use client';

// Based on https://atlassian.design/logos/trello_app.zip
// Based on lucid-animated Icons

import type { HTMLAttributes } from 'react';
import logo from '@/assets/logos/jira.svg';

import { cn } from '@/lib/utils';


interface JiraIconProps extends HTMLAttributes<HTMLDivElement> {
    size?: number;
}


const JiraIcon = ({ className, size = 28, ...props }: JiraIconProps) => {
    return (
        <div
            className={cn(className)}
            {...props}
        >
            <img src={logo} alt="Jira" />
        </div>
    );
}

JiraIcon.displayName = 'JiraIcon';

export { JiraIcon };
