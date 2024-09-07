import express from "express"
import { Book } from "../models/bookModel.js"

const router = express.Router()

router.get("/", async (req, res) => {
    try{
        const books = await Book.find({})

        return res.status(200).json({
            count: books.length,
            data: books
        })
    }catch(error){
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
})

router.get("/:id", async (req, res) => {
    try{
        const { id } = req.params
        const book = await Book.findById(id)

        return res.status(200).json(book)
    }catch(error){
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
})

router.put('/:id', async (req, res) => {
    try{
        // reworkear esto con lo mismo que en post
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return res.status(400).send({
                message: "Send all required fields"
            })
        }

        const { id } = req.params

        console.log(req.body)

        const result = await Book.findByIdAndUpdate(id, req.body)

        if(!result){
            return res.status(404).json({ message: "Book not found" })
        } 
        
        return res.status(200).send({ message: "Book updated successfully" })

    }catch(error){
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
})


router.post('/', async (req, res) => {
    try {
        // hacer la validacion con la lib. del otro curso
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return res.status(400).send({
                message: "Send all required fields"
            })
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        }

        const book = await Book.create(newBook)

        return res.status(201).send(book)

    }catch(error){
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
})

router.delete("/:id", async (req, res) => {
    try{
        const { id } = req.params

        const result = await Book.findByIdAndDelete(id)

        if(!result){
            return res.status(404).json({ message: "Book not found" })
        } 
        
        return res.status(200).send({ message: "Book deleted successfully" })

    }catch(error){
        // hacer un handleError en utilities con este codigo
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
})

export default router