
import Link from "next/link"
import { BACKEND_URL } from "@/utils/const"

export default ({fotoName, tipeKamar}) => {
    return (
        <Link
            href={"/"} className="w-full block rounded text-white bg-center" 
            style={{
                backgroundImage :`url("${BACKEND_URL}/file/image/${fotoName}")`
            }}
            // {/*ini perlu dipertanyakan apakah bisa digunakna untuk handle error */}
            onError={
                ()=>{this.src = "/images/gambar-default.jpg"}
            }
        >
            <div className="bg-[rgba(11,8,20,0.5)] py-5 px-5 rounded hover:bg-[rgba(11,8,20,0.8)]">
                {tipeKamar}
            </div>
        </Link>
    )
}