import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function Artista() {


    const {id} = useParams()
    const [artista, setArtista] = useState({})

    useEffect(() => {
        const puxarArtista = async () => {
            try {
                const artista = await fetch(`http://localhost:3000/artistas/${id}`);
                const resposta = await artista.json();
                console.log('Resposta da API:', resposta);
                if (resposta) {
                    setArtista(resposta); // Define o artista apenas se a resposta for válida
                } else {
                    console.error('Dados do artista não encontrados');
                }
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };
    
        puxarArtista();
    }, []);
   
    
    return (
        <div className="bg-Sidebar flex flex-col w-full rounded-lg">
        

          <div className="p-10">
            <div className="flex items-center mb-4 gap-5">
            {artista && artista.image ? (
            <img src={artista.image} className="w-[100px] h-[100px]" alt="Artista" />
        ) : (
            <p>Imagem do artista não disponível</p>
        )}
                <h1 className="text-7xl font-bold">{artista.name}</h1>
            </div>
            <p>{artista.bio}</p>
            </div>
        
        </div>
    )
}