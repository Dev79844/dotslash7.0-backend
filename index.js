const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const sequelize = require('./db/db')
const userRoutes = require('./routes/user')
const businessRoutes = require('./routes/business')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cookieParser())

// logging
app.use(morgan("tiny"))

app.use(cors({
    origin: "*",
    allowedHeaders: ["*"]
}))

app.get("/api/v1/test", (req,res) => {
    res.send("checked!")
})

app.use("/api/v1",userRoutes)
app.use("/api/v1",businessRoutes)

app.listen(process.env.PORT, () => {
    sequelize.authenticate()
    .then(() => {
        console.info(`DB connected`);
        console.log(`Server started on port ${process.env.PORT}`);
    })
    .catch(err => {
        console.error(err);
        process.exit(1)
    })
})