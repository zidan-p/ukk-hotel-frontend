import { formatISO, intervalToDuration } from "date-fns"
import { IMAGE_SOURCE_URL } from "@/utils/const"
import { isObjectEmpty } from "@/utils/object"
import { useState } from "react"



//component
import CheckCircleIcon from "@/components/icons/CheckCircleIcon"
import CheckIcon from "@/components/icons/CheckIcon"
import ChevronLeftIcon from "@/components/icons/ChevronLeftIcon"
import EditIcon from "@/components/icons/EditIcon"
import TrashIcon from "@/components/icons/TrashIcon"
import Image from "next/image"


export default ({onClose, dataPemesanan}) => {
    

    if(isObjectEmpty(dataPemesanan)) return (
        <div className=""># Kosong</div>
    )
    
    return (
        <>
        <div className="flex justify-between items-center pb-2 mb-2 border-b ">
            <button onClick={()=>onClose()} className="flex gap-2 items-center rounded hover:bg-slate-200 active:bg-slate-300 p-1 ">
                <ChevronLeftIcon/>
                <h2 className="px-2 text-2xl font-bold">
                {dataPemesanan.nomorPemesanan}
                </h2>
            </button>
            <div className="flex gap-2 px-3">
                <button className="p-2 rounded text-yellow-600 bg-yellow-50 hover:bg-yellow-100 active:bg-yellow-200">
                    <EditIcon />
                </button>
                <button className="p-2 rounded text-red-600 bg-red-50 hover:bg-red-100 active:bg-red-200">
                    <TrashIcon />
                </button>
            </div>
        </div>
        {/* <div className="w-5/6 mx-auto pb-5 border-b mb-5">
            <h5 className="font-bold">Action</h5>
            <button className="border w-full text-left flex justify-between transition hover:bg-green-100 bg-green-50 border-l-4 rounded border-l-green-500 px-3 py-2">
                <p className="font-semibold">
                    Ubah Status
                </p>
                <CheckIcon className={"text-green-800"} />
            </button>
                <div className="">
                    <p className="text-sm">
                        mengubah status pemesanan menjadi status selanjutnya. 
                    </p>
                    <ul className="text-sm list-disc list-inside">
                        <li>baru menjadi diterima</li>
                        <li>diterima menjadi check in</li>
                        <li>check in menjadi check out</li>
                    </ul>
                </div>
        </div> */}
        <div className="h-full w-5/6 mx-auto flex gap-3">
            <div className="basis-2/6">
                <Image className=" w-full" src={"/images/gambar-default.jpg"} height={200} width={200} alt={"gambar"}/>
            </div>
            <section className="basis-4/6">
                <div className="w-full basis-4/6 flex justify-between self-start border-b">
                    <div className="">
                        <h5 className="text-xl font-bold">{"kamar gaul"}</h5>
                        <h5 className="font-medium">Rp. {1000} / <span className="text-gray-500">malam</span> </h5>
                    </div>
                    <div className="justify-between border-b-2 border-slate-500 pb-3">
                        <h5 className="text-slate-800 text-xl font-bold" ><span className="text-sm text-gray-500">Jumlah total</span> Rp. {120000}</h5>
                        <h5 className="text-right text-lg font-semibold" ><span className="text-sm text-gray-500" >Kamar dipilih </span> {4} </h5>
                        <h5 className="text-right text-lg font-semibold" >
                            <span className="text-sm text-gray-500" >Lama Menginap </span> 
                            {
                                intervalToDuration({
                                    start : new Date(),
                                    end : new Date(),
                                }).days
                            }
                            <span className="text-sm text-gray-500" > hari </span> 
                        </h5>
                    </div>
                </div>
                <div className="py-4">
                    <div className="border rounded p-3 font-semibold text-slate-800 border-slate-400 bg-slate-100">
                        Baru
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex ">
                        <p className="basis-1/2 text-gray-500">Nama Pemesan</p>
                        <p className="basis-1/2 font-semibold">{dataPemesanan.namaPemesan}</p>
                    </div>
                    <div className="flex ">
                        <p className="basis-1/2 text-gray-500">Email Pemesan</p>
                        <p className="basis-1/2 font-semibold">{dataPemesanan.emailPemesan}</p>
                    </div>
                    <div className="flex ">
                        <p className="basis-1/2 text-gray-500">Nama tamu</p>
                        <p className="basis-1/2 font-semibold">{dataPemesanan.namaTamu}</p>
                    </div>
                    <div className="flex ">
                        <p className="basis-1/2 text-gray-500">Tanggal Check In</p>
                        <p className="basis-1/2 font-semibold">{formatISO(new Date(dataPemesanan.tglCheckIn), {representation: "date"})}</p>
                    </div>
                    <div className="flex ">
                        <p className="basis-1/2 text-gray-500">Tanggal Check Out</p>
                        <p className="basis-1/2 font-semibold">{formatISO(new Date(dataPemesanan.tglCheckOut), {representation: "date"})}</p>
                    </div>
                    <div className="flex ">
                        <p className="basis-1/2 text-gray-500">Tanggal Pemesanan</p>
                        <p className="basis-1/2 font-semibold">{formatISO(new Date(dataPemesanan.createdAt), {representation: "date"})}</p>
                    </div>
                </div>

            </section>
        </div>
        </>
    )
}