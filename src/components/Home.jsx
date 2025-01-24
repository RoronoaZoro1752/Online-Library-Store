import Book from "./Book";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Home(){
    let books = useSelector((state) => state.pushBook.value)
    let fantasyBooks = books.filter((item) => (item.genre === "fantasy"));
    let horrorBooks = books.filter((item) => (item.genre) === "horror");
    let ScifiBooks = books.filter((item) => (item.genre === "scifi"));
    let fictionBooks = books.filter((item) => (item.genre === 'fiction'));
    let popularBooks = books.filter((item) => (item.id <= 5))

    return(
        <div className="flex flex-col justify-center items-center mt-12 mx-4 sm:mx-8 md:mx-16 lg:mx-32 mb-16">
            <p className="text-3xl sm:text-4xl p-4 text-center">Welcome to the Online Library Store</p>
            <p className="text-xl sm:text-2xl p-4 text-center">Browse the books from your favourite category</p>

            <div className="w-full mb-6">
                <p className="text-xl sm:text-2xl mb-4">Popular Books</p>
                <div className="overflow-x-scroll p-4 whitespace-nowrap [-ms-overflow-style:'none'] [scrollbar-width:'none'] no-scrollbar">
                    <div className="flex gap-4 sm:gap-6 md:gap-8 md:pl-48 justify-start md:justify-center">
                    {popularBooks.map((item) => (
                        <Link to={`/Book/${item.id}`} key={item.id} >
                            <Book image={item.image} title={item.title} description={item.description} />
                        </Link>
                    ))}
                    </div>
                </div>
            </div>

            <div className="w-full mb-6">
                <p className="text-xl sm:text-2xl mb-4">Fantasy</p>
                <div className="overflow-x-scroll p-4 whitespace-nowrap [-ms-overflow-style:'none'] [scrollbar-width:'none'] no-scrollbar">
                    <div className="flex gap-4 sm:gap-6 md:gap-8 md:pl-48 justify-start md:justify-center">
                    {fantasyBooks.map((item) => (
                        <Link to={`/Book/${item.id}`} key={item.id} >
                            <Book image={item.image} title={item.title} description={item.description} />
                        </Link>
                    ))}
                    </div>
                </div>
            </div>

            <div className="w-full mb-6">
                <p className="text-xl sm:text-2xl mb-4">Horror</p>
                <div className="overflow-x-scroll p-4 whitespace-nowrap [-ms-overflow-style:'none'] [scrollbar-width:'none'] no-scrollbar">
                <div className="flex gap-4 sm:gap-6 md:gap-8 md:pl-48 justify-start md:justify-center">
                {
                    horrorBooks.map((item) => (
                        <Link to={`/Book/${item.id}`} key={item.id}><Book image={item.image} key={item.id} title={item.title} description={item.description} /></Link>
                    ))
                }
                </div>
                </div>
            </div>

            <div className="w-full mb-6">
                <p className="text-xl sm:text-2xl mb-4">Fiction</p>
                <div className="overflow-x-scroll p-4 whitespace-nowrap [-ms-overflow-style:'none'] [scrollbar-width:'none'] no-scrollbar">
                <div className="flex gap-4 sm:gap-6 md:gap-8 md:pl-48 justify-start md:justify-center">
                {
                    fictionBooks.map((item) => (
                        <Link to={`/Book/${item.id}`} key={item.id}><Book image={item.image} key={item.id} title={item.title} description={item.description} /></Link>
                    ))
                }
                </div>
                </div>
            </div>

            <div className="w-full mb-6">
                <p className="text-xl sm:text-2xl mb-4">Scifi</p>
                <div className="overflow-x-scroll p-4 whitespace-nowrap [-ms-overflow-style:'none'] [scrollbar-width:'none'] no-scrollbar">
                <div className="flex gap-4 sm:gap-6 md:gap-8 md:pl-48 justify-start md:justify-center">
                {
                    ScifiBooks.map((item) => (
                        <Link to={`/Book/${item.id}`} key={item.id}><Book image={item.image} key={item.id} title={item.title} description={item.description} /></Link>
                    ))
                }
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home;