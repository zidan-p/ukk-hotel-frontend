import ChevronRightIcon from "@/components/icons/ChevronRightIcon";
import SearchIcon from "@/components/icons/SearchIcon";





function FilterTool({
    filterParams,
    onFilterChange, 
    onFind,
    onOpenCreateModal
}){

    function search(e){
        e.preventDefault();

        onFind()
    }

    return(
        <div className="flex justify-between w-full pb-2 border-b mb-2 ">
            <form onSubmit={search} className="flex w-full gap-4">
                <div className="transition group group-focus-within:bg-white bg-white flex gap-3 w-1/3 p-1 px-3 rounded">
                    <SearchIcon className={"w-5"} />
                    <input value={filterParams.keyword} onChange={(e) => onFilterChange(e.target.name, e.target.value)} name="keyword" placeholder="Cari.." className=" bg-transparent grow transition outline-none border-b-2 border-b-transparent" type="text" />
                </div>

                <button type="submit" className="flex gap-1 bg-green-700 hover:bg-green-600 active:bg-green-500 text-white rounded items-center px-2">
                    <ChevronRightIcon />
                    <p className="px-1"> Terapkan </p>
                </button>
            </form>
            
            <div className="flex gap-2">
                <button onClick={()=>onOpenCreateModal()} className=" text-white bg-slate-800 hover:bg-slate-700 active:bg-slate-600 px-3 py-1 rounded">Tambah</button>
            </div>
        </div>
    )
}

export default FilterTool;