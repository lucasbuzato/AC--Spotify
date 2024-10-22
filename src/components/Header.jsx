export default function Header() {
    return (
        <header className="bg-black w-full h-16 p-2 flex flex-row items-center justify-between">
           
            <div className="flex w-16 h-16 flex items-center justify-between m-5">
                <img className="h-8 w-8" src="src/assets/Spotify_Primary_Logo_RGB_White.png" alt="" />
            </div>
            <div className="flex flex-row ml-96">
                <button className="w-12 h-12 bg-Cinza flex items-center justify-center rounded-full" >
                    <img className="h-8 w-8" src="src/assets/home_20dp_E8EAED_FILL1_wght400_GRAD0_opsz20.png" alt="" />
                </button>


                <div className="ps-2 flex  items-center">
                <form className="relative" action="">
                    <div>
                        <img className="h-8 w-8 absolute left-3 top-2" src="src/assets/search_24dp_B3B3B3_FILL0_wght400_GRAD0_opsz24.png" alt="" />
                    </div>
                    
                        <input className="w-[31rem] pb-3 pt-3 pl-12 pr-16 rounded-[31rem] bg-Cinza"  type="text" placeholder=" O que você quer ouvir?"/>

                    <div className="pl-3 pr-1 ">
                     
                        <img className="h-8 w-8 absolute left-[28rem] top-2 " src="src/assets/vinyl-svgrepo-com (1).svg" alt="" />
                
                    </div>
                </form>
                </div>
            </div>
            

            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row">
                <button className="bg-white font-bold px-4 py-1 rounded-full mx-2 text-sm">Ver planos Premium</button>
                <button className="flex flex-row items-center text-white font-bold text-sm mx-2"><img  className="h-4 w-4 mr-1" src="src/assets/downloading_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt="" />Instalar aplicativo</button>
                </div>
                <div className="flex flex-row items-center justify-between">
                <img className="h-6 w-6 mx-5" src="src/assets/notifications_24dp_B3B3B3_FILL0_wght400_GRAD0_opsz24.png" alt="" />

                <img className="h-10 w-10 rounded-full border-4 border-[#1f1f1f]" src="src/assets/images.png" alt="" />
                </div>
            </div>
        </header>
    )
}