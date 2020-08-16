const express = require('express');
const app = express();

app.get('/ola', (req, res)=> {
    res.status(200).send({message: 'oi eu sou a rota ola!'});
})

app.listen(3301, ()=> {
    console.log('Api rodando na porta 3001');
})
