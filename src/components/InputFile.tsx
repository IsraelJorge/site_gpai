import clsx from 'clsx';
import {
  ChangeEvent,
  DragEvent,
  ReactElement,
  forwardRef,
  useState,
} from 'react';
import { Control, useController } from 'react-hook-form';

import { Icon } from './Icon';

export interface InputFileProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  noMargin?: boolean;
  control: Control<any>;
}

const checkIfHasError = (children?: React.ReactNode) => {
  if (!children) return false;

  if (Array.isArray(children))
    return children.some((child: ReactElement) => child.props.message);

  return Boolean((children as ReactElement).props?.message);
};

const sizeLimit = 5 * 1024 * 1024;

const InputFileRoot = forwardRef<HTMLInputElement, InputFileProps>(
  (
    { children, name, label, noMargin, className, control, onChange, ...rest },
    ref,
  ) => {
    const hasError = checkIfHasError(children);
    const [file, setFile] = useState<File[]>([]);

    const { field } = useController({
      control,
      name,
    });

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files?.length) return;

      const files = [...(file ?? []), ...event.target.files];
      if (files[files.length - 1].size > sizeLimit) {
        alert('Arquivo muito grande, insira arquivos com até 5mb');
        return;
      }

      setFile(files);

      field.onChange(files);
      onChange?.(event);
    };

    const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
      event.preventDefault();
      event.stopPropagation();

      if (!event.dataTransfer.files) return;

      const files = [...(file ?? []), ...event.dataTransfer.files];

      setFile(files);
      field.onChange(files);
    };

    const handleDragOver = (event: DragEvent<HTMLLabelElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };

    return (
      <div className={clsx(className, { 'pb-6': !noMargin })}>
        <label
          htmlFor={name}
          className={clsx(
            'flex gap-5 items-center justify-center text-primary py-4 pr-4 pl-5 relative border-2  border-primary cursor-pointer rounded-md font-semibold focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-primary',
            { 'border-error': hasError },
          )}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <Icon name="FaPlus" />
          <span className="uppercase font-bold whitespace-nowrap overflow-hidden overflow-ellipsis">
            {label}
          </span>
          <input
            id={name}
            name={name}
            type="file"
            onChange={handleOnChange}
            className="sr-only"
            ref={ref}
            {...rest}
          />
          {children}
        </label>
      </div>
    );
  },
);

InputFileRoot.displayName = 'InputFileRoot';

const InputFileError = ({ message }: { message?: string }) => {
  return (
    <span className="text-error text-sm absolute -bottom-6 left-0">
      {message}
    </span>
  );
};

export const InputFile = Object.assign(InputFileRoot, {
  Error: InputFileError,
});
