/* eslint-disable react/prop-types */
import { IoMdCloseCircle } from "react-icons/io";

const ModalInfo = ({ handleClose, book }) => {

    return (
        <>
            <div className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center" onClick={ handleClose }>
                <div onClick={(event) => event.stopPropagation()} className="min-w-80 h-fit bg-gray-800 text-gray-300 rounded-xl p-7">
                    <div className="flex justify-between items-center">
                        <h1 className="text-gray-500">{book._id}</h1>
                        <IoMdCloseCircle className="text-red-600 text-2xl" onClick={ handleClose }/>
                    </div>
                    <div className="mt-3">
                        <h1>Title:</h1>
                        <h1 className="font-bold">{book.title}</h1>
                    </div>
                    <div>
                        <h1>Author:</h1>
                        <h1 className="font-bold">{book.author}</h1>
                    </div>
                    <div>
                        <h1>Publish Year:</h1>
                        <h1 className="font-bold">{book.publishYear}</h1>
                    </div>
                    <div>
                        <h1>Created At:</h1>
                        <h1 className="font-bold">{book.createdAtFormatted()}</h1>
                    </div>
                    <div>
                        <h1>Last Updated At:</h1>
                        <h1 className="font-bold">{book.updatedAtFormatted()}</h1>
                    </div>
                </div>
            </div>
        </>
    )  
}

export default ModalInfo