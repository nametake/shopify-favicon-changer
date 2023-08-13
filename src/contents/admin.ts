import { icons } from '@/icons';
import { getStore } from '@/store';

const getStoreName = () => {
  const url = new URL(location.href);
  return url.pathname.split('/')[2];
};

const main = async () => {
  const store = await getStore();
  const storeName = getStoreName();
  const storeIcon =
    store.storeIcons.find((icon) => icon.name === storeName)?.type ??
    store.adminDefaultIcon;
  if (storeIcon === 'DEFAULT') {
    return;
  }

  const iconLink = icons.get(storeIcon);
  const link = document.querySelector("link[rel~='icon']");
  if (link instanceof HTMLLinkElement && iconLink) {
    link.href = chrome.runtime.getURL(iconLink);
  }
};

main();
