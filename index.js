const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const {createServer} = require('http')
const {Server} = require('socket.io')
const sequelize = require('./db/db')
const userRoutes = require('./routes/user')
const businessRoutes = require('./routes/business')
require('dotenv').config()

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer,{
    pingTimeout: 6000,
    cors:{
        origin: '*'
    }
})

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

httpServer.listen(process.env.PORT, () => {
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

io.on('connection', () => {
    console.log("connected");
})