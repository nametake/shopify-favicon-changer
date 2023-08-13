import { IconType } from '@/types';
import { assertNever } from '@/utils';
import { icons } from '@/icons';

type IconImgProps = {
  type: IconType;
  src: string;
};

const IconImg = function IconImg({ type, src }: IconImgProps): JSX.Element {
  return <img className="h-4" src={src} alt={type.toLowerCase()} />;
};

type IconProps = {
  type: IconType;
};

export function Icon({ type }: IconProps) {
  switch (type) {
    case 'DEFAULT':
      return 'DEFAULT';
    case 'BLUE':
    case 'ORANGE':
    case 'PINK':
    case 'PURPLE':
    case 'RED':
    case 'SKYBLUE':
    case 'YELLOW':
      return <IconImg type={type} src={icons.get(type) ?? ''} />;
    default:
      return assertNever(type);
  }
}
