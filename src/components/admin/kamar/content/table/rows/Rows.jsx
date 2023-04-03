const { formatDateIDN } = require("@/utils/dateFormatIndonesia");


//font
import MoreVertical from "@/components/icons/MoreVertical";




function TableRows({
    id,
    nama,
    namaTipeKamar,
    jumlahPemesanan,
    tanggalDibuat
}){

    return ( 
        <>
            <tr className="transition hover:bg-slate-50">
                <td className="px-2 py-1.5"> 
                    {nama}
                </td>
                <td className="px-2 py-1.5"> 
                    {namaTipeKamar}
                </td>
                <td className="px-2 py-1.5 text-gray-500">
                    {formatDateIDN(tanggalDibuat)}
                </td>
                <td className="px-2 py-1.5 text-gray-500">{jumlahPemesanan}</td>
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