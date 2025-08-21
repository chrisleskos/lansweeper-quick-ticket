(() => {
  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, id, config } = obj;

    if (type !== config.chromeMessagePrefix) return;

    if (id === config.content.testTicket.id) {
      testTicketPreFill(config);
    } else if (id === config.content.resetMod.id) {
      resetModPreFill(config);
    }
  });
})();

const testTicketPreFill = (config) => {
  tsubject = document.querySelector(config.dom.testFieldId);
  tsubject.value = config.content.testTicket.subject;
};

const resetModPreFill = (config) => {
  tsubject = document.querySelector(config.dom.testFieldId);
  tsubject.value = config.content.testTicket.subject;
};
