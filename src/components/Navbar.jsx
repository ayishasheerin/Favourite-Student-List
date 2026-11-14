import {Link} from "react-router-dom"
import {useContext} from "react"
import {StudentContext} from "../context/StudentContext"

function Navbar() {
 const {fav} = useContext(StudentContext)
return (
 <div className="bg-gray-900 text-white px-8 py-5 flex justify-between items-center">
 <h1 className="text-xl font-bold"> Favourite Students</h1>
 <div className="flex gap-8">
 <Link to="/" className="hover:text-pink-300"> List of Students </Link>
  <Link to="/favourites" className="hover:text-pink-300"> Favourite Students ({fav.length}) </Link>
         </div>
  </div>
    )
}

export default Navbar