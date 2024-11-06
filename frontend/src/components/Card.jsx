import { Link } from "react-router-dom";


function Card({_id, name, image}) {
    
    return ( 

        <Link to={`/artistas/${_id}`}>
            <div className="md:w-40 md:h-40 w-48 h-48 mb-5 mt-5 mr-12 flex flex-col justify-center items-center pt-3">
                
                <img src={image} alt="Capa do Album" className="w-48 h-48" />
                <h1 className=" text-white font-bold text-sm">{name}</h1>
            </div>
        </Link>
     );
}

export default Card;