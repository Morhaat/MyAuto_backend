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
app.use(cors());
//app.use(cors({ origin: 'http://192.168.1.103:3000'}));
//app.use(cors({ origin: 'http://localhost:3000'}));
app.use(express.json({limit: '15mb', extended: true}));
app.use(express.urlencoded({limit: "15mb", extended: true, parameterLimit:15728640}));
//app.use(express.json());
app.use(routes);
app.listen(3333);