(() => {
  console.log("guess who's in 1");

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, id } = obj;
    console.log("guess who's in 2");
    if (type === "TPENT_QUICK_TICKET") {
      console.log("guess who's in");
      tsubject = document.querySelector("#APjFqb");
      tsubject.value = "HELLOOOOOO";
    }
  });
})();
