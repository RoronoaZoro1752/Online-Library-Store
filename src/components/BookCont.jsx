/* eslint-disable react/prop-types */

import Book from './Book'
import { Link, useParams } from 'react-router-dom';

function BooksCont({props}){
    let {id} = useParams();
    return(
        <div className='flex gap-14 flex-wrap p-12 items-center justify-center'>

            { props.length > 0 ?
                props.map((item) =>(
                    <Link to={`/Book/${item.id}`} key={id}><Book image={item.image} key={item.id} title={item.title} description={item.description} /></Link>
                )) :
                <p>Author Name or Book not found</p>
            }
            
        </div>
    )

}

export default BooksCont;