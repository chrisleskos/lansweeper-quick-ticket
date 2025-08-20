import { properties } from "./properties.js";

() => {
  const ENV = "mil"; //TODO: Populate from envLoader.js
  const config = properties[ENV];

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type } = obj;
    if (type === config.content.resetMod.id) {
      tsubject = document.querySelector(config.dom.subjectFieldId);
      tsubject.value = config.dom.subjectFieldId;
    }
  });
};
