import { icons } from '@/icons';
import { getStore } from '@/store';

const main = async () => {
  const store = await getStore();
  if (store.adminDefaultIcon === 'DEFAULT') {
    return;
  }

  const iconLink = icons.get(store.adminDefaultIcon);
  const link = document.querySelector("link[rel~='icon']");
  if (link instanceof HTMLLinkElement && iconLink) {
    link.href = chrome.runtime.getURL(iconLink);
  }
};

main();
