import express from "express"
import { createBookRouter } from "./routes/bookRoutes.js"
import cors from 'cors'
import mongoose from "mongoose"
import { PORT, mongoDBURL } from "./utilities/config.js"


export const createApp = ({ bookModel }) => {
    const app = express()

    app.use(express.json())

    app.use(cors())

    app.use("/books", createBookRouter({ bookModel }))

    // mongoose    
    // .connect(mongoDBURL)
    // .then(() => {
    //     console.log('App connected to database')
    //     app.listen(PORT, () => {
    //         console.log(`App is listening to port: ${PORT}`)
    //     })
    // })
    // .catch((error) => {
    //     console.log(error)
    // })

    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`)
    })
}

