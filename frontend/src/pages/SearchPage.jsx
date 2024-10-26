import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SliderCards from "../components/SliderCards"
import Card from "../components/Card"

export default function SearchPage() {

    const { search } = useParams()
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        fetch(`https://spotify-deploy-api.vercel.app/search/${search}`)
        .then(response => response.json())
        .then(data => setSearchResults(data))
        .catch(error => console.log(error))
    }, [search])

    return (
         <div className="bg-Sidebar flex flex-col w-full rounded-lg">
            <SliderCards titulo="Resultado">
            {
                searchResults.length > 0 ?
                    searchResults.map( resultado => (
                        <Card key={resultado._id} {...resultado}/>
                    ))
                :
                <h1 className="text-white text-xl mt-5">Não Achamos</h1>
            }
            </SliderCards>
        </div>
    )
}