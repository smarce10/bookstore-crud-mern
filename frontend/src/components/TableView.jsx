/* eslint-disable react/prop-types */
import EditBtn from "./buttons/EditBtn"
import InfoBtn from "./buttons/InfoBtn"
import DeleteBtn from "./buttons/DeleteBtn"

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
                    <InfoBtn handleClick={() => { configureModalInfo(book) } }/>
                    <EditBtn bookId={ book._id }/>
                    <DeleteBtn handleClick={() => { configureModalDelete(book._id) } }/>
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