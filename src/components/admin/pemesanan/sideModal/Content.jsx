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
import { formatDateIDN } from "@/utils/dateFormatIndonesia"


export default ({onClose,onChangePage, dataPemesanan}) => {
    

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
                <button onClick={()=>onChangePage(1)} className="p-2 rounded text-yellow-600 bg-yellow-50 hover:bg-yellow-100 active:bg-yellow-200">
                    <EditIcon />
                </button>
                <button onClick={()=>onChangePage(2)} className="p-2 rounded text-red-600 bg-red-50 hover:bg-red-100 active:bg-red-200">
                    <TrashIcon />
                </button>
            </div>
        </div>
        <div className="h-full w-5/6 mx-auto flex gap-3">
            <div className="basis-2/6">
                <Image className=" w-full mb-3" src={(IMAGE_SOURCE_URL+dataPemesanan.DetailPemesanan.TipeKamarPemesanan.foto)} height={200} width={200} alt={"gambar"}/>
                <div className="">
                    <h5 className="text-xl font-bold">{dataPemesanan.DetailPemesanan.TipeKamarPemesanan.namaTipeKamar}</h5>
                    <h5 className="font-medium">Rp. {dataPemesanan.DetailPemesanan.TipeKamarPemesanan.harga} / <span className="text-gray-500">malam</span> </h5>
                </div>
            </div>
            <section className="basis-4/6">
                <div className="w-full basis-4/6 flex justify-between self-start border-b">
                    <div className="text-slate-800 text-xl font-bold border-b-2 flex flex-col border-slate-500 " >
                        <span className="text-sm text-gray-500 text-right">Jumlah total</span> 
                        <span>Rp. {dataPemesanan.DetailPemesanan.hargaTotal}</span>
                    </div>
                    
                    <div className="justify-between pb-3">
                        <div className="flex flex-col" >
                            <span className="text-sm text-right text-gray-500" >Kamar dipilih </span> 
                            <span className="text-right text-lg font-semibold">4</span>
                        </div>
                        <div className="flex flex-col" >
                            <span className="text-sm text-gray-500" >Lama Menginap </span> 
                            <span className="text-right text-lg font-semibold">
                            {
                                intervalToDuration({
                                    start : new Date(),
                                    end : new Date(),
                                }).days
                            }
                            </span>
                        </div>
                    </div>
                </div>
                <div className="py-4">
                    <div className="border rounded p-3 font-semibold text-slate-800 border-slate-400 bg-slate-100">
                        Baru
                    </div>
                </div>
                <div className="mb-6">
                    <h3 className="texts-m font-semibold mb-2 border-t" >Deskripsi pemesanan</h3>
                    <div className="flex flex-col gap-2">
                        <div className="flex ">
                            <p className="basis-1/2 text-gray-500">Nomor Pemesanan</p>
                            <p className="basis-1/2 font-semibold">{dataPemesanan.nomorPemesanan}</p>
                        </div>
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
                            <p className="basis-1/2 font-semibold">{formatDateIDN(dataPemesanan.tglCheckIn)}</p>
                        </div>
                        <div className="flex ">
                            <p className="basis-1/2 text-gray-500">Tanggal Check Out</p>
                            <p className="basis-1/2 font-semibold">{formatDateIDN(dataPemesanan.tglCheckOut)}</p>
                        </div>
                        <div className="flex ">
                            <p className="basis-1/2 text-gray-500">Tanggal Pemesanan</p>
                            <p className="basis-1/2 font-semibold">{formatDateIDN(dataPemesanan.createdAt)}</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h3 className="texts-m font-semibold mb-2 border-t">Daftar Kamar</h3>
                    <ul className="flex flex-col list-inside list-disc">
                        {(()=>{
                            if(dataPemesanan.DetailPemesanan?.DaftarKamar?.length === 0){
                                return <></>
                            }
                            else return dataPemesanan.DetailPemesanan.DaftarKamar.map(kamar => (
                                <li key={kamar.id}>{kamar.nama}</li>
                            ))
                        })()}
                    </ul>
                </div>

            </section>
        </div>
        </>
    )
}