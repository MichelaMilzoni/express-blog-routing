// importo express
const express = require("express");

// inizializzo express
const app = express();

// importo dati da config.js
const config = require("./config.js");

// importo dati da cartella routers
//* posts.js
const postsRouter = require('./routers/posts.js')

// Servire file statici dalla cartella data/imgs con il prefisso /imgs
app.use("/imgs", express.static("data/imgs"));


// avvio del server mettendolo in ascolto sulla porta definita
app.listen(config.appPort, () => {
    console.log(`Server avviato su ${config.appUrl} + ${config.appPort}`);
})
