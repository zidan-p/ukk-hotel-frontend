import EditIcon from "@/components/icons/EditIcon";
import TrashIcon from "@/components/icons/TrashIcon";
import XIcon from "@/components/icons/XIcon";
import Image from "next/image";
import { IMAGE_SOURCE_URL } from "@/utils/const";
import { formatDateIDN } from "@/utils/dateFormatIndonesia";
import { formatMoneyIDN } from "@/utils/formatNumber";





function ShowForm({onChangePage, kamarData, onClose}){

    function goToDelete(){
        onChangePage(3)
    }

    function goToEdit(){
        onChangePage(2)
    }

    // return (
    // <>
    // <div className="whitespace-pre">
    //     {JSON.stringify(kamarData,null,2)}
    // </div>
    // </>
    // )

    return (
        <>
        <div className="border-b pb-2 flex flex-row-reverse justify-between ">
            <div className="flex items-stretch gap-2">
                <div className="flex items-center mt-1.5 divide-x-2">
                    <button onClick={goToDelete} className="px-2 text-red-400 hover:text-red-500 active:text-red-600 flex w-full justify-center gap-1 text-sm">
                        <TrashIcon className={"w-4"} />
                        Hapus
                    </button>
                    <button onClick={goToEdit} className="px-2 text-amber-400 hover:text-amber-500 active:text-amber-600 flex w-full justify-center gap-1 text-sm">
                        <EditIcon className={"w-4"} />
                        Edit
                    </button>
                </div>
                <button onClick={onClose} className="p-1 text-gray-500 hover:text-slate-800 hover:bg-slate-200">
                    <XIcon />
                </button>
            </div>
        </div>

        <div className=" w-full py-2 h-full">
            <section className="transition hover:bg-gray-200 rounded p-1 px-2 ">
                <h2 className="text-2xl font-bold">{kamarData.nama}</h2>
                <div className="flex flex-wrap">
                    <p className=" basis-1/2 text-sm text-gray-500">Tipe Kamar : </p>
                    <p className="">{kamarData?.TipeKamar?.namaTipeKamar}</p>
                </div>
                <div className="flex flex-wrap">
                    <p className=" basis-1/2 text-sm text-gray-500">Banyak Pemesanan </p>
                    <p className=""> {kamarData?.DaftarDetailPemesanan?.length} </p>
                </div>
            </section>

            <section className=" pl-2 border-t pt-2 mt-2 rounded">
                <h5 className="text-sm text-gray-500 font-semibold mb-2" >Riwayat Pemesanan</h5>
                {(
                    (kamarData?.DaftarDetailPemesanan?.length !== 0) && 
                    (kamarData?.DaftarDetailPemesanan?.length !== null) && 
                    (kamarData?.DaftarDetailPemesanan?.length !== undefined) 
                ) ? (
                    <ul className="flex flex-col gap-2">

                        {/* NOTE : looping dibaha harus menggunkaana tanda "?", saya kurangtahu mengapa */}
                        {(kamarData?.DaftarDetailPemesanan?.map((pemesanan, index)=> (
                        <li key={index} className="w-full cursor-default px-2 py-4 border bg-white border-slate-200 border-l-slate-700 hover:bg-slate-200 rounded">
                            <div className="flex justify-between">
                                <span className="font-semibold">Rp. {formatMoneyIDN(pemesanan.hargaTotal)}</span>
                                <span className="text-gray-500 text-sm">{formatDateIDN(pemesanan.createdAt)}</span>
                            </div>
                        </li>
                        )))}
                    </ul>
                ) : (
                    <h1 className="text-xl font-semibold text-gray-600">tidak ada pemesanan tersedia</h1>
                )}
            </section>
        </div>
        
        </>
    )
}

export default ShowForm;