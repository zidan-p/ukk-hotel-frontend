
import Image from "next/image"
import { BACKEND_URL } from "@/utils/const"
import { formatMoneyIDN } from "@/utils/formatNumber"

export default ({dataTipeKamar, onClickElement}) => {
    return(
        <div onClick={()=>onClickElement(dataTipeKamar.id)} className="w-96 border shadow hover:shadow-none transition hover:bg-gray-50 hover:border-white border-gray-200 rounded-sm h-full p-3 gap-3 cursor-pointer">
            <div className="flex justify-between mb-4">
                <h1 className="text-lg font-semibold">{dataTipeKamar.namaTipeKamar}</h1>
                <div className="rounded p-2 hover:bg-gray-300">
                    <Image className="" src={"/icon/more-vertical.svg"} width={15} height={10} />
                </div>
            </div>
            <Image className="mb-6 rounded" width={600} height={600} src={BACKEND_URL + `/file/image/`+dataTipeKamar.foto} alt={`image-hotel`} />
            <h3 className="font-semibold text-yellow-500">Rp. {formatMoneyIDN(dataTipeKamar.harga)}</h3>
            <div className="max-w-full">
                <p className="break-words text-sm font-medium text-gray-600">{dataTipeKamar.deskripsi}</p>
            </div>
        </div>
    )
}