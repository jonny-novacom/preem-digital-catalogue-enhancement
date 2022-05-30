import React from "react";
import Layout from "./src/components/Layout";
import "./src/styles/global.css";

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

// export const onRouteUpdate = () => {
//   navigator.serviceWorker.register('/sw.js').then((reg) => {
//     reg.update();
//   });
// };

// export const onServiceWorkerUpdateReady = () => {
//   window.location.reload(true)
// };

// export const onServiceWorkerUpdateReady = () => {
//   const answer = window.confirm(
//     `This application has been updated. ` +
//       `Reload to display the latest version?`
//   );
//   if (answer === true) {
//     window.location.reload();
//   }
// };

// export const registerServiceWorker = () => true;

// trigger an immediate page refresh when an update is found
export const onServiceWorkerUpdateReady = () => window.location.reload();

// exports.onServiceWorkerUpdateFound = () => {
//   if (
//     window.confirm(
//       "This site has been updated with new data. Do you wish to reload the site to get the new data?"
//     )
//   ) {
//     window.location.reload(true);
//   }
// };
