// importo express
const express = require('express');

// inizializzo express nella variabile app
const app = express();

// definisco il numero di porta
const port = 3000;

// aggiungo lo strumento per recuperare gli asset statici
app.use(express.static('public'))

// definisco la rotta base
app.get('/', (req, res) => {
    let landingPage = 'Server del mio blog'
    res.send(landingPage)
});

// definisco la seconda rotta dove visualizzare i post
app.get('/bacheca', (req, res) => {
    let post = [
        {
            title: 'Ciambellone',
            content: 'un dolce per tutte le occasioni',
            image: "<img src = 'http://localhost:3000./imgs/ciambellone.jpeg'>",
            tags: ['burro', 'zucchero', 'uova'],
        },
        {
            title: 'Cracker alla Barbabietola',
            content: 'Dei Cracker diversi dal solito',
            image: 'imgs/cracker_barbabietola.jpeg',
            tags: ['barbabietola', 'semi', 'uova'],
        },
        {
            title: 'Pane Fritto',
            content: 'Quando non hai nulla in casa ma hai voglia di dolce',
            image: 'imgs/pane_fritto_dolce.jpeg',
            tags: ['zucchero', 'pane', 'olio di semi'],
        },
        {
            title: 'Pasta alla Barbabietola',
            content: 'Quando vuoi stupire tutti con un piatto eccentrico',
            image: 'imgs/pasta_barbabietloa.jpeg',
            tags: ['pasta', 'barbabietole', 'condimento a piacere'],
        },
        {
            title: 'Torta Paesana',
            content: 'un dolce storico che mantiene le tradizioni',
            image: 'imgs/torrta_paesana.jpeg',
            tags: ['burro', 'zucchero', 'uova', 'cioccolato', 'semi'],
        },
    ];
    res.send(post)
});

// dico al server di rimanere in ascolto sulla porta assegnata, ovvero 3000
app.listen(port, () => {
    console.log(port);
});