const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const google = require('googleapis');

const app = express();

mongoose.connect('mongodb+srv://systemMyAuto:Dboma5636Agrivalova1901@cluster0.wgd6c.mongodb.net/systemMyAuto?retryWrites=true&w=majority', {
    useNewUrlParser: true ,
    useUnifiedTopology: true,
});

app.use(cors({ origin: 'http://localhost:3000'})); 
app.use(express.json());
app.use(routes);
app.listen(3333);