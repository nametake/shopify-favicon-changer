export type IconType =
  | 'BLUE'
  | 'ORANGE'
  | 'PINK'
  | 'PURPLE'
  | 'RED'
  | 'SKYBLUE'
  | 'YELLOW'


export const isIconType = (type: unknown): type is IconType => {
  switch (type) {
    case 'BLUE':
    case 'ORANGE':
    case 'PINK':
    case 'PURPLE':
    case 'RED':
    case 'SKYBLUE':
    case 'YELLOW':
      return true
    default:
      return false
  }
}

