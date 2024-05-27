require('dotenv').config()
import express from "express"
import config from "config"
import connectToDB from "./utils/connectToDB"
import log from "./utils/logger"
import router from './routes'

const app = express()
app.use(router)

const PORT = config.get("PORT")

app.listen(PORT , ()=>{
    log.info(`App started at ${PORT}`)
    connectToDB();
})