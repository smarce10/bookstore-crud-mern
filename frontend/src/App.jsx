import { Routes, Route } from "react-router-dom"
import CreateBook from "./pages/CreateBook"
import Home from "./pages/Home"
import ShowBook from "./pages/ShowBook"
import EditBook from "./pages/EditBook"


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/books/create" element={<CreateBook/>}></Route>
      <Route path="/books/details/:id" element={<ShowBook/>}></Route>
      <Route path="/books/edit/:id" element={<EditBook/>}></Route>
    </Routes>
  )
}

export default App