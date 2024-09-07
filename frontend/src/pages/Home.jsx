import { useState, useEffect } from "react"
import { bookService } from "../services/bookService"
import { FaTrash } from "react-icons/fa"
import { FaInfoCircle } from "react-icons/fa"
import { FaPencilAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import { FaPlusCircle } from "react-icons/fa"


const Home = () => {

  const [books, setBooks] = useState([])

  const getBooks = async () => {
    try {
      const books = await bookService.getBooks()
      setBooks(books)
    } catch (error) {
      console.log(error)
    } 
  }

  useEffect(()=> {
    getBooks()
  }, [])

  return (
    <>
      <div className="w-full h-screen mx-auto p-4 bg-gray-900">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-gray-100 text-6xl">Book List</h1>

          <div className="flex gap-8">
            <div className="flex items-center gap-2 font-bold text-gray-900">
              <button className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300">
                Table View
              </button>
              <button className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300">
                Card View
              </button>
            </div>

            <Link to={`books/create`}>
              <FaPlusCircle className="h-full text-5xl text-gray-100 hover:text-gray-300 hover:scale-105 hover:shadow-lg transition-all duration-300" title="Add book"/>
            </Link>
          </div>
        </div>
        <table className="w-full table-auto ce">
          <thead className="bg-gray-800 border text-gray-100">
            <th className="py-5">No</th>
            <th>Name</th>
            <th>Author</th>
            <th>Publish Year</th>
            <th>Operations</th>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr className={`border ${index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'} text-gray-300`} key={book._id}>
                <td className="text-center p-2">{index + 1}</td>
                <td className="text-center p-2">{book.title}</td>
                <td className="text-center p-2">{book.author}</td>
                <td className="text-center p-2">{book.publishYear}</td>
                <td className="h-full">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`books/details/${book._id}`}>
                      <FaInfoCircle className="text-blue-400"/>
                    </Link>
                    <Link to={`books/edit/${book._id}`}>
                      <FaPencilAlt className="text-yellow-300"/>
                    </Link>
                    <Link to={`books/delete/${book._id}`}>
                      <FaTrash className="text-red-600"/>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Home