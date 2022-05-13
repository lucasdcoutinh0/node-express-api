const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

app.get('/', (req, res) => {
    res.json({message: 'Teste'})
})

mongoose.connect('mongodb+srv://lucasdcoutinho:100lucas@cluster0.f1yex.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => {
    console.log('Conectado')
    app.listen(3000)
})
.catch(err => {
    console.log(err)
})