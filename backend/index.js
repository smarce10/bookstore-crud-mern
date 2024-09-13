import express from "express"
import { createBookRouter } from "./routes/bookRoutes.js"
import cors from 'cors'
import { PORT } from "./utilities/config.js"


export const createApp = ({ bookModel }) => {
    const app = express()

    app.use(express.json())

    app.use(cors())

    app.use("/books", createBookRouter({ bookModel }))

    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`)
    })
}

