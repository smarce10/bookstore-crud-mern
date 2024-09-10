import { useState, useEffect } from "react"
import { bookService } from "../services/bookService"
import { Link } from "react-router-dom"
import { FaPlusCircle } from "react-icons/fa"
import ModalDelete from "../components/ModalDelete"
import TableView from "../components/TableView"
import CardView from "../components/CardView"


const Home = () => {

  const [books, setBooks] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [selectedBook, setSelectedBook] = useState()
  const [viewMode, setViewMode] = useState("card")

  const getBooks = async () => {
    try {
      const books = await bookService.getBooks()
      setBooks(books)
    } catch (error) {
      console.log(error)
    } 
  }

  const configureModal = (bookId) => {
      setShowModal(true)
      setSelectedBook(bookId)
  }

  useEffect(()=> {
    getBooks()
  }, [])

  return (
    <>
      <div className="w-full min-h-screen mx-auto p-4 bg-gray-900">
        <div className="flex justify-center sm:justify-between items-center mb-2 sm:mb-0">
          <h1 className="font-bold text-gray-100 text-6xl">Book List</h1>

          <div className="hidden sm:flex sm:gap-8">
            <div className="flex items-center gap-2 font-bold text-gray-900">
              <button 
                  className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300"
                  onClick={() => setViewMode("table")}
              >
                Table View
              </button>
              <button 
                className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300"
                onClick={() => setViewMode("card")}
              >
                Card View
              </button>
            </div>

            <Link to={`books/create`}>
              <FaPlusCircle className="h-full text-5xl text-gray-100 hover:text-gray-300 hover:scale-105 hover:shadow-lg transition-all duration-300" title="Add book"/>
            </Link>
          </div>
        </div>
        {
          viewMode === "card" ? 
            <CardView books={ books } configureModal={configureModal} />
            :
            <TableView books={ books } configureModal={configureModal}/>
        }
        {
          showModal && (
            <ModalDelete handleClose={() => {
              setShowModal(false)
              getBooks()
            }} bookId={selectedBook}/>
          )
        }
      </div>
    </>
  )
}

export default Home