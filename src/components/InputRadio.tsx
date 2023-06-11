import { forwardRef } from 'react';

type InputRadioProps = {
  label: string;
  name: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const InputRadio = forwardRef<HTMLInputElement, InputRadioProps>(
  ({ name, label, value, ...rest }, ref) => {
    return (
      <label
        htmlFor={name + value}
        className="flex justify-center items-center"
      >
        {label}
        <input
          className="mr-3 ml-1"
          type="radio"
          name={name}
          id={name + value}
          ref={ref}
          {...rest}
        />
      </label>
    );
  },
);

InputRadio.displayName = 'InputRadio';
