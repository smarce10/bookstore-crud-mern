import { validateBook, validatePartialBook } from "../schemas/bookSchema.js"

export class BookController {
    constructor( {bookModel} ){
        this.bookModel = bookModel
    }

    getAll = async (req, res) => {
        try{
            const books = await this.bookModel.find({})
            return res.status(200).json({
                count: books.length,
                data: books
            })
        }catch(error){
            console.log(error.message)
            res.status(500).send({message: error.message})
        }
    }

    getById = async (req, res) => {
        try{
            const { id } = req.params
            const book = await this.bookModel.findById(id)
            return res.status(200).json(book)
        }catch(error){
            console.log(error.message)
            res.status(500).send({message: error.message})
        }
    }

    create = async (req, res) => {
        try {
            const result = validateBook(req.body)
            if(result.error){
                return res.status(400).json({ error: JSON.parse(result.error.message) })
            }

            const newBook = {
                title: req.body.title,
                author: req.body.author,
                publishYear: req.body.publishYear,
            }

            const book = await this.bookModel.create(newBook)

            return res.status(201).send(book)

        }catch(error){
            console.log(error.message)
            res.status(500).send({message: error.message})
        }
    }

    delete = async (req, res) =>{
        try{
            const { id } = req.params

            const result = await this.bookModel.findByIdAndDelete(id)

            if(!result){
                return res.status(404).json({ message: "Book not found" })
            } 
            
            return res.status(200).send({ message: "Book deleted successfully" })

        }catch(error){
            console.log(error.message)
            res.status(500).send({message: error.message})
        }
    }

    update = async (req, res) => {
        try{
            const resultValidate = validatePartialBook(req.body)

            if (!resultValidate.success) {
                return res.status(400).json({ error: JSON.parse(result.error.message) })
            }

            const { id } = req.params

            const result = await this.bookModel.findByIdAndUpdate(id, req.body)

            if(!result){
                return res.status(404).json({ message: "Book not found" })
            } 
            
            return res.status(200).send({ message: "Book updated successfully" })

        }catch(error){
            console.log(error.message)
            res.status(500).send({message: error.message})
        }
    }
}