import { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Container from "./components/Container";
import ConteudoPrincipal from "./pages/ConteudoPrincipal";

function App() {

  const [artistas, setArtistas] = useState([]);

  
  useEffect(() => {
      fetch('http://localhost:3000/artistas')
      .then(res => res.json())
      .then(data => setArtistas(data))
      .catch(err => console.log(err))
      .finally(() => console.log('Finalizou a requisição'))
  },[])

  return (
    <>
      <Header/>
      <Container>
        <Sidebar/>
        <ConteudoPrincipal>       
        </ConteudoPrincipal>
      </Container>
    </>
  )
}

export default App