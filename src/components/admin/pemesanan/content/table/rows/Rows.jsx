const { formatDateIDN } = require("@/utils/dateFormatIndonesia");
const { formatMoneyIDN } = require("@/utils/formatNumber");
import Tippy from "@tippyjs/react";


//font
import roboto from "@/font/Roboto";
import AlertIcon from "@/components/icons/AlertIcon";
import MoreVertical from "@/components/icons/MoreVertical";




function TableRows({
    id,
    namaPemesan,
    tglCheckIn,
    tglCheckOut,
    status, //baru, diterima, check_in, check_out
    hargaTotal,
    handleNextStatus,
    onOpenModal
}){

    let statusElement;

    switch(status){
        case "baru":
            statusElement = (
            <p className="divide-x justify-between bg-yellow-100 font-semibold rounded flex text-yellow-700 px-3 py-1.5">
                Baru
                <Tippy
                content={(
                    <div className={`${roboto.className} text-xs w-48 bg-opacity-80 text-center bg-slate-700 text-white rounded p-2`}>
                        <AlertIcon className={"mx-auto mb-2"} />
                        Ubah status pemesanan menjadi diterima
                    </div>
                )}
                interactive={false}
                duration={0}
                delay={[600,0]}
                >
                    <button onClick={()=>handleNextStatus({id : id,status :"diterima"})} className="transition text-yellow-700 opacity-40 hover:opacity-100">
                        accept
                    </button>
                </Tippy>
            </p>
            )
        break;

        case "diterima": 
        statusElement = (
            <p className="divide-x justify-between bg-green-100 font-semibold rounded flex text-green-700 px-3 py-1.5">
                Diterima
                <Tippy
                content={(
                    <div className={`${roboto.className} text-xs w-48 bg-opacity-80 text-center bg-slate-700 text-white rounded p-2`}>
                        <AlertIcon className={"mx-auto mb-2"} />
                        Ubah status pemesanan menjadi Check In
                    </div>
                )}
                interactive={false}
                duration={0}
                delay={[600,0]}
                >

                <button onClick={()=>handleNextStatus({id : id,status :"check_in"})} className="transition text-green-700 opacity-40 hover:opacity-100">
                    Check In
                </button>
                </Tippy>
            </p>
        )
        break;

        case "check_in":
        statusElement = (
            <p className="divide-x justify-between bg-slate-100 font-semibold rounded flex text-slate-700 px-3 py-1.5">
                Check In
                <Tippy
                content={(
                    <div className={`${roboto.className} text-xs w-48 bg-opacity-80 text-center bg-slate-700 text-white rounded p-2`}>
                        <AlertIcon className={"mx-auto mb-2"} />
                        Ubah status pemesanan menjadi Check Out
                    </div>
                )}
                interactive={false}
                duration={0}
                delay={[600,0]}
                >

                <button onClick={()=>handleNextStatus({id : id,status :"check_out"})} className="transition text-slate-700 opacity-40 hover:opacity-100">
                    Check Out
                </button>
                </Tippy>
            </p>
        )
        break

        case "check_out":
        statusElement = (
            <p className="divide-x justify-between bg-gray-100 font-semibold rounded flex text-gray-700 px-3 py-1.5">
                Check Out
            </p>
        )
        break;

    }

    return (
        <tr className="transition hover:bg-slate-50">
            <td className="px-2 py-1.5 font-semibold ">{namaPemesan}</td>
            <td className="px-2 py-1.5"> 
                {statusElement}
            </td>
            <td className="px-2 py-1.5 text-gray-500">{formatDateIDN(tglCheckIn)}</td>
            <td className="px-2 py-1.5 text-gray-500">{formatDateIDN(tglCheckOut)}</td>
            <td className="px-2 py-1.5 text-gray-500 font-semibold">Rp. {formatMoneyIDN(hargaTotal)}</td>
            <td className="px-2 py-1.5">
                <button onClick={()=>onOpenModal(id)} className="transition p-1 px-3 mx-auto rounded hover:bg-slate-300 active:bg-slate-400">
                    <MoreVertical className={"w-3"} />
                </button>
            </td>
        </tr>
    )
}


export default TableRows;