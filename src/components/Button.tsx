import { ReactNode } from 'react';

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
        'bg-neutral',
        'text-primary',
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

const Root = ({
  variant = 'default',
  as = 'Button',
  to,
  children,
  className,
  ...rest
}: ButtonProps) => {
  const map = {
    Link: (
      <a
        className={`${buttonStyles({ variant })} ${className ?? ''}`}
        {...rest}
      >
        {children}
      </a>
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

export const Button = {
  Root,
  Label,
};
