import { properties } from "./properties.js";

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const ENV = "mil"; //TODO: Populate from envLoader.js
  const config = properties[ENV];

  if (changeInfo.status === "complete" && tab.url) {
    const url = new URL(tab.url);

    if (
      url.href.includes(config.lansweeperHost) &&
      url.pathname.endsWith(config.newTicketURL) &&
      url.searchParams.has(config.specialParameter)
    )
      chrome.tabs.sendMessage(tabId, {
        type: config.chromeMessagePrefix,
        id: url.searchParams.get(config.specialParameter),
      });
  }
});
