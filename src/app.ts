require('dotenv').config()
import express from "express"
import config from "config"

const app = express()

const PORT = 3000

app.listen(PORT , ()=>{
    console.log('App started')
})
