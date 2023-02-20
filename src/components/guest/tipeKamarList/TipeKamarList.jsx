
import Image from "next/image"
import { BACKEND_URL } from "@/utils/const"

export default ({dataTipeKamar}) => {
    return(
        // <div className="w-96 border border-gray-200 hover:border-gray-400 rounded mb-4 p-3 flex gap-3 cursor-pointer flex-col">
        //     <Image className="" width={600} height={600} src={BACKEND_URL + `/file/image/`+dataTipeKamar.foto} alt={`image-hotel`} />
        //     <div className="max-w-fit">
        //         <h1 className="text-lg font-semibold">{dataTipeKamar.namaTipeKamar}</h1>
        //         <p className="break-words">{dataTipeKamar.deskripsi}</p>
        //         <h3>{dataTipeKamar.harga}</h3>
        //     </div>
        // </div>
        <div className="relative border border-gray-200 hover:border-gray-400 rounded mb-4 p-3 cursor-pointer">
            {/* Image dari next js masi belum bisa supaya rasionya tetap tapi salah satu yang berubah */}
            {/* <Image className="h-[300px] " width={600} height={300} src={BACKEND_URL + `/file/image/`+dataTipeKamar.foto} alt={`image-hotel`} /> */}
            <img className="h-[300px] " src={BACKEND_URL + `/file/image/`+dataTipeKamar.foto} alt={`image-hotel`} />
            <div className="absolute top-0">
                <h1 className="text-lg font-semibold">{dataTipeKamar.namaTipeKamar}</h1>
                <p className="break-words">{dataTipeKamar.deskripsi}</p>
                <h3>{dataTipeKamar.harga}</h3>
            </div>
        </div>
    )
}