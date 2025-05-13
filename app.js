// importo express
const express = require("express");

// inizializzo express
const app = express();

// importo dati da config.js
const { config, posts } = require("./config.js");


// avvio del server mettendolo in ascolto sulla porta definita
app.listen(config.appPortappPort, () => {
    console.log(`Server avviato su ${config.appUrl} + ${config.appPort}`);
})
