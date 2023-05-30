import {
  SelectHTMLAttributes,
  ChangeEvent,
  ReactNode,
  forwardRef,
  Ref,
} from 'react';
import { FaCaretDown } from 'react-icons/fa';

import clsx from 'clsx';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  children?: ReactNode;
  className?: string;
  noMargin?: boolean;
  data: any;
  displayKey: string;
  valueKey?: string;
  disabledPredicate?: (value: any) => boolean;
  skipPredicate?: (value: any) => boolean;
}

const SelectRoot = forwardRef(
  (
    {
      label,
      onChange,
      children,
      className,
      noMargin,
      data,
      displayKey,
      valueKey = 'id',
      disabledPredicate,
      skipPredicate,
      defaultValue = '',
      ...rest
    }: SelectProps,
    ref: Ref<HTMLSelectElement>,
  ) => {
    const filter = (value: any) => {
      if (skipPredicate) {
        return !skipPredicate(value);
      }
      return true;
    };

    const isDisabled = (value: any) => {
      if (disabledPredicate) {
        return disabledPredicate(value);
      }
      return false;
    };

    return (
      <div className={clsx(className, { 'pb-6': !noMargin })}>
        <div
          className={clsx(
            'select-root flex items-center justify-between h-12 bg-gray-100 relative border-2  rounded-lg ',
            { 'bg-disabled': rest.disabled },
          )}
        >
          <select
            name={rest.name}
            id={rest.name}
            className="block py-2 px-3 flex-1 appearance-none focus:outline-none bg-transparent"
            onChange={onChange}
            placeholder={label}
            defaultValue={defaultValue}
            {...rest}
            ref={ref}
          >
            {defaultValue ? null : <option disabled />}
            {data
              ? data.filter(filter).map((value: any) => {
                  const disabled = isDisabled(value);
                  return (
                    <option
                      key={String(value[valueKey])}
                      value={value[valueKey] as string | number}
                      disabled={disabled}
                    >
                      {String(value[displayKey])}
                    </option>
                  );
                })
              : null}
          </select>
          <label
            htmlFor={rest.name}
            className={clsx(
              { '!bg-transparent': rest.disabled },
              'absolute left-2 p-2 duration-300 origin-0 opacity-70',
            )}
          >
            {label}
          </label>
          <span style={{ position: 'absolute', right: '1rem' }}>
            <FaCaretDown />
          </span>
          {children}
        </div>
      </div>
    );
  },
);

SelectRoot.displayName = 'Select';

const SelectError = ({ message }: { message?: string }) => {
  return (
    <span className="text-error text-sm absolute -bottom-6 left-0">
      {message}
    </span>
  );
};

export const Select = Object.assign(SelectRoot, {
  Error: SelectError,
});
