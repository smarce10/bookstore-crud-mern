import axios from 'axios'
import { Book } from '../domain/book'

class BookService {

    async getBooks(){
        const booksJSON = await axios.get('http://localhost:5555/books')
        const books = booksJSON.data.data.map((bookJSON) => Book.fromJSON(bookJSON))

        return books
    }

    async getBookById(id){
        const bookJSON = await axios.get(`http://localhost:5555/books/${id}`)
        const book = Book.fromJSON(bookJSON.data)

        return book
    }
}

export const bookService = new BookService()