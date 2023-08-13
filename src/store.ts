import { useEffect, useState } from 'react';
import { IconType, isIconType } from '@/types';

const STORAGE_KEY = 'SHOPIFY_FAVICON_CHANGER_STORAGE';

type StoreIcon = {
  name: string;
  type: IconType;
};

export type Store = {
  partnerIcon: IconType;
  devIcon: IconType;
  adminDefaultIcon: IconType;
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
  if (!isIconType(data.adminDefaultIcon)) return false;
  const storeIcons = data.storeIcons;
  if (!Array.isArray(storeIcons)) return false;
  if (!storeIcons.every(isAdminIcon)) return false;
  return true;
};

export const initStore: Store = {
  partnerIcon: 'RED',
  devIcon: 'BLUE',
  adminDefaultIcon: 'ORANGE',
  storeIcons: [],
};

export const getStore = async (): Promise<Store> => {
  const store = (await chrome.storage.sync.get([STORAGE_KEY]))[STORAGE_KEY];
  if (!isStore(store)) {
    return initStore;
  }
  return store;
};

export const useStore = () => {
  const [store, setStore] = useState<Store>(initStore);
  chrome.storage.onChanged.addListener((changes) => {
    const next = changes[STORAGE_KEY]?.newValue;
    if (!next) return;
    setStore((prev) => ({ ...prev, ...next }));
  });

  useEffect(() => {
    (async () => {
      setStore(await getStore());
    })();
  }, []);

  return {
    store,
    set: (fn: (store: Store) => Store) => {
      chrome.storage.sync.set({ [STORAGE_KEY]: fn(store) });
    },
  };
};
