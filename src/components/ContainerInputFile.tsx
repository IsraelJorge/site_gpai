import { ReactElement } from 'react';
import { Icon } from './Icon';

type ContainerInputFileProps = {
  children: ReactElement;
};

export function ContainerInputFile({ children }: ContainerInputFileProps) {
  return (
    <div className="w-[400px] max-w-[400px] min-w-[400px] h-[250px] max-h-[250px]">
      <div className="mt-1 flex justify-center rounded-md h-full border-2 border-dashed border-primary px-6 pt-5 pb-6">
        <div className="flex flex-col items-center justify-around space-y-1 text-center">
          <div>
            <Icon name="MdAddPhotoAlternate" size={45} />
          </div>
          <div className="flex flex-col text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
}
