import { IMAGE_SOURCE_URL } from "@/utils/const";
import { isObjectEmpty } from "@/utils/object";
import Image from "next/image";





function TipeKamarListCard ({tipeKamar}){

    if(isObjectEmpty(tipeKamar)) return <></>
    return (
        <div className="border p-3 hover:bg-gray-50 max-w-xs">
            <Image className="mb-3" src={IMAGE_SOURCE_URL+tipeKamar.foto} width={300} height={300} />
            <h5 className="text-center font-semibold text-gray-700">{tipeKamar.namaTipeKamar}</h5>
            <p className="text-gray-600 text-sm">{tipeKamar.deskripsi}</p>
        </div>
    )
}

export default TipeKamarListCard;