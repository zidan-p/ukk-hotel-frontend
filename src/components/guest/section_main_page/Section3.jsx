import Link from "next/link"
import { useState,useEffect } from "react"


import tipeKamar from "@/service/tipeKamar"
import { BACKEND_URL } from "@/utils/const"


export default () => {
    const [tipeKamarList, setTipeKamarList] = useState([]);

    useEffect(()=>{
        tipeKamar.getAllTipeKamar()
        .then((val)=>{
            console.log(val)
            setTipeKamarList(val.result.getTipeKamarList.data)
        })
        .catch((err) => console.log(err))
    },[])

    return (
        <section className="min-h-[90px] px-28 py-7">
            <h5 className='text-slate-500 text-center font-semibold'>Layanan</h5>
            <h3 className='font-semibold text-center text-lg mb-6'>Beragam jenis kamar kami sediakan sesuai dengan kebutuhan anda</h3>
            <div className="flex">
                <div className="basis-1/2">
                    <p className="font-light mb-4 text-center">
                        dengan layanan booking online, anda dapat memesan sekarang juga
                    </p>
                    <div className="flex items-center gap-3 justify-center">
                        <Link href={"/"} className="transition rounded-sm bg-[rgb(250,204,21,.2)] border border-yellow-600 px-4 py-1 hover:bg-yellow-500">Pesan sekarang</Link>
                        <Link href={"/"} className="hover:underline">Lihat selengkapnya</Link>
                    </div>
                </div>
                <div className="basis-1/2 flex flex-col gap-5">
                    {/* <Link 
                        href={"/"} className="w-full block rounded text-white bg-center" 
                        style={{
                            backgroundImage :`url("/images/gambar-test.jpg")`
                        }}
                    >
                        <div className="bg-[rgba(11,8,20,0.5)] py-5 px-5 rounded hover:bg-[rgba(11,8,20,0.8)]">
                            Kamar test satu
                        </div>
                    </Link> */}
                    {tipeKamarList.map((el,i) => {
                        return(
                            <Link 
                                key={i}
                                href={"/"} className="w-full block rounded text-white bg-center" 
                                style={{
                                    // backgroundImage :`url("localhost:3005/file/image/${el.foto}")`
                                    backgroundImage :`url("${BACKEND_URL}/file/image/${el.foto}")`
                                }}
                                onError={
                                    ()=>{this.src = "/images/gambar-default.jpg"}
                                }
                            >
                                <div className="bg-[rgba(11,8,20,0.5)] py-5 px-5 rounded hover:bg-[rgba(11,8,20,0.8)]">
                                    {el.namaTipeKamar}
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}