require("bootstrap");
const createEl = require("./domMethods");
const createLoremIpsum = require("./helpers");

if (window.location.href.indexOf("event") > -1) {
    const currentEvent = JSON.parse(localStorage.getItem("currentEvent")) || {
        title: "Title Placeholder",
        subtitle: "",
        description: ""
    };
  }