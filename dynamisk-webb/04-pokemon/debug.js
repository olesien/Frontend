const debug = require("debug");

const express = require("express");

const app = express();

const testLogger = debug("logger");

const testLogger1 = debug("logger1");
const testLogger2 = debug("logger2");

testLogger("Detta är min test logger");
testLogger1("Test logger 1");

testLogger2("Test logger 2");

const log = debug("log");

// log(app);

const person = { name: "martin", email: "martin@gmail.com" };

console.log("I RAN");

log(person);

log("%o", person);

log("%o", app);

log("%p är min användare", person);
// DEBUG=* node debug
debug.formatters.p = (p) => {
    return "Mitt format " + p.id;
};

log("%p är min användare", person);
