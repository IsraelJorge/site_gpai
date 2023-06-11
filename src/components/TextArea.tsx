import clsx from 'clsx';
import { TextareaHTMLAttributes, forwardRef } from 'react';

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name: string;
  noMargin?: boolean;
}

const TextAreaRoot = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ children, label, name, className, noMargin, ...rest }, ref) => {
    return (
      <div className={clsx(className, { 'pb-6': !noMargin })}>
        <div className="textarea-root h-40 flex items-center justify-between relative bg-gray-100 rounded-lg">
          <textarea
            className="h-full block py-2 px-3 w-full appearance-none focus:outline-none bg-gray-100 resize-none rounded-lg"
            placeholder=" "
            name={name}
            id={name}
            ref={ref}
            {...rest}
          />

          {label ? (
            <label
              htmlFor={name}
              className={clsx(
                'absolute top-1 left-2 p-2 duration-300 origin-0 opacity-70',
              )}
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

TextAreaRoot.displayName = 'TextArea';

const TextAreaError = ({ message }: { message?: string }) => {
  return (
    <span className="text-error text-sm absolute -bottom-6 left-0">
      {message}
    </span>
  );
};
TextAreaError.displayName = 'TextAreaError';

export const TextArea = Object.assign(TextAreaRoot, {
  Error: TextAreaError,
});
