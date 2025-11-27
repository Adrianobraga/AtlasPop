import Paises from "../Paises/Paises"
import Pesquisa from "../Pesquisa/Pesquisa"
import Favorito from "../Favorito/Favorito"
import Api from "../API/Api"
function App() {    
  return (
    <>
    <Api />
    <Pesquisa />
    <Paises />
    <Favorito />
    </>
  )
}

export default App
