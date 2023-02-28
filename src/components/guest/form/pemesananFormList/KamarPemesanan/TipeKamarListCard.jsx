
import Image from "next/image"





export default ({name, active=false, image, harga}) => {


    return (
        <div className={`${active? "bg-gray-200 border-l-4 border-l-gray-800" : "bg-white hover:bg-gray-200"} border p-2  flex rounded transition cursor-pointer`}>
            <div className="basis-1/3">
                <Image src={image} height={600} width={600} alt="gambar tipe kamar" />
            </div>
            <div className="flex flex-col ml-2">
                <p className="font-semibold text-gray-700 self-end">{name}</p>
                <p className="text-yellow-600" >{harga}</p>
            </div>
        </div>
    )
}