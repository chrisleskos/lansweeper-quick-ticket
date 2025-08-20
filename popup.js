import { properties } from "./properties.js";

const ENV = "mil"; //TODO: Populate from envLoader.js
const config = properties[ENV];

document.getElementById("resetModBtn").addEventListener("click", () => {
  const url = new URL(`${config.lansweeperHost}${config.newTicketURL}`);

  // Add special parameter to indicate the quick ticket
  url.searchParams.set(config.specialParameter, config.content.resetMod.id);

  chrome.tabs.create({
    url: url.toString(),
  });
});

document.getElementById("resetWebBtn").addEventListener("click", () => {
  const url = new URL(`${config.lansweeperHost}${config.newTicketURL}`);

  // Add special parameter to indicate the quick ticket
  url.searchParams.set(config.specialParameter, config.content.resetWeb.id);

  chrome.tabs.create({
    url: url.toString(),
  });
});

document.getElementById("conferenceCallBtn").addEventListener("click", () => {
  const url = new URL(`${config.lansweeperHost}${config.newTicketURL}`);

  // Add special parameter to indicate the quick ticket
  url.searchParams.set(
    config.specialParameter,
    config.content.conferenceCall.id
  );

  chrome.tabs.create({
    url: url.toString(),
  });
});

document.getElementById("test").addEventListener("click", () => {
  const url = new URL(`https://${config.lansweeperHost}${config.newTicketURL}`);

  // Add special parameter to indicate the quick ticket
  url.searchParams.set(config.specialParameter, config.content.testTicket.id);
  console.log(url.toString());

  chrome.tabs.create({
    url: url.toString(),
  });
});
