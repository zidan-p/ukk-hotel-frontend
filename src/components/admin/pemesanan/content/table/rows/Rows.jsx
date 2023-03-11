const { formatDateIDN } = require("@/utils/dateFormatIndonesia");
const { formatMoneyIDN } = require("@/utils/formatNumber");






function TableRows({
    id,
    namaPemesan,
    tglCheckIn,
    tglCheckOut,
    status, //baru, diterima, check_in, check_out
    hargaTotal,
    handleNextStatus
}){

    let statusElement;

    switch(status){
        case "baru":
            statusElement = (
            <p className="divide-x justify-between bg-yellow-100 font-semibold rounded flex text-yellow-700 px-3 py-1.5">
                Baru
                <button className="transition text-yellow-700 opacity-40 hover:opacity-100">
                    accept
                </button>
            </p>
            )
        break;

        case "diterima": 
        statusElement = (
            <p className="divide-x justify-between bg-green-100 font-semibold rounded flex text-green-700 px-3 py-1.5">
                Diterima
                <button className="transition text-green-700 opacity-40 hover:opacity-100">
                    Check In
                </button>
            </p>
        )
        break;

        case "check_in":
        statusElement = (
            <p className="divide-x justify-between bg-slate-100 font-semibold rounded flex text-slate-700 px-3 py-1.5">
                Check In
                <button className="transition text-slate-700 opacity-40 hover:opacity-100">
                    Check Out
                </button>
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
            <td className="px-2 py-1.5">action</td>
        </tr>
    )
}


export default TableRows;