
/*
(Body Funtion)
const controller = async (req, res, next,)  => {
    try{
    }catch(error){
    }
}
    
*/

//12-Create Controller and define the body of function.



//Models 
const { Registration } = require('../models/registration.model')

//Controllers


const getAllRregistrations = async (req, res, next,)  =>{
    //logic for .get all
    try{
        const registrations = await Registration.findAll();

        res.status(200).json( {registrations} );
    }catch(error){
    }

}


const getRegistrationByID = async (req, res, next,) => {
    //logic for .get by id
    try{
        const { id } = req.params;
        
        const registration = await Registration.findOne( {where: { id }});
    
        if(!registration) {
            return res.status(404).json({
                status:'error',
                mmesagge:'registration dont found',
            })
        }

        res.status(200).json({registration});
    }catch(err){
    }
        
}

const checkin = async (req, res, next,)  => {
    //logic for post by id
    try{

        const { entranceTime } = req.body;

        const newRegistration = await Registration.create({ entranceTime});
        res.status(201).json({
            newRegistration,
        })
    }catch(err){
        console.log(err)
}

}

const checkout = async (req, res, next,) =>{
    //Logic for patch
    try{
        const { id } = req.params;
        const { exitTime } = req.body;

        const registration = await Registration.findOne( {where: { id }});

        if(!registration) {
            return res.status(404).json({
                status:'error',
                mmesagge:'registration dont found',
            });
        };
        
        await registration.update( {exitTime, status:'out'});

        res.status(204).json({status :'success'});
        
        }catch(err){
            console.log(err)
    }

}


const cancelRegistration = async (req, res, next,)  =>{
    try{
        //logic for DELETE.
        const { id } = req.params;
        const registration = await Registration.findOne( {where: { id }});

        if(!registration) {
            return res.status(404).json({
                status:'error',
                mmesagge:'registration dont found',
            });
        };
        
        
        await registration.update( {status : 'cancelled'});

        res.status(204).json({status :'success'});
        
    }catch(err){
        console.log(err)
    }
}


module.exports ={ 
    getAllRregistrations, 
    getRegistrationByID, 
    checkin, 
    checkout, 
    cancelRegistration, 
};