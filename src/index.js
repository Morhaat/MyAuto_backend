require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();
mongoose.connect(process.env.MONGODB_ACCESS, {
    useNewUrlParser: true ,
    useUnifiedTopology: true,
});

app.use(cors({ origin: 'http://localhost:3000'}));
app.use(express.json({limit: '50mb', extended: true}));
app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
//app.use(express.json());
app.use(routes);
app.listen(3333);