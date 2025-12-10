import Paises from "../Paises/Paises"
import Pesquisa from "../Pesquisa/Pesquisa"
import Favoritobotao from "../Favorito/FavoritoBotão"
import Api from "../API/Api"
function App() {    
  return (
    <>
    <Api />
    <Pesquisa />
    <Paises />
    <Favoritobotao />
    </>
  )
}

export default App
