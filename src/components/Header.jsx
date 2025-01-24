import { Link } from "react-router";

function Header(){
    return(
        <div className="w-full h-auto bg-slate-500 p-4 flex justify-between items-center px-4 sm:px-8 md:px-16">
            <p className="ffont-medium text-2xl sm:text-3xl md:text-4xl text-white">Library .</p>
            <div className="flex gap-4 sm:gap-12 md:gap-16 items-center text-white">
                <Link to="/" className="text-sm sm:text-base md:text-lg hover:text-gray-200">Home</Link>
                <Link to="/BrowseBooks" className="text-sm sm:text-base md:text-lg hover:text-gray-200">Browse Book</Link>
                <Link to="/AddBook" className="text-sm sm:text-base md:text-lg hover:text-gray-200">Add Book</Link>
            </div>
        </div>
    )
}

export default Header;