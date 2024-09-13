import { useState, useEffect } from "react"
import { bookService } from "../services/bookService"
import ModalDelete from "../components/ModalDelete"
import TableView from "../components/TableView"
import CardView from "../components/CardView"
import Loader from "../components/Loader"
import ModalInfo from "../components/ModalInfo"
import AddBtn from "../components/AddBtn"


const Home = () => {

  const [books, setBooks] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [showModalInfo, setShowModalInfo] = useState(false)
  const [selectedBook, setSelectedBook] = useState()
  const [viewMode, setViewMode] = useState("card")
  const [useLoader, setUseLoader] = useState()

  const getBooks = async () => {
    try {
      const books = await bookService.getBooks()
      setBooks(books)
      setUseLoader(false)
    } catch (error) {
      console.log(error)
    } 
  }

  const configureModalDelete = (bookId) => {
      setShowModal(true)
      setSelectedBook(bookId)
  }

  const configureModalInfo = (book) => {
    setShowModalInfo(true)
    setSelectedBook(book)
  }

  useEffect(()=> {
    setUseLoader(true)
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

            <AddBtn/>
          </div>
        </div>
        {useLoader ? (
          <Loader/>
        ) : viewMode === "card" ? (
            <CardView books={ books } configureModalDelete={ configureModalDelete } configureModalInfo={ configureModalInfo }/>
        ) : (
            <TableView books={ books } configureModalDelete={ configureModalDelete } configureModalInfo={ configureModalInfo }/>
        )}
        <div className="w-full flex justify-center items-center sm:hidden">
          <AddBtn style={"mt-2"}/>
        </div>
        {
          showModal && (
            <ModalDelete handleClose={() => {
              setShowModal(false)
              getBooks()
            }} bookId={selectedBook}/>
          )
        }
        {
          showModalInfo && (
            <ModalInfo handleClose={() => {
              setShowModalInfo(false)
            }} book={selectedBook}/>
          )
        }
      </div>
    </>
  )
}

export default Home