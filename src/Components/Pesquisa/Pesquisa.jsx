import { useContext } from "react";
import { Context } from "../Context/Context";
function Pesquisa() {
    const {setFilter,setNome,Nome} = useContext(Context);
    return (
        <div className="p-4 sm:p-10 m-5 bg-slate-700 max-w-3xl mx-auto rounded-lg">
            <div className="flex flex-col sm:flex-row items-center gap-4">
                
                <input
                    value={Nome}
                    onChange={(e) => setNome(e.target.value)}
                    type="text"
                    className="border-2 border-solid w-full px-3 py-2 rounded"
                    placeholder="Digite sua pesquisa..."
                />

                <select onChange={(e) => {setFilter(e.target.value)}} className="border-2 border-solid w-full sm:w-auto px-3 py-2 rounded">
                    <option hidden>Selecione algum continente</option>
                    <option value={"all"}>Todos</option>
                    <option value={"region/Asia"}>Ásia</option>
                    <option value={"region/africa"}>África</option>
                    <option value={"region/america"}>Americas</option>
                    <option value={"region/Antarctic"}>Antártida</option>
                    <option value={"region/Europe"}>Europa</option>
                    <option value={"region/Oceania"}>Oceania</option>
                </select>


            </div>
        </div>
    );
}

export default Pesquisa;
