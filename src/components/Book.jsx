/* eslint-disable react/prop-types */
function Book(props){

    return(
        <div className="flex flex-col justify-center items-center h-60 w-44 bg-slate-300 rounded-2xl p-4 shadow-lg transition-transform transform hover:scale-105">
            <img src={props.image} alt="Book" className="h-32 w-full object-cover rounded-lg shadow-md"/>
            <p className="font-semibold text-sm text-center mt-3 text-gray-800 leading-tight text-wrap">{props.title}</p>
        </div>
    )
}

export default Book;