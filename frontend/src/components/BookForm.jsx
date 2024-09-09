/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"



const BookForm = ({ book , operation }) => {

    const [bookTitle, setBookTitle] = useState(book ? book.title : "")
    const [bookAuthor, setBookAuthor] = useState(book ? book.author : "")
    const [bookPublishYear, setPublishYear] = useState(book ? book.publishYear : "")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        updateBookProperties()

        try{
            book.validate()
            await operation(book)
            navigate("/")
        }catch(error){
            console.log(error)
        }
        console.log(book)
    }

    const isEdit = () => {
        return book.title !== ""
    }

    const updateBookProperties = () => {
        book.title = bookTitle;
        book.author = bookAuthor;
        book.publishYear = Number(bookPublishYear)
    }

    useEffect(() => {
        if (book) {
            setBookTitle(book.title)
            setBookAuthor(book.author)
            setPublishYear(book.publishYear)
        }
    }, [book])

  return (
    <>
        <form className="min-w-80 h-fit px-12 py-8 border rounded-md" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold text-gray-300 mb-4 text-center">{ isEdit() ? "Edit" : "Create" } Book</h1>
            <div className="text-xl flex flex-col gap-4">
                <div className="flex flex-col">
                    <label className="text-gray-300" htmlFor="title">Title</label>
                    <input 
                        className="rounded-sm bg-gray-900 border-b-gray-100 border-b-2 border-white outline-none caret-gray-100 text-gray-100 text-base" 
                        type="text" 
                        id="title" 
                        value={bookTitle} 
                        onChange={(e) => setBookTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-300" htmlFor="author">Author</label>
                    <input 
                        className="rounded-sm bg-gray-900 border-b-gray-100 border-b-2 border-white outline-none caret-gray-100 text-gray-100 text-base" 
                        type="text" 
                        id="author" 
                        value={bookAuthor} 
                        onChange={(e) => setBookAuthor(e.target.value)}
                        required
                    />
                </div >
                <div className="flex flex-col">
                    <label className="text-gray-300" htmlFor="publishYear">Publish Year</label>
                    <input 
                        className="rounded-sm bg-gray-900 border-b-gray-100 border-b-2 border-white outline-none caret-gray-100 text-gray-100 text-base"
                        type="number" 
                        id="publishYear" 
                        value={bookPublishYear} 
                        onChange={(e) => setPublishYear(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="flex w-full gap-2 mt-8">
                <Link to={`/`} className="flex-grow">
                    <button className="rounded-sm bg-gray-100 w-full text-gray-800 p-1 font-bold">
                        Back
                    </button>
                </Link>
                <button className="rounded-sm bg-gray-100 flex-grow text-gray-800 p-1 font-bold" type="submit">
                    { isEdit()  ? "Update" : "Create" }
                </button>
            </div>
        </form>
    </>
    )
}

export default BookForm