import { Link } from "react-router-dom";

function Card2({_id, name, image}) {
    return ( 
        <Link to={`/artistas/${_id}`}>
        <div className=" flex flex-row items-center px-2" >
                <img className="md:w-14 md:h-14 w-16 h-16 rounded-l" src={image} alt="" />
                <div className="flex items-center md:w-60 md:h-14 w-80 h-16 bg-Card rounded-r">
                <h1 className="ml-5 w-3/4 text-white text-sm font-bold">{name}</h1>
                </div>
            </div>
        </Link>
     );
}

export default Card2;