const { useState } = require("react")
import SearchIcon from "@/components/icons/SearchIcon"
import ChevronRightIcon from "@/components/icons/ChevronRightIcon"


function FilterTool({
    onFilter,
}){

    return(
        <section className="bg-white rounded p-2 mb-3">
            <div className="flex w-full pb-2 border-b mb-2 group">
                <div className="transition group-focus-within:bg-white flex gap-3 w-1/3 p-2 px-3 bg-slate-100 rounded">
                    <SearchIcon className={"w-5"} />
                    <input placeholder="Cari.." className=" bg-transparent grow transition outline-none border-b-2 border-b-transparent focus:border-b-slate-800" type="text" />
                </div>
            </div>
            <div className="flex  justify-between">
                <div className="flex gap-2">
                    <div className="flex gap-2 border-2 px-3 py-1 rounded items-center">
                        <p className="text-gray-600 text-sm ">Limit : </p>
                        <input placeholder="Cari.." className="transition outline-none border-b-2 border-b-transparent focus:border-b-slate-800" type="number" />
                    </div>
                    <div className="flex gap-2 border-2 px-3 py-1 rounded items-center">
                        <p className="text-gray-600 text-sm ">Tanggal Awal : </p>
                        <input placeholder="Cari.." className="transition outline-none border-b-2 border-b-transparent focus:border-b-slate-800" type="date" />
                    </div>
                    <div className="flex gap-2 border-2 px-3 py-1 rounded items-center">
                        <p className="text-gray-600 text-sm ">Tanggal Akhir : </p>
                        <input placeholder="Cari.." className="transition outline-none border-b-2 border-b-transparent focus:border-b-slate-800" type="date" />
                    </div>
                </div>
                <button className="flex gap-1 bg-green-700 hover:bg-green-600 active:bg-green-500 text-white rounded items-center px-2">
                    <ChevronRightIcon />
                    <p className="px-1"> Terapkan </p>
                </button>
            </div>
        </section>
    )
}


export default FilterTool