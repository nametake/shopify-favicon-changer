import Select, { SingleValue } from 'react-select';
import { IconType } from '@/types';
import { Icon } from '@/Icon';
import { ReactNode } from 'react';
import { useStore } from '@/store';

type GridProps = { children: React.ReactNode };

export const Grid = function Table({ children }: GridProps): JSX.Element {
  return <div className="grid grid-cols-6">{children}</div>;
};

type LabelCellProps = { children: ReactNode };

export const LabelCell = function LabelCell({
  children,
}: LabelCellProps): JSX.Element {
  return <div className="col-span-4 flex items-center">{children}</div>;
};

type SelectCellProps = { children: ReactNode };

export const SelectCell = function SelectCell({
  children,
}: SelectCellProps): JSX.Element {
  return <div className="col-span-2">{children}</div>;
};

type Option = { value: IconType; label: ReactNode };

const options: Option[] = [
  { value: 'DEFAULT', label: <Icon type="DEFAULT" /> },
  { value: 'BLUE', label: <Icon type="BLUE" /> },
  { value: 'ORANGE', label: <Icon type="ORANGE" /> },
  { value: 'PINK', label: <Icon type="PINK" /> },
  { value: 'PURPLE', label: <Icon type="PURPLE" /> },
  { value: 'RED', label: <Icon type="RED" /> },
  { value: 'SKYBLUE', label: <Icon type="SKYBLUE" /> },
  { value: 'YELLOW', label: <Icon type="YELLOW" /> },
];

function App() {
  const { store, set } = useStore();

  const onChangePartnerIcon = (option: SingleValue<Option>) => {
    set((store) => (option ? { ...store, partnerIcon: option.value } : store));
  };

  const onChangeDevIcon = (option: SingleValue<Option>) => {
    set((store) => (option ? { ...store, devIcon: option.value } : store));
  };

  const onChangeAdminDefaultIcon = (option: SingleValue<Option>) => {
    set((store) =>
      option ? { ...store, adminDefaultIcon: option.value } : store,
    );
  };

  return (
    <div className="w-96 px-8 py-4">
      <Grid>
        <LabelCell>Shopify Partners</LabelCell>
        <SelectCell>
          <Select
            value={options.find((o) => o.value === store.partnerIcon)}
            options={options}
            onChange={onChangePartnerIcon}
          />
        </SelectCell>
        <LabelCell>.dev</LabelCell>
        <SelectCell>
          <Select
            value={options.find((o) => o.value === store.devIcon)}
            options={options}
            onChange={onChangeDevIcon}
          />
        </SelectCell>
        <LabelCell>Admin default</LabelCell>
        <SelectCell>
          <Select
            value={options.find((o) => o.value === store.adminDefaultIcon)}
            options={options}
            onChange={onChangeAdminDefaultIcon}
          />
        </SelectCell>
      </Grid>
    </div>
  );
}

export default App;
