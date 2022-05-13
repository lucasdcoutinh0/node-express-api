const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const port = process.env.PORT || 3000;

const app = express();

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

const serieRoutes = require('./routes/serieRoutes')

app.use('/serie', serieRoutes)

app.get('/', (req, res) => {
    res.json({message: 'Teste'})
})

mongoose.connect(`mongodb+srv://${process.env.LOGIN}:${process.env.PASSOWRD}@cluster0.f1yex.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
.then(() => {
    console.log('Conectado')
    app.listen(port)
})
.catch(err => {
    console.log(err)
})