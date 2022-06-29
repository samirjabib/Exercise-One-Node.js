//Utils
const { db , DataTypes } = require('../utils/database.utils') // 7- Import Database 

const Registration = db.define('registration', { // 8- Define Database 
    id:{
        primaryKey: true,
        autoIncrement:true,
        allowNull:false,
        type: DataTypes.INTEGER
    },
    entranceTime : {
        allowNull : false,
        type:DataTypes.DATE
    },
    exitTime: {
        type: DataTypes.DATE,
        allowNull:true
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:'working'
    },
});

module.exports = { Registration };