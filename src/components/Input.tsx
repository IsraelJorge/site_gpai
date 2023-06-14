import type { ChangeEvent } from 'react';
import React, { forwardRef } from 'react';

import clsx from 'clsx';

import { Mask } from '../utils/masks';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  noMargin?: boolean;
  mask?:
    | 'cpf'
    | 'currency'
    | 'number'
    | 'date'
    | 'cpfAndEmail'
    | 'cnpj'
    | 'cpfOrCnpj'
    | 'phone'
    | 'zipCode'
    | 'uppercase';
}

export const InputRoot = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      children,
      name,
      label,
      noMargin,
      mask = null,
      onChange,
      className,
      ...rest
    },
    ref,
  ) => {
    const handleInputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      event.target.value = maskText(event.target.value);

      onChange?.(event);
    };

    const maskText = (value: string) => {
      switch (mask) {
        case 'cpf':
          return Mask.cpf(value);
        case 'cpfAndEmail':
          if (value.match(/^[\d.-]+$/)) {
            return Mask.cpf(value);
          }
          break;
        case 'cnpj':
          return Mask.cnpj(value);
        case 'cpfOrCnpj':
          return Mask.cpfOrCnpj(value);
        case 'currency':
          return Mask.currency(value);
        case 'number':
          return Mask.number(value);
        case 'date':
          return Mask.date(value);
        case 'phone':
          return Mask.phone(value);
        case 'zipCode':
          return Mask.zipCode(value);
        case 'uppercase':
          return value.toUpperCase();
      }

      return value;
    };

    return (
      <div className={clsx(className, { 'pb-6': !noMargin })}>
        <div className="input-root flex items-center justify-between h-12 bg-gray-100 relative border-2  rounded-lg ">
          <input
            className="block py-2 px-3 w-full appearance-none focus:outline-none bg-transparent"
            type="text"
            placeholder=" "
            name={name}
            id={name}
            onChange={handleInputOnChange}
            ref={ref}
            {...rest}
          />
          {label ? (
            <label
              className="absolute left-2 p-2 duration-300 origin-0 opacity-70"
              htmlFor={name}
            >
              {label}
            </label>
          ) : null}
          {children}
        </div>
      </div>
    );
  },
);

InputRoot.displayName = 'InputRoot';

const InputError = ({ message }: { message?: string }) => {
  return (
    <span className="text-error text-sm absolute -bottom-6 left-0">
      {message}
    </span>
  );
};

export const Input = Object.assign(InputRoot, {
  Error: InputError,
});
