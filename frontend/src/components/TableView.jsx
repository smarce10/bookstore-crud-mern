/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { FaInfoCircle } from "react-icons/fa"
import { FaTrash } from "react-icons/fa"
import { FaPencilAlt } from "react-icons/fa"

const TableView = ({ books, configureModalDelete, configureModalInfo }) => {

  return (
    <>
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
                    <FaInfoCircle className="text-blue-400 cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300" onClick={() => {
                      configureModalInfo(book)
                    }}/>
                    <Link to={`books/edit/${book._id}`}>
                      <FaPencilAlt className="text-yellow-300 hover:scale-110 hover:shadow-lg transition-all duration-300"/>
                    </Link>
                    <FaTrash onClick={() => {
                      configureModalDelete(book._id)
                    }} className="text-red-600 cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300"/>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </>
    )
}

export default TableView