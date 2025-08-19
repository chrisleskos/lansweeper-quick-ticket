import { properties } from "./properties.js";

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const ENV = "mil"; //TODO: Populate from envLoader.js
  const config = properties[ENV];

  if (
    changeInfo.status === "complete" &&
    tab.url &&
    tab.url.includes(config.lansweeperHost + "*/NewTicket.aspx")
  ) {
    const queryParameters = tab.url.split("?")[1];
    const urlParameters = new URLSearchParams(queryParameters);

    chrome.tabs.sendMessage(tabId, {
      type: urlParameters.get(config.specialParameter),
    });
  }
});
