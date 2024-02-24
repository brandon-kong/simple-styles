'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge'
import { cva, type VariantProps } from 'class-variance-authority';

const variants = cva(
    'w-full bg-blue-500 text-white rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out',
    {
        variants: {
           variant: {
                primary: 'bg-blue-500 text-white',
                secondary: 'bg-gray-500 text-white',
                danger: 'bg-red-500 text-white',
                success: 'bg-green-500 text-white',
                warning: 'bg-yellow-500 text-white',
                info: 'bg-blue-500 text-white',
                light: 'bg-gray-200 text-black',
                dark: 'bg-gray-800 text-white'
           },

           size: {
                sm: 'py-1 px-2',
                md: 'py-2 px-4',
                lg: 'py-3 px-6',
                xl: 'py-4 px-8',
                icon: 'p-2'
           }
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md'
        }
    }
)

export interface ButtonProps 
extends React.ButtonHTMLAttributes<HTMLButtonElement>, 
VariantProps<typeof variants> 
{}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant, size, children, className, ...props }, ref) => {
        return (
            <button 
                ref={ref}
                className={twMerge(variants({ variant, size, className }))}
                {...props}
            >
                {children}
            </button>
        );
    }
);

export default Button;
export { variants as ButtonVariants };