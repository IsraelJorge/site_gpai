import { ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
      drawer: [
        'btn',
        'gap-2',
        'btn-primary',
        'text-white',
        'bg-secondarySiderbar',
        'justify-start',
        'border-none',
        'shadow-md',
      ],
    },
  },
});

export type ButtonAs = 'Link' | 'Button' | 'NavLink';

export interface ButtonProps extends VariantProps<typeof buttonStyles> {
  as?: ButtonAs;
  children: React.ReactNode;
  onClick?: VoidFunction;
  to?: string;
  className?: string;
  disabled?: boolean;
  buttonProps?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
}

const ButtonRoot = ({
  variant = 'default',
  as = 'Button',
  to,
  children,
  className,
  buttonProps,
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
    NavLink: (
      <NavLink
        to={to || ''}
        end
        className={`nav-link ${buttonStyles({ variant })} ${className ?? ''}`}
        {...rest}
      >
        {children}
      </NavLink>
    ),
    Button: (
      <button
        className={`${buttonStyles({ variant })} ${className ?? ''}`}
        {...rest}
        {...buttonProps}
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
