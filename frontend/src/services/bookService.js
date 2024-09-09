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

    async createBook(book){
        const newBook = await axios.post(`http://localhost:5555/books`, book, 
            {
                headers: {
                'Content-Type': 'application/json',
                },
            })
        
        return newBook.data
    }

    async editBook(book, bookId){
        const bookEdited = await axios.put(`http://localhost:5555/books/${bookId}`, book,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        )

        return bookEdited.data
    }
}

export const bookService = new BookService()