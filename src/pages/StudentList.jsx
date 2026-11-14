import {useContext} from "react"
import {StudentContext} from "../context/StudentContext"

function StudentList() {
const {fav,addFav} = useContext(StudentContext)
 const students = [ {id: 1, name: "Ayisha"},
        {id: 2, name: "Tawfeeq"},
        {id: 3, name: "Ahyaan"},
        {id: 4, name: "Muhammad"},
        {id: 5, name: "Afsheen"},
        {id: 6, name: "Sheerin"}
    ]

    function displayStudents(item) {
 const added = fav.some(check)

 function check(student) {
            return student.id === item.id
        }

        return (
            <div className="flex justify-between items-center bg-white p-4 rounded-lg mb-4">
           <h2 className="text-lg font-medium"> {item.name}</h2>
           <button onClick={function ()
            {addFav(item) }} disabled={added}
            className={added ? "bg-pink-100 text-pink-400 px-4 py-2 rounded cursor-not-allowed"  : "bg-pink-300 text-black px-4 py-2 rounded hover:bg-pink-400"}  >
                    {added ? "Added" : "Add to Favourite"}
                </button>
            </div>
        )
    }

    return (
        <div className="max-w-xl mx-auto mt-10 px-5">

            <h1 className="text-2xl font-bold mb-6 text-center">  List of Students </h1>
            {students.map(displayStudents)}
</div>
    )
}

export default StudentList