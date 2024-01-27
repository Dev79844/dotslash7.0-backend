const sequelize = require('../db/db')
const {DataTypes} = require('sequelize')

const Business = sequelize.define('businesses', {
    businessId:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    addressId:{
        type: DataTypes.BIGINT,
        allowNull: false
    },
    short_desc: {
        type: DataTypes.TEXT
    },
    description:{
        type: DataTypes.TEXT,
    },
    ttm_revenue:{
        type: DataTypes.STRING
    },
    ttm_profit:{
        type: DataTypes.STRING
    },
    monthly_revenue:{
        type:DataTypes.STRING
    },
    monthly_profit:{
        type: DataTypes.STRING
    },
    date_found:{
        type: DataTypes.STRING,
    },
    team_size:{
        type: DataTypes.STRING
    },
    business_model:{
        type: DataTypes.TEXT
    },
    tech_stack:{
        type: DataTypes.TEXT
    },
    growth_opportunities:{
        type: DataTypes.TEXT,
    },
    reason_for_selling:{
        type: DataTypes.TEXT,
    },
    financing: {
        type: DataTypes.TEXT,
    },
    asking_price:{
        type: DataTypes.STRING,
    },
    asking_price_reasoning:{
        type: DataTypes.TEXT
    }
},{timestamps: true})

module.exports = Business