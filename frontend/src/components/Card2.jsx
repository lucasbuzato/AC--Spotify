import { Link } from "react-router-dom";

function Card2({_id, name, image}) {
    return ( 
        <Link to={`/artistas/${_id}`}>
        <div className=" flex flex-row items-center px-2" >
                <img className="w-16 h-16 rounded-l" src={image} alt="" />
                <div className="flex items-center w-80 h-16 bg-Card rounded-r">
                <h1 className="ml-5 w-3/4 h-7 text-white font-bold">{name}</h1>
                </div>
            </div>
        </Link>
     );
}

export default Card2;