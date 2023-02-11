import dotenv from 'dotenv'
dotenv.config()

import express from "express"
import cors from 'cors'

import groups from './routes/groups.routes'

const PORT = process.env.PORT || 8080;

const server = express();

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true}))

server.use('/groups', groups)

server.listen(PORT, () => {
    console.log(`SERVER: http://127.0.0.1:${PORT}`)    
})