import FileForm from "@/components/admin/form/FileForm";
import InputForm from "@/components/admin/form/InputForm";
import ChevronLeftIcon from "@/components/icons/ChevronLeftIcon";
import XIcon from "@/components/icons/XIcon";
import tipeKamar from "@/service/tipeKamar";
import { IMAGE_SOURCE_URL } from "@/utils/const";
import { useState } from "react";
import { toast } from "react-toastify";





function EditForm({onChangePage, tipeKamarData, onClose}){
    const [formState, setFormState] = useState({
        namaTipeKamar : tipeKamarData.namaTipeKamar,
        harga : tipeKamarData.harga,
        deskripsi : tipeKamarData.deskripsi,
        foto : null,
    });

    function handleChange(e){
        const {name, value} = e.target;
        setFormState((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    //sya buat ini supaya meski tak senagaj tertutup statenya masih ada.
    // jadi setiap ditutup, componentnya harus masih ada.
    // tapi saya perlu fungsi untuk mereset state setiap melakuakn perubahan data.
    function resetState(){
        setFormState({
            namaTipeKamar : tipeKamarData.namaTipeKamar,
            harga : tipeKamarData.harga,
            deskripsi : tipeKamarData.deskripsi,
            foto : null,
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
            const result = await tipeKamar.updateTipeKamar(tipeKamarData.id,formState);
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
        <div className="border-b  pb-2 flex justify-between mb-2">
            <button onClick={backToShow} className="flex text-gray-500 px-2 hover:bg-gray-100 hover:text-gray-800 rounded items-center ">
                <ChevronLeftIcon />
                <h1 className="font-semibold ">Update Tipe kamar</h1>
            </button>
            <button onClick={onClose} className="p-1 text-gray-500 hover:text-slate-800 hover:bg-slate-200">
                <XIcon />
            </button>
        </div>

        <form action="" className="flex flex-col gap-5 px-4 h-full max-h-full">
            <div className="form-list grow flex max-h-full flex-col gap-5">
                <InputForm 
                    onChange={handleChange} 
                    value={formState.namaTipeKamar} 
                    name="namaTipeKamar"  
                >
                    Nama Tipe Kamar
                </InputForm>
                <InputForm 
                    onChange={handleChange} 
                    value={formState.deskripsi} 
                    name="deskripsi"  
                >
                    Deskripsi
                </InputForm>
                <InputForm 
                    onChange={handleChange} 
                    value={formState.harga} 
                    name="harga"  
                >
                    Harga
                </InputForm>
                <FileForm 
                    className="mt-5"
                    handleOnChange={handleOnFileChange} 
                    name="foto" 
                    fileSrc={IMAGE_SOURCE_URL + tipeKamarData.foto}
                >
                    Foto User
                </FileForm>
            </div>
            <div className="w-full">
                <button onClick={sendData} className="w-full bg-slate-800 text-white px-5 py-1 rounded-sm hover:bg-slate-700 active:bg-slate-600">
                    Edit
                </button>
            </div>
        </form>
        
        </>
    )
}

export default EditForm;