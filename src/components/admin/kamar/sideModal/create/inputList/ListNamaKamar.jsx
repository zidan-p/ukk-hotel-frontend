import TrashIcon from "@/components/icons/TrashIcon";




function ListNamaKamar({index, namaKamar, count, onChangeCount, onDeleteNama}){

    function handleChangeValue(e){
        onChangeCount(index,Math.abs(e.target.value));
    }

    return (
        <div className="py-2 border-b flex border-b-gray-200 justify-between">
            <p className="text-sm font-semibold text-gray-500">{namaKamar}</p>
            <div className="flex gap-2">
                <input onChange={handleChangeValue} className="w-16 px-2 bg-slate-200" type="number" min={1} value={count} />
                <button onClick={(e)=>onDeleteNama(index)} className="group">
                    <TrashIcon className={"w-4 text-red-300 group-hover:text-red-400 group-active:text-red-600"} />
                </button>
            </div>
        </div>
    )
}


export default ListNamaKamar;