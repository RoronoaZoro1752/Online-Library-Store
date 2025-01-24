import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Bookdetails(){
    const {id} = useParams();
    const books = useSelector((state) => state.pushBook.value);
    const singlebook = books.find((item) => item.id === parseInt(id))
    return(
        <div className="flex flex-col justify-center items-center p-6 sm:p-8 md:p-16 lg:p-20 bg-gray-100 rounded-lg shadow-lg mx-4 sm:mx-12 md:mx-32 lg:mx-48 mt-4">
            <img 
                src={singlebook.image} 
                alt="Image" 
                className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg shadow-md mb-4"
            />
            <p className="text-lg sm:text-xl font-bold text-gray-800 text-center mb-1">
                {singlebook.title}
            </p>
            <p className="text-sm sm:text-base text-gray-600 text-center italic">
             By: {singlebook.author}
            </p>
            <p className="text-sm sm:text-base text-gray-700 text-center py-1">
                ⭐ Rating: {singlebook.rating}
            </p>
            <p className="text-sm sm:text-base text-gray-700 text-justify py-3 px-4 sm:px-8 leading-relaxed">
                {singlebook.details}
            </p>
            <Link to='/'><button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-6 rounded-lg mt-4 transition duration-300">
                Back</button>
            </Link>
        </div>
    )
}

export default Bookdetails;