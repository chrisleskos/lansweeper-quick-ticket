import { properties } from "./properties.js";

(() => {
  const ENV = "mil"; //TODO: Populate from envLoader.js
  const config = properties[ENV];

  document.getElementById("resetModBtn").addEventListener("click", () => {
    menuBtnOnClick(config, config.content.resetMod.id);
  });

  document.getElementById("resetWebBtn").addEventListener("click", () => {
    menuBtnOnClick(config, config.content.resetWeb.id);
  });

  document.getElementById("conferenceCallBtn").addEventListener("click", () => {
    menuBtnOnClick(config, config.content.conferenceCall.id);
  });

  document.getElementById("test").addEventListener("click", () => {
    menuBtnOnClick(config, config.content.testTicket.id);
  });
})();

const menuBtnOnClick = (config, specialParameter) => {
  const url = new URL(`${config.lansweeperHost}${config.newTicketURL}`);

  // Add special parameter to indicate the quick ticket
  url.searchParams.set(config.specialParameter, specialParameter);

  chrome.tabs.create({
    url: url.toString(),
  });
};
