import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
function Favoritobotao () {
 const { Serasa } = useContext(Context);

  
    return(
    <>
  <Link to="/Favoritos" onClick={Serasa}>  <div className="h-20 w-20 p-5 bg-gray-400 hover:bg-gray-500 fixed bottom-10 right-10 rounded-full" ><img className="h-10" src="HeartLike.png" alt="" /></div> </Link>
    </>
    )
}

export default Favoritobotao;