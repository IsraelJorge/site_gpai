import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

const buttonStyles = cva(['flex', 'flex-row', 'gap-1'], {
  variants: {
    variant: {
      default: ['btn', 'btn-primary', 'text-neutral'],
      outline: [
        'btn',
        'border-2',
        'border-primary',
        'bg-base-100',
        'text-primary',
        'hover:text-neutral',
        'hover:bg-primary',
      ],
    },
  },
});

export type ButtonAs = 'Link' | 'Button';
export interface ButtonProps extends VariantProps<typeof buttonStyles> {
  as?: ButtonAs;
  children: React.ReactNode;
  onClick?: VoidFunction;
  to?: string;
  className?: string;
  disabled?: boolean;
}

const ButtonRoot = ({
  variant = 'default',
  as = 'Button',
  to,
  children,
  className,
  ...rest
}: ButtonProps) => {
  const map = {
    Link: (
      <Link
        to={to || ''}
        className={`${buttonStyles({ variant })} ${className ?? ''}`}
        {...rest}
      >
        {children}
      </Link>
    ),

    Button: (
      <button
        className={`${buttonStyles({ variant })} ${className ?? ''}`}
        {...rest}
      >
        {children}
      </button>
    ),
  };

  return map[as];
};

const Label = ({ children }: { children: ReactNode }) => {
  return <span>{children}</span>;
};

export const Button = Object.assign(ButtonRoot, {
  Label: Label,
});
