import PlusIcon from "@/components/icons/PlusIcon";
import ListNamaKamar from "./ListNamaKamar";
import { useRef } from "react";




function InputList({onAddNama,onDeleteNama,onChangeCount,namaKamarList}){

    const inputElement = useRef(null);

    function handleAddNama(e){
        e.preventDefault();
        onAddNama(inputElement.current.value);
        inputElement.current.value = ""; 
    }
    return (
        <div className="grow max-h-full flex flex-col py-2 gap-2">
            <div className="input-container">
                <p className="text-gray-600 text-sm">Nama Kamar</p>
                <form onSubmit={handleAddNama} className="flex gap-2 ">
                    <input ref={inputElement} min={0} type="text" className="border border-slate-300 px-4 py-1.5 grow rounded" />
                    <button onClick={handleAddNama} className="border border-gray-300 bg-white hover:bg-gray-300 active:bg-gray-400 px-2 rounded">
                        <PlusIcon className={"w-6 text-gray-700"} />
                    </button>
                </form>
            </div>
            <div className="transition-all  overflow-y-auto pr-4">
                <div className=" form-list border-t border-t-gray-200 pt-1 mt-2 flex max-h-full flex-col gap-1">
                    {namaKamarList.map((element, index) => {
                        const countTemp = element.count;
                        return (
                            <ListNamaKamar 
                                key={index}
                                index={index}
                                count={countTemp}
                                namaKamar={element.nama}
                                onChangeCount={onChangeCount}
                                onDeleteNama={onDeleteNama}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default InputList;