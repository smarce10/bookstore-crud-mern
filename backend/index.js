import express, { response } from "express"
import { PORT, mongoDBURL } from "./utilities/config.js"
import mongoose from 'mongoose'
import { Book } from "./models/bookModel.js"
import booksRoute from "./routes/bookRoutes.js"
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.get("/", (req, res) => {
    res.send("<h1>HOLA</h1>")
})

app.use("/books", booksRoute)

mongoose    
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database')
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })