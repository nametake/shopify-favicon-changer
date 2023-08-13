import blueIcon from '@/assets/blue.png';

const link = document.querySelector("link[rel~='icon']");
if (link instanceof HTMLLinkElement) {
  link.href = chrome.runtime.getURL(blueIcon);
}
