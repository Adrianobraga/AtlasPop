import { Link } from "react-router-dom";

function Voltar() {
  return (
    <Link to="/">
      <div className="h-10 w-10 py-2 px-4 bg-gray-400 hover:bg-gray-500 fixed top-10 left-10 rounded-full shadow-md flex items-center justify-center transition">
        X
      </div>
    </Link>
  );
}

export default Voltar;
