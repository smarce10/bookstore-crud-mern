import BookForm from "../components/BookForm"
import { useState, useEffect } from "react"
import { bookService } from "../services/bookService"
import { Book } from "../domain/book"

const CreateBook = () => {

  const [book, setBook] = useState()

  const createBook = async (newBook) => {
    try {
      const book = await bookService.createBook(newBook)
      console.log(`se ha creado:`)
      console.log(book)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const bookTest = {
      title: "title",
      author: "mariano",
      publishYear: 2000
    }

    const bookEntity = Book.fromJSON(bookTest)

    setBook(bookEntity)
  }, [])


  return (
    <>
      <div className="w-full h-screen mx-auto p-4 bg-gray-900 flex justify-center">
        <BookForm book={ book } operation={ createBook }/>
      </div>
    </>
  )
}

export default CreateBook