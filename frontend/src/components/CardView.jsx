/* eslint-disable react/prop-types */
import { FaBook } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaRegCalendarAlt } from 'react-icons/fa';
import InfoBtn from "./buttons/InfoBtn";
import DeleteBtn from "./buttons/DeleteBtn";
import EditBtn from "./buttons/EditBtn";

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
                            <InfoBtn handleClick={() => { configureModalInfo(book) } }/>
                            <EditBtn bookId={ book._id }/>
                            <DeleteBtn handleClick={() => { configureModalDelete(book._id) } }/>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default CardView

