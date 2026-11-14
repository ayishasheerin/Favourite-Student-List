import { BrowserRouter, Routes, Route } from "react-router-dom"
import StudentProvider from "./context/StudentContext"
import Navbar from "./components/Navbar"
import StudentList from "./pages/StudentList"
import FavouriteStudents from "./pages/FavouriteStudent"

function App() {
    return (
        <StudentProvider>
     <BrowserRouter>
                <Navbar />
                <Routes>
                <Route path="/" element={<StudentList />} />
                <Route path="/favourites" element={<FavouriteStudents />} />
                </Routes>
            </BrowserRouter>
        </StudentProvider>
    )
}

export default App