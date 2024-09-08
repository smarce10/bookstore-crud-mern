import BookForm from "../components/BookForm"
import { useState, useEffect } from "react"
import { bookService } from "../services/bookService"

const CreateBook = ({ bookId }) => {

  const [book, setBook] = useState()

  const createBook = async () => {
    try {
      const book = await bookService.getBookById(bookId)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    
  }, [])


  return (
    <>
      <div className="w-full h-screen mx-auto p-4 bg-gray-900 flex justify-center">
        <BookForm />
      </div>
    </>
  )
}

export default CreateBook