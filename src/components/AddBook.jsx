import { useDispatch } from "react-redux";
import { pushBook } from "./features/additionSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBook(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [bookDetails, setBookDetails] = useState({
        title:"",
        author:"",
        rating:"",
        image:"",
        genre:"",
        details:"",
    });

    const handleChange = (e) => {
        setBookDetails({
            ...bookDetails,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!bookDetails.genre){
            alert("Please select a genre");
        }

        dispatch(pushBook(bookDetails));

        setBookDetails({
            title:"",
            author:"",
            rating:"",
            image:"",
            genre:"",
            details:"",
        })

        navigate('/');
    }

    return(
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md mt-8 sm:max-w-sm md:max-w-lg lg:max-w-xl">
            <p className="text-2xl font-semibold text-center mb-6 text-gray-800">Add a new Book</p>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter title" required name="title" onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input type="text" placeholder="Enter Author name" required name="author" onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input type="number" placeholder="Enter rating out of 5" required name="rating" onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input type="url" placeholder="Enter Image url" required name="image" onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <select name="genre" required onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select genre</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="horror">Horror</option>
                    <option value="fiction">Fiction</option>
                    <option value="scifi">Scifi</option>
                </select>

                <textarea name="details" placeholder="Enter description about the book" onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-28 resize-none overflow-hidden"
                ></textarea>

                <button type="submit"
                    className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300"
                >Add Book</button>

            </form>
        </div>
    )
}

export default AddBook;