import Select from 'react-select'
import blueIcon from '@/assets/blue.png'
import orangeIcon from '@/assets/orange.png'
import pinkIcon from '@/assets/pink.png'
import purpleIcon from '@/assets/purple.png'
import redIcon from '@/assets/red.png'
import skyblueIcon from '@/assets/skyblue.png'
import yellowIcon from '@/assets/yellow.png'

const assertNever = (value: never): never => { throw new Error(`Unexpected value: ${value}`) }

type IconType =
  | 'BLUE'
  | 'ORANGE'
  | 'PINK'
  | 'PURPLE'
  | 'RED'
  | 'SKYBLUE'
  | 'YELLOW'


type IconImgProps = {
  type: IconType;
  src: string;
}

export const IconImg = function IconImg({ type, src, }: IconImgProps): JSX.Element {
  return <img className="h-6" src={src} alt={type.toLowerCase()} />
}


type IconProps = {
  type: IconType
}

function Icon({ type }: IconProps) {
  switch (type) {
    case 'BLUE':
      return <IconImg type={type} src={blueIcon} />
    case 'ORANGE':
      return <IconImg type={type} src={orangeIcon} />
    case 'PINK':
      return <IconImg type={type} src={pinkIcon} />
    case 'PURPLE':
      return <IconImg type={type} src={purpleIcon} />
    case 'RED':
      return <IconImg type={type} src={redIcon} />
    case 'SKYBLUE':
      return <IconImg type={type} src={skyblueIcon} />
    case 'YELLOW':
      return <IconImg type={type} src={yellowIcon} />
    default:
      return assertNever(type)
  }
}

const options: { value: IconType, label: JSX.Element }[] = [
  { value: 'BLUE', label: <Icon type="BLUE" /> },
  { value: 'ORANGE', label: <Icon type="ORANGE" /> },
  { value: 'PINK', label: <Icon type="PINK" /> },
  { value: 'PURPLE', label: <Icon type="PURPLE" /> },
  { value: 'RED', label: <Icon type="RED" /> },
  { value: 'SKYBLUE', label: <Icon type="SKYBLUE" /> },
  { value: 'YELLOW', label: <Icon type="YELLOW" /> }
]

function App() {
  return (
    <div className="w-96 px-8 py-4">
      <div className="grid grid-cols-6">
        <div className="col-span-4 flex items-center">Shopify Partners</div>
        <div className="col-span-2"><Select options={options} /></div>
        <div className="col-span-4 flex items-center">.dev</div>
        <div className="col-span-2"><Select options={options} /></div>
        <div className="col-span-4 flex items-center">Store</div>
        <div className="col-span-2"><Select options={options} /></div>
      </div>
    </div>
  )
}

export default App
