import jeuje from "../../src/jeuje.js";

const selector = "body";

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "interactive") {
        jeuje.readyStateIsInteractive(); // Probably not needed--we'll see
    } else if (event.target.readyState === "complete") {
        jeuje.readyStateIsComplete(init)
    }
});

function init() {
    console.info("INIT")
    /// THIS WILL DO ALL THE REAL WORK
    jeuje.init(selector);
}
