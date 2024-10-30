import { useNavigate, Link } from "react-router-dom";

import { useState } from "react";

export default function Header() {

    const navigate = useNavigate()

    const [search, setSearch] = useState('')

    function handleSearch(e) {
        setSearch(e.target.value)
        navigate(`/search/${e.target.value}`)
    }
    return (
        <header className="bg-black w-full h-16 p-2 flex flex-row items-center justify-between">


            <div className="flex w-16 h-16 flex items-center justify-between m-5">
                <img className="h-8 w-8" src="./Spotify_Primary_Logo_RGB_White.png" alt="" />
            </div>


            <div className="flex flex-row ml-96">
                <Link to="/">
                <button className="w-12 h-12 bg-Cinza flex items-center justify-center rounded-full" >
                    <img className="h-8 w-8" src="./home_20dp_E8EAED_FILL1_wght400_GRAD0_opsz20.png" alt="" />
                </button>
                </Link>
                

            <div className="ps-2 flex  items-center">   
            <form className="relative">
            <input 
                type="text" id="search" className="w-[31rem] pb-3 pt-3 pl-12 pr-16 rounded-[31rem] bg-Cinza "placeholder="O que você quer ouvir?" 
                value={search}
                onChange={handleSearch}
                onFocus={()=> navigate('search')}
                onBlur={()=> navigate('/')}/>
           
           <div className="pl-3 pr-1 ">
                     
                     <img className="h-6 w-6 absolute left-[28rem] top-3 " src="./Discografia.svg" alt="" />
                     
                 </div>
            </form>
            
            </div>
            </div>
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row">
                <button className="bg-white font-bold px-4 py-1 rounded-full mx-2 text-sm text-black">Ver planos Premium</button>
                <button className="flex flex-row items-center text-white font-bold text-sm mx-2"><img  className="h-4 w-4 mr-1" src="src/Download.svg" alt="" />Instalar aplicativo</button>
                </div>
                <div className="flex flex-row items-center justify-between">
                <img className="h-4 w-4 mx-5" src="./Notificacao.svg" alt="" />

                <img className="h-10 w-10 rounded-full border-4 border-[#1f1f1f]" src="./images.png" alt="" />
                </div>
            </div>
        </header>
    )
}