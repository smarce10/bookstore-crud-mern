/* eslint-disable react/prop-types */
import { FaPlusCircle } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const AddBtn = ({style = ""}) => {
    const navigate = useNavigate()
    return (
        <>
            <FaPlusCircle 
                className={`h-full text-5xl text-gray-100 hover:text-gray-300 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer ${style}`}
                title="Add book"
                onClick={() => navigate("/books/create")}    
            />
        </>
    )
}

export default AddBtn