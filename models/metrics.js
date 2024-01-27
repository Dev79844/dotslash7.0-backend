const sequelize = require('../db/db')
const {DataTypes} = require('sequelize')

const Metrics = sequelize.define('metrics',{
    metricId:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    customers:{
        type: DataTypes.STRING,
    },
    arr:{
        type: DataTypes.STRING,
    },
    agr:{
        type: DataTypes.STRING
    },
    businessId:{
        type: DataTypes.BIGINT
    }
}, {timestamps: false})

module.exports = Metrics