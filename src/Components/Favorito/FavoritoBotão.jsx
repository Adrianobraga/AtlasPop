import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";

function Favoritobotao() {
  const { Serasa } = useContext(Context);

  return (
    <Link to="/Favoritos" onClick={Serasa}>
      <div className="h-20 w-20 p-5 bg-blue-500 hover:bg-blue-600 fixed bottom-10 right-10 rounded-full shadow-lg flex items-center justify-center transition">
        <img className="h-10" src="HeartLike.png" alt="Favoritos" />
      </div>
    </Link>
  );
}

export default Favoritobotao;
