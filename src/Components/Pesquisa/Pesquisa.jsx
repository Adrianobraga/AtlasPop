import { useContext } from "react";
import { Context } from "../Context/Context";

function Pesquisa() {
  const { setFilter, setNome, Nome } = useContext(Context);

  return (
    <div className="p-6 sm:p-10 m-5 bg-gradient-to-r from-slate-800 to-slate-700 max-w-3xl mx-auto rounded-xl shadow-lg">
      <h2 className="text-white text-xl sm:text-2xl font-semibold mb-6 text-center">
        Pesquise por país ou continente
      </h2>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <input
          value={Nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
          className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none transition duration-300"
          placeholder="Digite sua pesquisa..."
        />

        <select
          onChange={(e) => setFilter(e.target.value)}
          className="w-full sm:w-64 px-4 py-2 rounded-lg border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none transition duration-300 bg-white"
        >
          <option hidden>Selecione um continente</option>
          <option value={"all"}>Todos</option>
          <option value={"region/Asia"}>Ásia</option>
          <option value={"region/africa"}>África</option>
          <option value={"region/america"}>Américas</option>
          <option value={"region/Antarctic"}>Antártida</option>
          <option value={"region/Europe"}>Europa</option>
          <option value={"region/Oceania"}>Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default Pesquisa;
