/* eslint-disable react/prop-types */
import { FaBook } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaRegCalendarAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const CardView = ({ books, configureModalDelete, configureModalInfo }) => {

    return(
        <>
            <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-1 text-gray-100 ">
                {books.map((book, index) => (
                    <div key={index} className="flex flex-col justify-between border p-4 rounded-md">
                        <div className="flex justify-between items-center">
                            <h1 className="text-gray-500">{book._id}</h1>
                            <FaBookOpen/>
                        </div>
                        <div className="mt-2 text-lg">
                            <div className="flex items-center gap-2">
                                <FaBook/>
                                <h2>{book.title}</h2>
                            </div>
                            <div className="flex items-center gap-2">
                                <IoPerson/>
                                <h2>{book.author}</h2>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaRegCalendarAlt/>
                                <h2>{book.publishYear}</h2>
                            </div>
                        </div>
                        <div className="flex justify-end items-center gap-3 mt-2">
                            <FaInfoCircle className="text-blue-400" onClick={() => {
                                console.log("aa")
                                configureModalInfo(book)
                            }}/>
                            <Link to={`books/edit/${book._id}`}>
                                <FaPencilAlt className="text-yellow-300"/>
                            </Link>
                            <FaTrash onClick={() => {
                                configureModalDelete(book._id)
                            }} className="text-red-600 cursor-pointer"/>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default CardView

