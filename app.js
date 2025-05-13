// importo express
const express = require("express");
// importo dati da config.js
const config = require("./config.js");
// importo dati da cartella routers
//* posts.js
const postsRouter = require('./routers/posts.js');

// inizializzo express
const app = express();

// Middleware per il parsing del body delle richieste
app.use(express.json());

// Servire file statici dalla cartella data/imgs con il prefisso /imgs
app.use("/imgs", express.static("data/imgs"));

// Registrare il router dei post
app.use("/posts", postsRouter);

// avvio del server mettendolo in ascolto sulla porta definita
app.listen(config.appPort, () => {
    console.log(`Server avviato su ${config.appUrl}${config.appPort}`);
})
