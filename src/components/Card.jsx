import { Link } from "react-router-dom";


function Card() {
    return ( 
       
        <div className=" flex flex-row items-center px-2" >
                <img className="w-16 h-16 rounded-l" src="src/assets/Lobster.webp" alt="" />
                <div className="flex items-center w-80 h-16 bg-Card rounded-r">
                <p className="ml-4">💥🔥💥🔥</p>
                </div>
            </div>
 
     );
}


export default Card;