import redIcon from './assets/red.png'

const link = document.querySelector("link[rel~='icon']");
if (link instanceof HTMLLinkElement) {
  link.href = chrome.runtime.getURL(redIcon);
}
