const sequelize = require('../db/db')
const {DataTypes} = require('sequelize')

const Competitors = sequelize.define('competitors',{
    competitorId:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    competitor:{
        type: DataTypes.STRING,
        allowNull: false
    },
    businessId:{
        type: DataTypes.BIGINT,
        allowNull: false
    }
},{timestamps: false})

module.exports = Competitors