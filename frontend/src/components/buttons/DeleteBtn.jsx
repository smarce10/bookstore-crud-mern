/* eslint-disable react/prop-types */
import { FaTrash } from "react-icons/fa"

const DeleteBtn = ({handleClick}) => {
    return (
        <>
            <FaTrash onClick={handleClick} className="text-red-600 cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300"/>
        </>
    )
}

export default DeleteBtn