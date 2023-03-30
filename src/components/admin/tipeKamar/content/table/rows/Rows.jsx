const { formatDateIDN } = require("@/utils/dateFormatIndonesia");
const { formatMoneyIDN } = require("@/utils/formatNumber");
import Tippy from "@tippyjs/react";


//font
import MoreVertical from "@/components/icons/MoreVertical";
import Image from "next/image";
import { IMAGE_SOURCE_URL } from "@/utils/const";




function TableRows({
    id,
    foto,
    nama,
    tanggalDibuat,
    deskripsi = "",
    banyakKamar,
    onOpenModal,
}){

    return ( 
        <>
            <tr className="transition hover:bg-slate-50">
                <td className="px-2 py-1.5 font-semibold ">
                    <Image src={IMAGE_SOURCE_URL+foto} alt={"tipe-kamat-foto-"+nama} className="w-10 h-10 rounded-full" height={80} width={80} />
                </td>
                <td className="px-2 py-1.5"> 
                    {nama}
                </td>
                <td className="px-2 py-1.5 text-gray-500">
                    {formatDateIDN(tanggalDibuat)}
                </td>
                <td className="px-2 py-1.5 text-gray-500">{deskripsi?.substring(0,12)}</td>
                <td className="px-2 py-1.5 text-gray-500">{banyakKamar}</td>
                <td className="px-2 py-1.5">
                    <button onClick={()=>{onOpenModal(id)}} className="transition p-1 px-3 mx-auto rounded hover:bg-slate-300 active:bg-slate-400">
                        <MoreVertical className={"w-3"} />
                    </button>
                </td>
            </tr>
        </>
    )
}


export default TableRows;