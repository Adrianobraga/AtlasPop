import { Link } from "react-router-dom";
function Favoritobotao () {
    return(
    <>
  <Link to="/Favoritos">  <div className="h-20 w-20 p-5 bg-gray-400 hover:bg-gray-500 fixed bottom-10 right-10 rounded-full"><img className="h-10" src="HeartLike.png" alt="" /></div> </Link>
    </>
    )
}

export default Favoritobotao;