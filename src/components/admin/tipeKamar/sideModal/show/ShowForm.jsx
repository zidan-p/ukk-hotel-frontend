import EditIcon from "@/components/icons/EditIcon";
import TrashIcon from "@/components/icons/TrashIcon";
import XIcon from "@/components/icons/XIcon";
import Image from "next/image";
import { IMAGE_SOURCE_URL } from "@/utils/const";
import { formatDateIDN } from "@/utils/dateFormatIndonesia";





function ShowForm({onChangePage, tipeKamarData, onClose}){

    function goToDelete(){
        onChangePage(3)
    }

    function goToEdit(){
        onChangePage(2)
    }

    return (
        <>
        <div className="border-b pb-2 flex flex-row-reverse justify-between">
            <div className="flex items-stretch gap-2">
                <div className="flex items-center mt-1.5 divide-x-2">
                    <button onClick={goToDelete} className="px-2 text-red-400 hover:text-red-500 active:text-red-600 flex w-full justify-center gap-1 text-sm">
                        <TrashIcon className={"w-4"} />
                        Hapus
                    </button>
                    <button onClick={goToEdit} className="px-2 text-amber-400 hover:text-red-500 active:text-red-600 flex w-full justify-center gap-1 text-sm">
                        <EditIcon className={"w-4"} />
                        Edit
                    </button>
                </div>
                <button onClick={onClose} className="p-1 text-gray-500 hover:text-slate-800 hover:bg-slate-200">
                    <XIcon />
                </button>
            </div>
        </div>

        <section className="mt-2 ">
            <h5 className="text-sm text-gray-500 font-semibold" >Profil tipe Kamar</h5>
            <div className=" mb-4 rounded mt-3 py-5">
                <Image className=" mx-auto rounded shadow" src={IMAGE_SOURCE_URL + tipeKamarData.foto} width={300} height={300} alt="gambar user" />
                
                {/* <pre className="whitespace-pre-wrap break-words">
                    {JSON.stringify(tipeKamarData,null,2)}
                </pre> */}
            </div>
            <div className="mb-2">
                <h2 className="text-2xl font-bold ">{tipeKamarData.namaTipeKamar}</h2>
                <p className="text-sm">{tipeKamarData.deskripsi}</p>
            </div>
            <ul className="">
                <li className="flex flex-wrap">
                    <p className="text-sm basis-1/3 text-gray-500">tanggal dibuat : </p>
                    <p className="text-sm font-semibold">{formatDateIDN(tipeKamarData.createdAt)}</p>
                </li>
                <li className="flex flex-wrap">
                    <p className="text-sm basis-1/3 text-gray-500">Banyak Kamar : </p>
                    <p className="text-sm font-semibold">{tipeKamarData.Kamars?.length || 0} kamar</p>
                </li>
            </ul>
        </section>

        <hr className="mt-7 mb-3" />

        <section>
            <h5 className="text-sm text-gray-500 font-semibold mb-2" >Daftar Kamar</h5>
            {((tipeKamarData?.Kamars?.length !== 0) || (tipeKamarData?.Kamars?.length !== null) ) ? (
                <ul className="flex flex-col gap-2">
                    {/* NOTE : looping dibaha harus menggunkaana tanda "?", saya kurangtahu mengapa */}
                    {(tipeKamarData.Kamars?.map(kamar => (
                    <li className="w-full cursor-default px-2 py-2 border border-slate-200 border-l-slate-700 hover:bg-slate-200 rounded">
                        {kamar.nama}
                    </li>
                    )))}
                </ul>
                // <></>
            ) : (
                <h1>tidak ada kamar tersedia</h1>
            )}
        </section>
        
        
        </>
    )
}

export default ShowForm;