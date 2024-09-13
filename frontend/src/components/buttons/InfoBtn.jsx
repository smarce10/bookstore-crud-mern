/* eslint-disable react/prop-types */
import { FaInfoCircle } from "react-icons/fa"

const InfoBtn = ({handleClick}) => {
    return (
        <>
            <FaInfoCircle className="text-blue-400 cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300" onClick={handleClick}/>
        </>
    )
}

export default InfoBtn