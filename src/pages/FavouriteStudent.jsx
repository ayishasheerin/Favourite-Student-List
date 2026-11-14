import {useContext} from "react"
import {StudentContext} from "../context/StudentContext"

function FavouriteStudents() {
 const {fav,removeFav} = useContext(StudentContext)
 function displayFav(item) {
        return (
                <div className="flex justify-between items-center bg-white p-4 rounded-lg mb-4">
                 <h2 className="text-lg font-medium">{item.name} </h2>
                  <button onClick={function () { removeFav(item.id)}}className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"> Remove</button>
                  </div>
        )
    }

    return (
        <div className="max-w-xl mx-auto mt-10 px-5">
             <h1 className="text-2xl font-bold mb-6 text-center">  Favourite Students  </h1>
              {fav.length === 0? <p className="text-center text-gray-500">No favourite students added yet</p> : fav.map(displayFav) }
               </div>
    )
}

export default FavouriteStudents