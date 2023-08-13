import Select, { SingleValue } from 'react-select';
import { IconType } from '@/types';
import { Icon } from '@/Icon';
import { ReactNode } from 'react';
import { useStore } from '@/store';
import React from 'react';

type GridProps = { children: React.ReactNode };

export const Grid = function Table({ children }: GridProps): JSX.Element {
  return <div className="grid grid-cols-6 gap-y-2 gap-x-1">{children}</div>;
};

type LabelCellProps = { children: ReactNode };

export const LabelCell = function LabelCell({
  children,
}: LabelCellProps): JSX.Element {
  return (
    <div className="col-span-4 flex items-center text-base">{children}</div>
  );
};

type SectionCellProps = { children: ReactNode };

export const SectionCell = function SectionCell({
  children,
}: SectionCellProps): JSX.Element {
  return <div className="col-span-6">{children}</div>;
};

type SelectCellProps = { children: ReactNode };

export const SelectCell = function SelectCell({
  children,
}: SelectCellProps): JSX.Element {
  return <div className="col-span-2">{children}</div>;
};

type DeleteButtonCellProps = { children: ReactNode };

export const DeleteButtonCell = function DeleteButtonCell({
  children,
}: DeleteButtonCellProps): JSX.Element {
  return <div className="col-span-1 flex items-center">{children}</div>;
};

type InputCellProps = { children: ReactNode };

export const InputCell = function InputCell({
  children,
}: InputCellProps): JSX.Element {
  return <div className="col-span-3">{children}</div>;
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

  const onClickAdd = () => {
    set((store) => ({
      ...store,
      storeIcons: [
        ...store.storeIcons,
        { name: '', type: store.adminDefaultIcon },
      ],
    }));
  };

  const onClickDeleteFn = (index: number) => () => {
    set((store) => ({
      ...store,
      storeIcons: store.storeIcons.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="w-96 px-8 py-4">
      <Grid>
        <LabelCell>Shopify Partners</LabelCell>
        <SelectCell>
          {' '}
          <Select
            value={options.find((o) => o.value === store.partnerIcon)}
            options={options}
            onChange={onChangePartnerIcon}
          />
        </SelectCell>
        <LabelCell>Shopify Dev</LabelCell>
        <SelectCell>
          <Select
            value={options.find((o) => o.value === store.devIcon)}
            options={options}
            onChange={onChangeDevIcon}
          />
        </SelectCell>
        <LabelCell>Store Admin Default</LabelCell>
        <SelectCell>
          <Select
            value={options.find((o) => o.value === store.adminDefaultIcon)}
            options={options}
            onChange={onChangeAdminDefaultIcon}
          />
        </SelectCell>
        <SectionCell>
          <div className="text-base">Stores</div>
        </SectionCell>
        {store.storeIcons.map((storeIcon, index) => (
          <React.Fragment key={index}>
            <DeleteButtonCell>
              <button
                className="bg-rose-50 hover:bg-rose-100 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={onClickDeleteFn(index)}
              >
                x
              </button>
            </DeleteButtonCell>
            <InputCell>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                value={storeIcon.name}
              />
            </InputCell>
            <SelectCell>
              <Select
                value={options.find((o) => o.value === storeIcon.type)}
                options={options}
                onChange={onChangeAdminDefaultIcon}
              />
            </SelectCell>
          </React.Fragment>
        ))}
        <SectionCell>
          <button
            className="bg-blue-50 hover:bg-blue-100 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onClickAdd}
          >
            Add
          </button>
        </SectionCell>
      </Grid>
    </div>
  );
}

export default App;
