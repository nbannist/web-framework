const jeuje = (() => {
    function readyStateIsInteractive(fn) {
        console.info("Interactive")
        if (fn) {
            console.log('executing readyStateIsInteractive fn')
            fn()
        }
    }
    function readyStateIsComplete(fn) {
        console.info("Complete")
        if (fn) {
            console.log('executing readyStateIsComplete fn')
            fn()
        }
    }
    function init(selector) {
        console.info("Init")
        if (selector && selector !== "") {
            jeuje.itUp(selector);
        } else {
            jeuje.itUp("html > body");
        }
    }
    function itUp(selector) {
        console.info("jeuje.itUp(" + selector + "): ");
    }

    return ({
        readyStateIsComplete: readyStateIsComplete,
        readyStateIsInteractive: readyStateIsInteractive,
        init: init,
        itUp: itUp,
    });
})()

export default jeuje;