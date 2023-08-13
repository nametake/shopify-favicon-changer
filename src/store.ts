import { IconType, isIconType } from '@/types';

const STORAGE_KEY = 'SHOPIFY_FAVICON_CHANGER_STORAGE';

type StoreIcon = {
  name: string;
  type: IconType;
};

export type Store = {
  partnerIcon: IconType;
  devIcon: IconType;
  adminDefault: IconType;
  storeIcons: StoreIcon[];
};

const isAdminIcon = (data: { [key: string]: unknown }) => {
  if (typeof data.name !== 'string') return false;
  if (!isIconType(data.type)) return false;
  return true;
};

const isStore = (data: { [key: string]: unknown }): data is Store => {
  if (!isIconType(data.partnerIcon)) return false;
  if (!isIconType(data.devIcon)) return false;
  if (!isIconType(data.adminDefault)) return false;
  const storeIcons = data.storeIcons;
  if (!Array.isArray(storeIcons)) return false;
  if (!storeIcons.every(isAdminIcon)) return false;
  return true;
};

export const initStore: Store = {
  partnerIcon: 'RED',
  devIcon: 'BLUE',
  adminDefault: 'ORANGE',
  storeIcons: [],
};

export const getStore = async (): Promise<Store> => {
  const store = await chrome.storage.session.get(STORAGE_KEY);
  if (!isStore(store)) {
    return initStore;
  }
  return store;
};

export const setStore = (store: Store) => {
  return chrome.storage.session.set(store);
};
