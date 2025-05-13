// importo express
const express = require("express");

// inizializzo variabile router il cui valore è un'istanza di express()
const router = express.Router();

// importo i dati dell'array
const postsData = require('../data/postsData'); 

//definisco le rotte
//! index
router.get("/", (req, res) => {
    res.json({
        message: "Visualizzo la lista di tutti i posts",
        data: postsData
    });
});

//! show
router.get("/:id", (req, res) => {
  console.log("ID ricevuto:", req.params.id);
  console.log("Array dei post:", postsData);

  const post = postsData.find((p) => p.id === parseInt(req.params.id));

  if (post) {
    res.json(post);
  } else {
    res.status(404).send("Post non trovato");
  }
});

//! store
router.post('/', (req, res) => {
    res.send('Creo un nuovo post');
});

//! update
router.put('/:id', (req, res) => {
    res.send('Sostituisco/modifico interamente un post');
});

//! modify
router.patch('/:id', (req, res) => {
    res.send('Modifico parzialmente un post');
});

//! destroy
router.delete('/:id', (req, res) => {
    res.send('Elimino un post');
});

module.exports = router;

