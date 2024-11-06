import { useEffect, useState } from "react";
import SliderCards from "../components/SliderCards";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import SliderCards2 from "../components/SliderCards2";


export default function ConteudoPrincipal() {
  const [artistas, setArtistas] = useState([]);

  
  useEffect(() => {
      setTimeout(() => {
      fetch('https://acspotify.vercel.app/artistas')
      .then(res => res.json())
      .then(data => {setArtistas(data), console.log(data)})
      .catch(err => console.log(err))
      }, 3000)
  },[])

    return(
          <>
          <div className="bg-Sidebar flex flex-col w-full rounded-lg">
        <div className="pt-5 pl-6">
                    <button className="bg-SideButton text-white px-3 py-1 rounded-full text-sm">Tudo</button>
                    <button className="bg-SideButton text-white px-3 py-1 rounded-full text-sm ml-2">Músicas</button>
                    <button className="bg-SideButton text-white px-3 py-1 rounded-full text-sm ml-2">Podcasts</button>
                </div>
                <div>
        <SliderCards2>
        {artistas
            .filter( genero => genero.genres.includes( "Pop"))
            .sort((a, b) => a.name.localeCompare(b.name))
            .slice(0,3)
            .map(artista => (
                <Card2 key={artista._id} {...artista}/>
            ))}
        </SliderCards2>
            
            
           
            
      
        <SliderCards2>
        {artistas
            .filter( genero => genero.genres.includes( "Rock"))
            .sort((a, b) => a.name.localeCompare(b.name))
            .slice(0,3)
            .map(artista => (
                <Card2 key={artista._id} {...artista}/>
            ))}
        </SliderCards2>
        </div>

          <SliderCards titulo="Feito Para Você">
            {artistas
            .filter( genero => genero.genres.includes("Rock"))
            .sort((a, b) => a.name.localeCompare(b.name))
            .slice(0,5)
            .map(artista => (
                <Card key={artista._id} {...artista}/>
            ))}
            
          </SliderCards>
          <SliderCards titulo="Suas músicas estão com saudade">
            {artistas
            .filter( genero => genero.genres.includes("Pop" || "Rap"))
            .sort((a, b) => a.name.localeCompare(b.name))
            .slice(0,4)
            .map(artista => (
                <Card key={artista._id} {...artista}/>
            ))}
          </SliderCards>
         
        </div>
        </>
    )
}