/// index.js

const express = require('express');
const mongoose = require('mongoose');
const routerx = require('./routes/routes');
const cors = require('cors');
const userRouter = require('./routes/userrouter')

const server = express();

server.use(cors());

server.use(cors({
    origin: 'http://localhost:5173'
  }));
 
server.use(express.json());

server.use('/',routerx.router);
server.use('/',userRouter.router)




async function main(){
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/gamedb')
        console.log("mongo connected");
        server.listen(8080);
        console.log("server started");
    }
    catch(err){
        console.log(err)
    }
}

main();


