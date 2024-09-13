/* eslint-disable react/prop-types */
import { FaPencilAlt } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const EditBtn = ({ bookId }) => {
    const navigate = useNavigate()
    return (
        <>
            <FaPencilAlt 
                className="text-yellow-300 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => navigate(`books/edit/${bookId}`)}
            />
        </>
    )
}

export default EditBtn