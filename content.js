(() => {
  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, id, config } = obj;

    if (type !== config.chromeMessagePrefix) return;

    if (id === config.content.testTicket.id) {
      testTicketPreFill(config);
    } else if (id === config.content.resetMod.id) {
      resetModPreFill(config);
    } else if (id === config.content.resetWeb.id) {
      resetWebPreFill(config);
    } else if (id === config.content.conferenceCall.id) {
      conferenceCallPreFill(config);
    }
  });
})();

const testTicketPreFill = (config) => {
  tsubject = document.querySelector(config.dom.testFieldId);
  tsubject.value = config.content.testTicket.subject;
};

const resetModPreFill = (config) => {
  tsubject = document.querySelector(config.dom.subjectFieldId);
  tsubject.value = config.content.resetMod.subject;
};

const resetWebPreFill = (config) => {
  tsubject = document.querySelector(config.dom.subjectFieldId);
  tsubject.value = config.content.resetWeb.subject;
};

const conferenceCallPreFill = (config) => {
  tsubject = document.querySelector(config.dom.subjectFieldId);
  tsubject.value = config.content.conferenceCall.subject;
};
