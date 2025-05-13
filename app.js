// importo express
const express = require("express");

// inizializzo express
const app = express();

// importo dati da config.js
const config = require("./config.js");

app.listen(config.appPortappPort, () => {
    console.log(`Server avviato su ${config.appUrl} + ${config.appPort}`);
})
