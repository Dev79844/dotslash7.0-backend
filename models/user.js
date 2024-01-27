const {DataTypes} = require('sequelize')
const sequelize = require('../db/db')
const bcrypt = require('bcryptjs')

const User = sequelize.define('users',{
    userId:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    first_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    role:{
        type: DataTypes.ENUM('seller', 'user', 'admin'),
        defaultValue: 'user',
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: true,
    hooks:{
        beforeCreate: async(user) => {
            if(user.password){
                user.password = await bcrypt.hash(user.password,10)
            }
        }
    }
})

module.exports = User