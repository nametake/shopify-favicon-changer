import blueIcon from '@/assets/blue.png';
import orangeIcon from '@/assets/orange.png';
import pinkIcon from '@/assets/pink.png';
import purpleIcon from '@/assets/purple.png';
import redIcon from '@/assets/red.png';
import skyblueIcon from '@/assets/skyblue.png';
import yellowIcon from '@/assets/yellow.png';
import { IconType } from '@/types';
import { assertNever } from '@/utils';

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
      return <IconImg type={type} src={blueIcon} />;
    case 'ORANGE':
      return <IconImg type={type} src={orangeIcon} />;
    case 'PINK':
      return <IconImg type={type} src={pinkIcon} />;
    case 'PURPLE':
      return <IconImg type={type} src={purpleIcon} />;
    case 'RED':
      return <IconImg type={type} src={redIcon} />;
    case 'SKYBLUE':
      return <IconImg type={type} src={skyblueIcon} />;
    case 'YELLOW':
      return <IconImg type={type} src={yellowIcon} />;
    default:
      return assertNever(type);
  }
}
