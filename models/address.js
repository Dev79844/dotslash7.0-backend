const sequelize = require('../db/db')
const {DataTypes} = require('sequelize')
const User = require('./user')

const Address = sequelize.define('addresses', {
    addressId:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    address_line_1:{
        type:DataTypes.STRING
    },
    address_line_2:{
        type:DataTypes.STRING
    },
    countryId:{
        type:DataTypes.INTEGER
    },
    city:{
        type: DataTypes.STRING,
    },
    state:{
        type:DataTypes.STRING,
    },
    zipCode:{
        type: DataTypes.STRING
    }
},{
    timestamps: true
})

module.exports = Address