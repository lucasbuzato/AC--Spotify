export default function Sidebar() {
    return (
        <aside className="bg-Sidebar w-[34rem] flex flex-col rounded-lg ml-2 mr-2">
            <header className="flex flex-col px-4 pt-3 pb-2">
                <div className="flex flex-row justify-between items-center py-1 px-2">
                    <div className="flex flex-row items-center">
                    
                        <button className="font-bold text-[#B3B3B3] flex flex-row items-center"><img className="h-5 w-5 mr-3" src="src/assets/svg-path (1).svg" alt="" />Sua Biblioteca</button>
                    </div>
                    <div >
                        <button className="mr-3"><img className="h-4 w-4" src="src/assets/Mais.svg" alt="" /></button>
                        <button className="m-2"><img className="h-4 w-4"  src="src/assets/Seta.svg" alt="" /></button>
                    </div>
                </div>
            </header>
            <div className="px-4 py-2">
                    <button className="bg-SideButton text-white px-3 py-1 rounded-full text-sm">Playlists</button>
                    <button className="bg-SideButton text-white px-3 py-1 rounded-full text-sm ml-2">Artistas</button>
                    <button className="bg-SideButton text-white px-3 py-1 rounded-full text-sm ml-2">Álbuns</button>
                </div>
                <div className="px-2 pb-2 flex flex-col">
                <div className="flex flex-row justify-between pl-2 pr-1 pt-0.5">
                    <button className="p-2"><img className="h-4 w-4"  src="src/assets/Lupa.svg" alt="" /></button>
                    <button className="flex flex-row items-center text-[#B3B3B3] text-sm pl-4 pr-3 py-1 font-medium">Recentes<img className=" ml-2 h-4 w-4" src="src/assets/More.svg" alt="" /></button>
                </div>
                <div className="mt-2">
                    <ul>
                        <li>
                            <button className="text-start">
                            <div className="flex flex-row p-2">
                                <img className="w-12 h-12 rounded mr-3" src="src/assets/liked-songs-64.png" alt="" />
                                <div className="flex flex-col justify-center">
                                    <p className="font-medium text-white">Músicas Curtidas</p>
                                    <p className="font-medium text-[#B3B3B3] text-sm ">Playlist • 43 músicas </p>
                                </div>
                            </div>
                            </button>
                        </li>
                        <li>
                        <button className="text-start">
                            <div className="flex flex-row p-2">
                                <img className="w-12 h-12 rounded mr-3" src="src/assets/Slayer.webp" alt="" />
                                <div className="flex flex-col justify-center">
                                    <p className="font-medium text-white">Show No Mercy</p>
                                    <p className="font-medium text-[#B3B3B3] text-sm ">Álbum • Slayer </p>
                                </div>
                            </div>
                            </button>
                        </li>
                        <li>
                        <button className="text-start">
                            <div className="flex flex-row p-2">
                                <img className="w-12 h-12 rounded mr-3" src="src/assets/Wake.jfif" alt="" />
                                <div className="flex flex-col justify-center">
                                    <p className="font-medium text-white">Wake</p>
                                    <p className="font-medium text-[#B3B3B3] text-sm ">Álbum • Hail The Sun </p>
                                </div>
                            </div>
                            </button>
                        </li>
                        <li>
                        <button className="text-start">
                            <div className="flex flex-row p-2">
                                <img className="w-12 h-12 rounded mr-3" src="src/assets/Flying Beagle.jfif" alt="" />
                                <div className="flex flex-col justify-center">
                                    <p className="font-medium text-white">Flying Beagle</p>
                                    <p className="font-medium text-[#B3B3B3] text-sm ">Álbum • 43 músicas </p>
                                </div>
                            </div>
                            </button>
                        </li>
                        <li>
                        <button className="text-start">
                            <div className="flex flex-row p-2">
                                <img className="w-12 h-12 rounded-full mr-3" src="src/assets/ab67616100005174c7e6bd9e65eab62a53355576.jfif" alt="" />
                                <div className="flex flex-col justify-center">
                                    <p className="font-medium text-white">Linkin Park</p>
                                    <p className="font-medium text-[#B3B3B3] text-sm ">Artista </p>
                                </div>
                            </div>
                            </button>
                        </li>
                        <li>
                        <button className="text-start">
                            <div className="flex flex-row p-2">
                                <img className="w-12 h-12 rounded mr-3" src="src/assets/Quadra.jfif" alt="" />
                                <div className="flex flex-col justify-center">
                                    <p className="font-medium text-white">Quadra</p>
                                    <p className="font-medium text-[#B3B3B3] text-sm ">Álbum • Sepultura </p>
                                </div>
                            </div>
                            </button>
                        </li>
                        <li>
                        <button className="text-start">
                            <div className="flex flex-row p-2">
                                <img className="w-12 h-12 rounded-full mr-3" src="src/assets/Sepultura.jfif" alt="" />
                                <div className="flex flex-col justify-center">
                                    <p className="font-medium text-white">Sepultura</p>
                                    <p className="font-medium text-[#B3B3B3] text-sm ">Artista </p>
                                </div>
                            </div>
                            </button>
                        </li>
                        <li>
                        <button className="text-start">
                            <div className="flex flex-row p-2">
                                <img className="w-12 h-12 rounded mr-3" src="src/assets/Megadeth.jfif" alt="" />
                                <div className="flex flex-col justify-center">
                                    <p className="font-medium text-white">Rust In Piece</p>
                                    <p className="font-medium text-[#B3B3B3] text-sm ">Álbum • Megadeth </p>
                                </div>
                            </div>
                            </button>
                        </li>
                       
                       

                    </ul>
                    </div>
                </div>
        </aside>
    )
}