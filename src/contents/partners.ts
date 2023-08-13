import { icons } from '@/icons';
import { getStore } from '@/store';

const main = async () => {
  const store = await getStore();
  if (store.partnerIcon === 'DEFAULT') {
    return;
  }

  const iconLink = icons.get(store.partnerIcon);
  const link = document.querySelector("link[rel~='icon']");
  if (link instanceof HTMLLinkElement && iconLink) {
    link.href = chrome.runtime.getURL(iconLink);
  }
};

main();
