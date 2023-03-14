import AlertIcon from "@/components/icons/AlertIcon";
import pemesanan from "@/service/pemesanan";
import { toast } from "react-toastify";





export default function DeletePemesanan({onChangePage, dataPemesanan, onClose}){

    async function deletePemesanan(){
        try {
            const data = await pemesanan.deletePemesanan(dataPemesanan.id);
            await onClose();
            toast.success("data telah dihapus");
        } catch (error) {
            console.log(error);
            toast.error("ada masalah..")
        }
    }

    return(
        <div className="px-28 flex flex-col justify-center h-full gap-3">
            <div className="bg-red-50 rounded p-3 pt-5">
                <AlertIcon className={"text-red-700 w-20 h-20 mx-auto mb-5"} />
                <p className="text-center text-red-800">
                    apakah anda yakin ingin menghapus data pemesanan 
                    <span className="inline-block bg-red-200 px-2 rounded">{dataPemesanan.nomorPemesanan}</span>
                </p>
            </div>
            <div className="flex px-2 gap-2">
                <button onClick={()=>onChangePage(0)} className="transition border py-1 basis-1/2 rounded hover:bg-slate-200 active:bg-slate-300">
                    Batal
                </button>
                <button onClick={()=>deletePemesanan()} className="transition border py-1 basis-1/2 text-white rounded bg-red-500 hover:bg-red-600 active:bg-red-700">
                    Yakin
                </button>
            </div>
        </div>
    )
}