import BookForm from "../components/BookForm"
// import { Book } from "../domain/book"
import { useNavigate } from "react-router-dom"
import { bookService } from "../services/bookService"
import { useSnackbar } from "notistack"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const EditBook = () => {
  const [bookToEdit, setBookToEdit] = useState()
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()
  const { id } = useParams()

  const getBook = async() => {
    try{
      const book = await bookService.getBookById(id)
      setBookToEdit(book)
    }catch(error){
      enqueueSnackbar(`Something went wrong: ${error}`, { variant: "error", autoHideDuration: 2000 })
    }
  }

  const editBook = async (editedBook) => {
    try {
      const book = await bookService.editBook(editedBook, id)
      enqueueSnackbar('Book edited succesfully', { variant: "success", autoHideDuration: 2000 })
      navigate("/")
    } catch (error) {
      enqueueSnackbar(`Something went wrong: ${error}`, { variant: "error", autoHideDuration: 2000 })
    }
  }

  useEffect(() => {
    getBook()
  }, [])

  return (
    <>
      <div className="w-full h-screen mx-auto p-4 bg-gray-900 flex justify-center">
        <BookForm book = { bookToEdit } operation={ editBook }/>
      </div>
    </>
  )
}

export default EditBook