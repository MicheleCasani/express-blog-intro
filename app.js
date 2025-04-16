// importo express
const express = require ('express');
// inizializzo express nella variabile app
const app = express();
// definisco il numero di porta
const port = 3000;

// definisco la rotta base
app.get('/', (req, res)=>{
    let landingPgace = 'Server del mio blog'
    res.send(landingPgace)
});

// definisco la seconda rotta 

// dico al server di rimanere in ascolto sulla porta assegnata, ovvero 3000
app.listen(port, () =>{
console.log(port);
});