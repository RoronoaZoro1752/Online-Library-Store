import { Link } from "react-router-dom";

function Error(){
 return(
        <div className="flex items-center justify-center py-32 flex-col gap-8">
            <p className="">Oops! Seems like the page you are searching for is unavailable ❌. </p>
            <button className="bg-slate-200 p-4 rounded-2xl"><Link to='/'>Back to Home</Link></button>
        </div>
 )
}

export default Error;