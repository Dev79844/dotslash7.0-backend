const User = require('../models/user')
const cookieToken = require('../utils/cookieToken')
const bcrypt = require('bcryptjs')

exports.signup = async(req,res) => {
    try {
        const {first_name,last_name,email,password,isSeller} = req.body 
        const existing = await User.findOne({
            where:{
                email: email
            }
        })

        if(existing) return res.status(400).json("user already exists")

        const user = await User.create({
            first_name,
            last_name,
            email,
            password,
            role: isSeller ? 'seller' : 'user'
        })

        cookieToken(user,res)
    } catch (error) {
        console.error(error);
        return res.status(500).json("Internal Server Error")
    }
}

exports.login = async(req,res) => {
    try {
        const {email,password} = req.body 
        const user = await User.findOne({
            where: {
                email
            }
        })

        if(!user){
            return res.status(400).json("no user found")
        }

        const isValidated = await bcrypt.compare(password,user.password)

        if(!isValidated){
            return res.status(400).json("wrong credentials")
        }

        cookieToken(user,res)
    } catch (error) {
        console.error(error);
        return res.status(500).json("Internal Server Error")
    }
}

exports.logout = (req,res) => {
    try {
        res.clearCookie('token')

        return res.status(200).json("logged out successfully")
    } catch (error) {
        console.error(error);
        return res.status(500).json("Internal Server Error")
    }
}
