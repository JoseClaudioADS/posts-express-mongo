const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

mongoose.connect('mongodb+srv://mongopost:postpost@cluster0-zjuyi.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useFindAndModify: true
});


async function testar() {
    
    const Test = mongoose.model('Test', {name: String});
    
    const t = new Test({name: "Testando mongoose"});
    await t.save().then(() => {
        console.log('Objeto criado');
    })
}

testar();

app.listen('3000');