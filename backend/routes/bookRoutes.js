import express from "express"
import { BookController } from "../controller/bookController.js"

export const createBookRouter = ({ bookModel }) => { 
    const bookRouter = express.Router()
    const bookController = new BookController({ bookModel })

    bookRouter.get("/", bookController.getAll)

    bookRouter.get("/:id", bookController.getById)

    bookRouter.put('/:id', bookController.update)

    bookRouter.post('/', bookController.create)

    bookRouter.delete("/:id", bookController.delete)

    return bookRouter
}
