import {createContext} from "react"
import {useState} from "react"

export const StudentContext = createContext()

function StudentProvider(props) {
const [fav, setFav] = useState([])
function addFav(student) {

        const exist = fav.find(check)

        function check(item) {
            return item.id === student.id
         }

        if (!exist) {
            setFav([...fav, student])
        }
    }

    function removeFav(id) {

        const updated = fav.filter(checkId)

        function checkId(item) {
            return item.id !== id
        }

        setFav(updated)
    }

    return (
        <StudentContext.Provider value={{
            fav: fav,
            addFav: addFav,
            removeFav: removeFav
        }}>
            {props.children}
        </StudentContext.Provider>
    )
}

export default StudentProvider