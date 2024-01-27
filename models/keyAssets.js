const sequelize = require('../db/db')
const {DataTypes} = require('sequelize')

const KeyAssets = sequelize.define('key_assets', {
    assetId:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING,
    },
    businessId:{
        type: DataTypes.BIGINT
    }
},{timestamps: false})

module.exports = KeyAssets