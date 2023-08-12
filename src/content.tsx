import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import defaultIcon from './assets/default.ico'
// import reactLogo from './assets/react.svg'
import { share } from './share'

share()

const root = document.createElement("div");
root.id = "crx-root";
document.body.appendChild(root);

console.log("foo")

// const link = document.querySelector("link[rel~='icon']");
// if (!link) {
//   link = document.createElement('link');
//   link.rel = 'icon';
//   document.head.appendChild(link);
// }
// if (link) {
//   link.href = chrome.runtime.getURL(reactLogo);
// }

console.log(defaultIcon)
console.log(chrome.runtime.getURL(defaultIcon))

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
