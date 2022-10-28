const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config(); //env variables 

const app = express();
const port = process.env.PORT || 4003;

app.use(cors());
app.use(express.json()); //parse json //because server is going to send and receive json 

//connect db to mongodb atlas
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
// .then(() => console.log("Mongodb connected"))
// .catch(err => console.log(err));
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })

//  mongoose.connect(   mongoDb,   { useNewUrlParser: true } ); 
mongoose.Promise = global.Promise; 
const db = mongoose.connection; 
db.on("error", console.error.bind(console, "MongoDb connection error"));

 const exerciseRouter = require('./routes/exercises');
 const usersRouter = require('./routes/users');

 app.use('/exercises',exerciseRouter);
 app.use('/users',usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})