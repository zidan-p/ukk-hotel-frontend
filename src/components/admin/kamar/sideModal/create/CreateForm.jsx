import FileForm from "@/components/admin/form/FileForm";
import InputForm from "@/components/admin/form/InputForm";
import PlusIcon from "@/components/icons/PlusIcon";
import XIcon from "@/components/icons/XIcon";
import tipeKamar from "@/service/tipeKamar";
import { useState } from "react";
import { toast } from "react-toastify";



function CreateForm({onClose}){

    const [formState, setFormState] = useState([
        {
            nama : "",
            TipeKamarId : 1,
            count : 1
        }
    ]);

    function handleChange(e){
        const {name, value} = e.target;
        setFormState((prev) => ({
            ...prev,
            [name] : value
        }))
    }


    function resetState(){
        setFormState({
        })
    }

    function handleOnFileChange(file){
        setFormState((prev) => ({
            ...prev,
            foto : file
        }))
    }

    async function sendData(e){
        e.preventDefault();
        try {
            const result = await tipeKamar.createTipeKamar(formState);
            console.log(result);
            toast.success("data berhasil diubah");
            onClose();
            resetState();
        } catch (error) {
            console.log(error.response.data);
            toast.error("ada masalah dalam mengirim data")
        }
    }

    function backToShow(){
        onChangePage(1);
    }


    return (
        <>
        <div className="border-b pt-1 py-2 flex justify-between">
            <h1 className="font-semibold text-gray-500">Create Kamar</h1>
            <button onClick={onClose} className="p-1 text-gray-500 hover:text-slate-800 hover:bg-slate-200">
                <XIcon />
            </button>
        </div>
        
        <div className="flex flex-col gap-5 px-4 h-full max-h-full mt-3">
            <div className="">
                <p className="text-sm">tipe Kamar</p>
                <p className="transition bg-gray-200 px-2 py-2 rounded font-semibold border hover:bg-white hover:border-gray-800 text-gray-700">kamar baru</p>
            </div>
            <div className="bg-gray-100 grow p-2">
                <p className="bg-">Nama Kamar</p>
                <div className="flex gap-2 ">
                    <input type="text" className="border border-slate-500 px-4 py-2 grow rounded" />
                    <button className="border border-gray-500 bg-white hover:bg-gray-300 active:bg-gray-400 px-2 rounded">
                        <PlusIcon className={"w-6 text-gray-700"} />
                    </button>
                </div>
                <div className="form-list border-t border-t-gray-400 pt-1 mt-2 flex max-h-full flex-col gap-1">
                    <div className="px-2 py-2 border-b flex border-b-gray-400 justify-between">
                        <p>kamar sanding barat</p>
                        <input className="w-16 px-2" type="number" value={1} />
                    </div>
                    
                </div>
            </div>
            <div className="w-full">
                <button onClick={sendData} className="w-full bg-slate-800 text-white px-5 py-1 rounded-sm hover:bg-slate-700 active:bg-slate-600">
                    Create
                </button>
            </div>
        </div>
        </>
    )
}

export default CreateForm;