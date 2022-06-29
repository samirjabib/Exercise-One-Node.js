const express = require('express'); // 0-Import express
const { registrationsRouter } = require('./routes/registrations.routes');  //11.2 Import registration routes

//Utils 
const { db } =require('./utils/database.utils') //5 -Import database



const app = express(); // 1- Init App 

app.use(express.json()) // 1.2 Accept incoming json data

//11.3- Define Endpoint
app.use('/api/v1/registrations', registrationsRouter)

db.authenticate() // 6- Test Database authenticate
    .then( () => console.log('database authenticated'))
    .catch( err => console.log(err));


db.sync() // 6.2 -sync up database
    .then( () => console.log('database synced'))
    .catch( err => console.log(err));

app.listen(3000, () =>{ // 2- Server Listen 
    console.log("cheking app running on port 3000")
});