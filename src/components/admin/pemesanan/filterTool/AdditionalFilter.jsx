
import ChevronRightIcon from "@/components/icons/ChevronRightIcon"


function AdditionalFilter({filterParams,onFilterChange, show}){

    function setParams(event){
        onFilterChange(
            event.target.name,
            event.target.value
        )
    }
    return(
        <div className={`transition min-h-0 delay-200 ${show ? "" : "opacity-0"} flex justify-between`}>
            <div className={`transition delay-100 flex gap-2 ${show ? "" : "hidden"}`}>
                <div className="flex bg-white gap-2 border-2 px-3 py-1 rounded items-center">
                    <p className="text-gray-600 text-sm ">Limit : </p>
                    <input  name="limit" onChange={setParams} value={filterParams.limit} placeholder="Limit" className="transition outline-none bg-transparent border-b-2 border-b-transparent focus:border-b-slate-800" type="number" />
                </div>
                <div className="flex bg-white gap-2 border-2 px-3 py-1 rounded items-center">
                    <p className="text-gray-600 text-sm ">Tanggal Awal : </p>
                    <input name="tgl_awal"  onChange={setParams} value={filterParams.tgl_awal} placeholder="Cari.." className="transition outline-none bg-transparent border-b-2 border-b-transparent focus:border-b-slate-800" type="date" />
                </div>
                <div className="flex bg-white gap-2 border-2 px-3 py-1 rounded items-center">
                    <p className="text-gray-600 text-sm ">Tanggal Akhir : </p>
                    <input name="tgl_akhir" onChange={setParams} value={filterParams.tgl_akhir} placeholder="Cari.." className="transition outline-none bg-transparent border-b-2 border-b-transparent focus:border-b-slate-800" type="date" />
                </div>
            </div>
        </div>
    )
}


export default AdditionalFilter