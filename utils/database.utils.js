const { Sequelize , DataTypes } = require('sequelize') // 3-Import Sequelize 

const db = new Sequelize({ // 4-Create Conexion to database 
    host:'localhost',
    username:'postgres',
    dialect:'postgres',
    password:"0265dante",
    port:5432, // por default en postgress siempre es 5432
    database:'Exercise-one NODE.JS',
    logging:false,
})

module.exports = { db ,DataTypes }