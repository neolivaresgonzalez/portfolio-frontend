'use client';

import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';


interface UcIconProps extends HTMLAttributes<HTMLDivElement> {
    size?: number;
}


const UcIcon = ({ className, size = 28, ...props }: UcIconProps) => {
    return (
        <div
            className={cn(className)}
            {...props}
        >
            <img src="https://kit-digital-uc-prod.s3.amazonaws.com/assets/escudos/logo-uc-01.svg" alt="UC" />
        </div>
    );
}

UcIcon.displayName = 'UcIcon';

export { UcIcon };
