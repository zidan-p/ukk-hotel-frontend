


import { BACKEND_URL } from "@/utils/const"
import Image from "next/image"


export default ({tipeKamarData}) => {

    return(
        <div className="bg-white p-2 rounded">
            <div className="flex justify-between">
                <h4 className="text-gray-500 font-semibold">Nama</h4>
                <h4 className="font-semibold">{tipeKamarData.namaTipeKamar}</h4>
            </div>
            <div className="flex justify-between">
                <h4 className="text-gray-500 font-semibold">Banyak Kamar</h4>
                <h4 className="font-semibold">{tipeKamarData.Kamars.length}</h4>
            </div>
            <div className="flex justify-between">
                <h4 className="text-green-800 font-semibold">Harga</h4>
                <h4 className="text-yellow-600">{tipeKamarData.harga}</h4>
            </div>
        </div>
    )
}