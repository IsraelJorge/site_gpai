import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';
import type { IconBaseProps } from 'react-icons/lib';
import * as MdIcons from 'react-icons/md';
import * as TfiIcons from 'react-icons/tfi';

export interface IconProps extends IconBaseProps {
  name: string;
}

// Todo: Add more icon types as needed
export const Icon = ({ name, ...rest }: IconProps) => {
  const lib = name
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .split(' ')[0]
    .toLocaleLowerCase();

  if (lib === 'fa') {
    // @ts-ignore
    const ElementIcon = FaIcons[name];

    return <ElementIcon {...rest} />;
  }

  if (lib === 'md') {
    // @ts-ignore
    const ElementIcon = MdIcons[name];

    return <ElementIcon {...rest} />;
  }

  if (lib === 'tfi') {
    // @ts-ignore
    const ElementIcon = TfiIcons[name];

    return <ElementIcon {...rest} />;
  }

  if (lib === 'bs') {
    // @ts-ignore
    const ElementIcon = BsIcons[name];

    return <ElementIcon {...rest} />;
  }

  return null;
};
