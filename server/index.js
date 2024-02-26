import express from 'express';
import Connection from './Database/db.js';
import pkg from 'cors'
// import {cors} from 'cors';
import Routes from './Routes/route.js';
import bodyParser from 'body-parser';

const app = express();
const cors = pkg;
app.use(cors());

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))

app.use('/', Routes);

const PORT = 8000;

Connection();

app.listen(PORT, ()=> console.log(`Your server is running on port ${PORT}`))