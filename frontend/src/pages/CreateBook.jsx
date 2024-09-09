import BookForm from "../components/BookForm"
import { useState, useEffect } from "react"
import { bookService } from "../services/bookService"
import { Book } from "../domain/book"
import { useSnackbar } from "notistack"
import { useNavigate } from "react-router-dom"

const CreateBook = () => {
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()


  const createBook = async (newBook) => {
    try {
      const book = await bookService.createBook(newBook)
      enqueueSnackbar('Book created succesfully', { variant: "success", autoHideDuration: 2000 })
      navigate("/")
      console.log(book)
    } catch (error) {
      enqueueSnackbar(`Something went wrong: ${error}`, { variant: "error", autoHideDuration: 2000 })
    }
  }

  return (
    <>
      <div className="w-full h-screen mx-auto p-4 bg-gray-900 flex justify-center">
        <BookForm book = { new Book() } operation={ createBook }/>
      </div>
    </>
  )
}

export default CreateBook