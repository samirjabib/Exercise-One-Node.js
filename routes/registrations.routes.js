const express = require('express'); // 9-import express.

const registrationsRouter = express.Router(); // 10- Create Route Registration.


const {  // 13-Import controllers 
    getAllRregistrations,
    getRegistrationByID,
    checkin,
    checkout,
    cancelRegistration,
} = require('../controller/registrations.controller')

//11-Routes EndPoints  


registrationsRouter.get('/', getAllRregistrations);

registrationsRouter.get('/:id', getRegistrationByID);

registrationsRouter.post('/', checkin);

registrationsRouter.patch('/:id', checkout);

registrationsRouter.delete('/:id', cancelRegistration);


module.exports = { registrationsRouter };