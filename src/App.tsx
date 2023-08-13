import Select from 'react-select'
import { IconType } from '@/types'
import { Icon } from '@/Icon'

type GridProps = { children: React.ReactNode }

export const Grid = function Table({ children }: GridProps): JSX.Element {
  return <div className="grid grid-cols-6">{children}</div>
}

type LabelCellProps = { children: React.ReactNode }

export const LabelCell = function LabelCell({ children }: LabelCellProps): JSX.Element {
  return <div className="col-span-4 flex items-center">{children}</div>
}

type SelectCellProps = { children: React.ReactNode }

export const SelectCell = function SelectCell({ children }: SelectCellProps): JSX.Element {
  return <div className="col-span-2">{children}</div>
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
      <Grid>
        <LabelCell>Shopify Partners</LabelCell>
        <SelectCell><Select options={options} /></SelectCell>
        <LabelCell>.dev</LabelCell>
        <SelectCell><Select options={options} /></SelectCell>
        <LabelCell>Admin</LabelCell>
        <SelectCell><Select options={options} /></SelectCell>
      </Grid>
    </div>
  )
}

export default App
