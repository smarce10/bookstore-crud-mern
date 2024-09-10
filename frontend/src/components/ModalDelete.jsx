/* eslint-disable react/prop-types */
import { bookService } from "../services/bookService"
import { useSnackbar } from "notistack"

const ModalDelete = ({ handleClose, bookId }) => {
    const { enqueueSnackbar } = useSnackbar()

    const deleteBook = async () => {
        try{
            const deletedBook = await bookService.deleteBook(bookId)
            enqueueSnackbar('Book deleted succesfully', { variant: "success", autoHideDuration: 2000 })
            handleClose()
        }catch(error){
            enqueueSnackbar(`Something went wrong: ${error}`, { variant: "error", autoHideDuration: 2000 })
        }
    }

    return (
        <>
            <div className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center" onClick={ handleClose }>
                <div onClick={(event) => event.stopPropagation()} className="w-fit h-fit bg-gray-800 text-gray-300 rounded-xl p-7">
                    <h1>Are you sure you want to delete it?</h1>
                    <div className="flex w-full mt-4 gap-2">
                        <button className="flex-1 rounded-sm bg-red-700" onClick={handleClose}>
                            Cancel
                        </button>
                        <button className="flex-1 rounded-sm bg-green-700" onClick={deleteBook}>
                            Yes
                        </button>
                    </div>
                </div>
            </div>
        </>
    )  
}

export default ModalDelete