const { default: InputForm } = require("@/components/admin/form/InputForm");

import ChevronLeftIcon from "@/components/icons/ChevronLeftIcon";
import EditIcon from "@/components/icons/EditIcon";
import TrashIcon from "@/components/icons/TrashIcon";
import pemesanan from "@/service/pemesanan";
import { useState } from "react";
import { toast } from "react-toastify";


function EditForm({onChangePage, dataPemesanan, onClose}){
    const [dataState, setDataState] = useState(dataPemesanan);

    function handleChange(e){
        const {name, value} = e.target;
        setDataState((prev)=>({
            ...prev,
            [name] : value
        }))
    }

    async function handleSubmitChange(){
        let submitData = {
            namaPemesan : dataState.namaPemesan,
            emailPemesan : dataState.emailPemesan,
            tglPemesanan : dataState.tglPemesanan,
            tglCheckIn : dataState.tglCheckIn,
            tglCheckOut : dataState.tglCheckOut
        }
        try {
            const data = pemesanan.updatePemesanan({
                id: dataState.id,
                dataSend: submitData
            })
            await onClose();
            toast.success("berhasil mengubah data...");
        } catch (error) {
            toast.error("data gagal diubah");
        }
    }
    return (
        <>
        <div className="flex justify-between items-center pb-2 mb-2 border-b ">
            <button onClick={()=>onChangePage(0)} className="flex gap-2 items-center rounded hover:bg-slate-200 active:bg-slate-300 p-1 ">
                <ChevronLeftIcon/>
                <h2 className="px-2 text-2xl font-bold">
                Batal
                </h2>
            </button>
            <h2>
                Edit Pemesanan
            </h2>
            <button onClick={handleSubmitChange} className="bg-yellow-300 px-3 py-1 rounded text-yellow-800 hover:bg-yellow-400 active:bg-yellow-500">
                Ubah
            </button>
        </div>
        <div className="w-5/6 mx-auto">
            <form action="" className="flex flex-col gap-2">
                <InputForm onChange={handleChange} value={dataState.namaPemesan} name="namaPemesan">Nama Pemesan</InputForm>
                <InputForm onChange={handleChange} value={dataState.emailPemesan} name="emailPemesan" >Email Pemesan</InputForm>
                <InputForm onChange={handleChange} value={dataState.namaTamu} name="namaTamu" >Nama Tamu</InputForm>
            </form>
        </div>
        </>
    )
}

export default EditForm;