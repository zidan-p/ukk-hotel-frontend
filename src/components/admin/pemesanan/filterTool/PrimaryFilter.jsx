import SearchIcon from "@/components/icons/SearchIcon"
import ChevronRightIcon from "@/components/icons/ChevronRightIcon"

function PrimaryFilter({filterParams,onFilterChange, toggleAdditional, onFind}){
    return(
        <div className="flex justify-between w-full pb-2 border-b mb-2 ">
            <div className="transition group group-focus-within:bg-white flex gap-3 w-1/3 p-1 px-3 bg-slate-100 rounded">
                <SearchIcon className={"w-5"} />
                <input value={filterParams.keyword} onChange={(e) => onFilterChange(e.target.name, e.target.value)} name="keyword" placeholder="Cari.." className=" bg-transparent grow transition outline-none border-b-2 border-b-transparent focus:border-b-slate-800" type="text" />
            </div>
            
            <div className="flex gap-2">
                <button onClick={()=>toggleAdditional()} className="px-8 text-gray-400 hover:text-black">
                    filter
                </button>
                <button onClick={()=>onFind()} className="flex gap-1 bg-green-700 hover:bg-green-600 active:bg-green-500 text-white rounded items-center px-2">
                    <ChevronRightIcon />
                    <p className="px-1"> Terapkan </p>
                </button>
            </div>
        </div>
    )
}

export default PrimaryFilter