import AlertIcon from "@/components/icons/AlertIcon";
import ChevronLeftIcon from "@/components/icons/ChevronLeftIcon";
import XIcon from "@/components/icons/XIcon";
import user from "@/service/user";
import { toast } from "react-toastify";






function DeleteForm({onChangePage, dataUser, onClose}){


    async function deleteUser(){
        try {
            // toast(JSON.stringify(dataUser));
            const result = await user.deleteUser(dataUser.id);
            onClose();
            toast.success("user selesai dihapus");
        } catch (error) {
            toast.error("user gagal dihapus");
            toast(JSON.stringify(error));
        }

    }

    function goToShow(){
        onChangePage(1);
    }


    return (
        <>
        <div className="border-b pt-1 py-2 flex justify-between">
            <button onClick={goToShow} className="flex hover:bg-slate-200 rounded px-2 items-center">
                <ChevronLeftIcon />
                <h1 className="font-semibold text-gray-500 self-center mr-2">
                    <span className="text-red-400">Hapus </span>
                    {dataUser.username}
                </h1>
            </button>
            <button onClick={onClose} className="p-1 text-gray-500 hover:text-slate-800 hover:bg-slate-200">
                <XIcon />
            </button>
        </div>

        <div className="px-5 flex flex-col justify-center h-full gap-3">
            <div className="bg-red-50 rounded p-3 pt-5">
                <AlertIcon className={"text-red-700 w-20 h-20 mx-auto mb-5"} />
                <p className="text-center text-red-800">
                    apakah anda yakin ingin menghapus data user 
                    <span className="inline-block bg-red-200 px-2 rounded">{dataUser.username}</span>
                </p>
            </div>
            <div className="flex px-2 gap-2">
                <button onClick={()=>goToShow()} className="transition border py-1 basis-1/2 rounded hover:bg-slate-200 active:bg-slate-300">
                    Batal
                </button>
                <button onClick={()=>deleteUser()} className="transition border py-1 basis-1/2 text-white rounded bg-red-500 hover:bg-red-600 active:bg-red-700">
                    Yakin
                </button>
            </div>
        </div>
        
        </>
    )
}

export default DeleteForm;