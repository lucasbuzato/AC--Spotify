export default function ConteudoPrincipal() {
    return (
        <div className="bg-Sidebar flex flex-col w-full rounded-lg">
        <div className="pt-5 pl-6">
                    <button className="bg-SideButton text-white px-3 py-1 rounded-full text-sm">Tudo</button>
                    <button className="bg-SideButton text-white px-3 py-1 rounded-full text-sm ml-2">Músicas</button>
                    <button className="bg-SideButton text-white px-3 py-1 rounded-full text-sm ml-2">Podcasts</button>
                </div>
                <div>
        <div className="grid-rows-2 grid-flow-col pb-1 px-5 pt-4 ">
           <div className="flex flex-row">
           <div className=" flex flex-row items-center px-2" >
                <img className="w-16 h-16 rounded-l" src="src/assets/Lobster.webp" alt="" />
                <div className="flex items-center w-80 h-16 bg-Card rounded-r">
                <p className="ml-4">💥🔥💥🔥</p>
                </div>
            </div>
            <div className=" flex flex-row items-center px-2" >
                <img className="w-16 h-16 rounded-l" src="src/assets/TOe.jfif" alt="" />
                <div className="flex items-center w-80 h-16 bg-Card rounded-r">
                <p className="ml-4 font-bold text-white">toe</p>
                </div>
            </div>
            <div className=" flex flex-row items-center px-2" >
                <img className="w-16 h-16 rounded-l" src="src/assets/Ramstein.jfif" alt="" />
                <div className="flex items-center w-80 h-16 bg-Card rounded-r">
                <p className="ml-4 font-bold text-white ">Rammstein</p>
                </div>
            </div>
            <div className=" flex flex-row items-center px-2" >
                <img className="w-16 h-16 rounded-l" src="src/assets/Sunny Day Service.jfif" alt="" />
                <div className="flex items-center w-80 h-16 bg-Card rounded-r">
                <p className="ml-4 font-bold text-white">Sunny Day Service</p>
                </div>
            </div>

            
        </div>
        </div>

        <div className="grid-rows-2 grid-flow-col py-1 px-5">
        <div className="flex flex-row">
        <div className=" flex flex-row items-center px-2 pt-1" >
                <img className="w-16 h-16 rounded-l" src="src/assets/Zutomayo.jfif" alt="" />
                <div className="flex items-center w-80 h-16 bg-Card rounded-r">
                <p className="ml-4 font-bold text-white">ZUTOMAYO</p>
                </div>
            </div>
            <div className=" flex flex-row items-center px-2 pt-1" >
                <img className="w-16 h-16 rounded-l" src="src/assets/37i9dQZF1DZ06evO3RbzfW-default.jpg" alt="" />
                <div className="flex items-center w-80 h-16 bg-Card rounded-r">
                <p className="ml-4 font-bold text-white">This is Rammstein</p>
                </div>
            </div>
            <div className=" flex flex-row items-center px-2 pt-1"  >
                <img className="w-16 h-16 rounded-l" src="src/assets/Nujabes.jpg" alt="" />
                <div className="flex items-center w-80 h-16 bg-Card rounded-r">
                <p className="ml-4 font-bold text-white">This is Nujabes</p>
                </div>
            </div>
            <div className=" flex flex-row items-center px-2 pt-1" >
                <img className="w-16 h-16 rounded-l" src="src/assets/Re3dhot.jfif" alt="" />
                <div className="flex items-center w-80 h-16 bg-Card rounded-r">
                <p className="ml-4 font-bold text-white">The Getaway</p>
                </div>
            </div>
            </div>
        </div>
        </div>

        <div className="px-7 mt-12">
            <div className="mb-5 flex flex-row justify-between">
                <a href="" className="text-white font-bold text-2xl">Feitos para você</a>
                <a href="" className="text-white font-bold text-sm">Mostrar Tudo</a>
            </div>
            <div className="flex flex-row">
            <button className="text-start">
            <div className="pr-6">
                <img className="w-[14rem] h-52 rounded" src="src/assets/dayle1.jfif" alt="" />
                <p className="text-[#B3B3B3] text-sm w-48 pt-1">Sepultura, Sodom, Megadeth e mais</p>
            </div>
            </button>


            <button className="text-start">
            <div className="pr-6">
                <img className="w-[14rem] h-52 rounded" src="src/assets/dayle2.jfif" alt="" />
                <p className="text-[#B3B3B3] text-sm w-48 pt-1">LXNGVX, DJ ZK3, nightfxrce e mais</p>
            </div>
            </button>


            <button className="text-start">
            <div className="pr-6">
                <img className="w-[14rem] h-52 rounded" src="src/assets/dayle3.jfif" alt="" />
                <p className="text-[#B3B3B3] text-sm w-48 pt-1">Eve, RADWIMPS, milet, tricot e mais</p>
            </div>
            </button>

            
            <button className="text-start">
            <div className="pr-6">
                <img className="w-[14rem] h-52 rounded" src="src/assets/dayle4.jfif" alt="" />
                <p className="text-[#B3B3B3] text-sm w-48 pt-1">Freddie Dredd, $werve, GRAVECHILL e mais</p>
            </div>
            </button>


            <button className="text-start">
            <div className="pr-6">
                <img className="w-[14rem] h-52 rounded" src="src/assets/dayle5.jfif" alt="" />
                <p className="text-[#B3B3B3] text-sm w-48 pt-1">伊藤 賢治, Masashi Hamauzu, Heaven Pierce Her e mais</p>
            </div>
            </button>



            <button className="text-start">
            <div>
                <img className="w-[14rem] h-52 rounded" src="src/assets/dayle6.jfif" alt="" />
                <p className="text-[#B3B3B3] text-sm w-48 pt-1">tricot, Chon, Via Luna, Eve e mais</p>
            </div>
            </button>

        </div>
        </div>

        <div className="px-7 pt-12">
            <div className="mb-5 flex flex-row justify-between">
                <a href="" className="text-white font-bold text-2xl">Suas músicas estão com saudade</a>
                <a href="" className="text-white font-bold text-sm">Mostrar Tudo</a>
            </div>




            <div className="flex flex-row items-center">



            <button className="text-start">
            <div className="pr-6">
                <img className="w-[14rem] h-52 rounded-full" src="src/assets/hail.jfif" alt="" />
                <div>
                <p className="text-white w-48 pt-1 font-medium">Hail The Sun</p>
                <p className="text-[#B3B3B3] text-sm w-48 pt-1">Artistas</p>
                </div>
            </div>
            </button>


            <button className="text-start">
            <div className="pr-6">
                <img className="w-[14rem] h-52 rounded-full" src="src/assets/masayoshi.jfif" alt="" />
                <div>
                <p className="text-white w-48 pt-1 font-medium">Masayoshi Takanaka</p>
                <p className="text-[#B3B3B3] text-sm w-48 pt-1">Artistas</p>
                </div>
            </div>
            </button>


            <button className="text-start">
            <div className="pr-6">
                <img className="w-[14rem] h-52 rounded" src="src/assets/redhot.jfif" alt="" />
                <div>
                <p className="text-white w-48 pt-1 font-medium">By the Way</p>
                <p className="text-[#B3B3B3] text-sm w-48 pt-1">Red Hot Chili Peppers</p>
                </div>
            </div>
            </button>

            
            <button className="text-start">
            <div className="pr-6">
                <img className="w-[14rem] h-52 rounded" src="src/assets/Saga.jfif" alt="" />
                <div>
                <p className="text-white w-48 pt-1 font-medium">Saga</p>
                <p className="text-[#B3B3B3] text-sm w-48 pt-1">Artistas</p>
                </div>
            </div>
            </button>


            <button className="text-start">
            <div className="pr-6">
                <img className="w-[14rem] h-52 rounded-full" src="src/assets/creepy.jfif" alt="" />
                <div>
                <p className="text-white w-48 pt-1 font-medium">Creepy Nuts</p>
                <p className="text-[#B3B3B3] text-sm w-48 pt-1">Artistas</p>
                </div>
            </div>
            </button>



            <button className="text-start">
            <div>
                <img className="w-[14rem] h-52 rounded" src="src/assets/moon music.jfif" alt="" />
                <div>
                <p className="text-white w-48 pt-1 font-medium">Moon Music</p>
                <p className="text-[#B3B3B3] text-sm w-48 pt-1">Coldplay</p>
                </div>
            </div>
            </button>



        </div>
        </div>


        </div>
    )
}