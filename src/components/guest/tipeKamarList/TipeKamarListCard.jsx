import { IMAGE_SOURCE_URL } from "@/utils/const";
import Image from "next/image";





function TipeKamarListCard ({tipeKamar}){

    return (
        <div className="border p-3 hover:bg-gray-50">
            <Image className="mb-3" src={IMAGE_SOURCE_URL+tipeKamar.foto} width={300} height={300} />
            <h5 className="text-center font-semibold text-gray-700">{tipeKamar.namaTipeKamar}</h5>
        </div>
    )
}

export default TipeKamarListCard;