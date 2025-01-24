import { useState } from "react"
import BooksCont from "./BookCont"
import { useSelector } from "react-redux";
function BrowseBooks(){
    const books = useSelector((state) => state.pushBook.value);
    const [searchName, setSearchName] = useState("");
    const [filteredData, setFilteredData] = useState(books);

    function handleSearchName(){
        let filtered = books.filter((item) => (item.title.toLowerCase().includes(searchName.toLowerCase()) 
            || item.author.toLowerCase().includes(searchName.toLowerCase()) 
            || item.genre.toLowerCase().includes(searchName.toLowerCase())
        ))
        setFilteredData(filtered)
    }

    return(
        <>
        <div className="flex flex-col sm:flex-row justify-center my-6 sm:my-12 gap-4 h-auto sm:h-12 px-4">
        <input type="text" placeholder="Search for a book" 
            className="bg-slate-100 w-full sm:w-72 p-3 sm:p-4 rounded-xl focus:outline-none" 
            onChange={(e) => setSearchName(e.target.value)}/>
        <button className="bg-slate-300 p-2 sm:p-1 sm:px-4 rounded-lg text-sm sm:text-base" onClick={handleSearchName}>Search</button>
        </div>
        <BooksCont props={filteredData}/>
        </>
    )
}

export default BrowseBooks