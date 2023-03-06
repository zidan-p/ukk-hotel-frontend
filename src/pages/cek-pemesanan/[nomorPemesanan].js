// module
const { useRouter } = require("next/router");
import { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css'; // optional
import { IMAGE_SOURCE_URL } from "@/utils/const";
import { intervalToDuration } from "date-fns";

// layout
import MainGuestLayout from "@/layouts/MainGuestLayout"
import pemesanan from "@/service/pemesanan";

//component
import EditIcon from "@/components/icons/EditIcon";
import PrinterIcon from "@/components/icons/PrinterIcon";
import Image from "next/image";

//font
import { Roboto } from '@next/font/google'
import { isObjectEmpty } from "@/utils/object";
const roboto = Roboto({
    subsets: ['latin'],
    variable: "--font-roboto",
    weight: ["100", "300", "400", "500", "700", "900"]
})


function DetailPemesanan({detailData}){
    const router = useRouter();
    const nomorPemesanan = router.query.nomorPemesanan;

    useEffect(()=>{
        if(!router.isReady) return;
        console.log(nomorPemesanan)
    },[router.isReady])

    

    if(isObjectEmpty(detailData))return <></>

    // return (
    //     <div className="font-semibold">
    //         <div className="whitespace-pre border p-2 bg-gray-50">
    //             {JSON.stringify(detailData,null, 4)}
    //         </div>
    //     </div>
    // )
    return (
        <>
        <section className="px-44 py-24 bg-slate-100">
            <div className="shadow px-5 border rounded bg-white">
                <div className="flex py-4 justify-between items-center">
                    <h3 className="font-semibold text-xl">{detailData.nomorPemesanan}</h3>
                    {detailData.UserId === null 
                    ?(
                        <h3 className="bg-yellow-200 text-yellow-800 px-7 py-2 rounded-sm font-semibold">
                            Menunggu diterima
                        </h3> 
                    ):(
                        <h3>Diterima</h3>
                    )}
                </div>
                <div className="flex border-y divide-x flex-row-reverse text-gray-600 text-sm mb-2">
                    <Tippy 
                    content={(
                        <h1 className={`font-sans ${roboto.variable}`}>Edit Pemesanan</h1>
                    )}
                    >
                        <button className="  hover:bg-yellow-200 hover:text-yellow-700 items-center px-4 py-2 flex gap-2 ">
                            Edit
                            <EditIcon className={"w-4"} />
                        </button>
                    </Tippy>
                    <Tippy 
                    content={(
                        <h1 className={`font-sans ${roboto.variable}`}>Cetak Pemesanan</h1>
                    )}
                    >
                        <button className=" px-4 py-2 flex gap-2 hover:bg-slate-200  items-center">
                            Cetak
                            <PrinterIcon className={"w-4"} />
                        </button>
                    </Tippy>
                </div>
                <section className="border-b py-2 my-2 flex">
                <Image className="basis-2/6" src={IMAGE_SOURCE_URL + detailData.DetailPemesanan.TipeKamarPemesanan.foto} height={200} width={200} alt={"gambar"}/>
                <div className="basis-4/6 w-full flex justify-between self-start border-b">
                    <div className="">
                        <h5 className="text-xl font-bold">{detailData.DetailPemesanan.TipeKamarPemesanan.namaTipeKamar}</h5>
                        <h5 className="font-medium">Rp. {detailData.DetailPemesanan.TipeKamarPemesanan.harga} / <span className="text-gray-500">malam</span> </h5>
                    </div>
                    <div className="justify-between px-6 border-b-2 border-slate-500 pb-3">
                        <h5 className="text-slate-800 text-xl font-bold" ><span className="text-sm text-gray-500">Jumlah total</span> Rp. {detailData.DetailPemesanan.hargaTotal}</h5>
                        <h5 className="text-right text-lg font-semibold" ><span className="text-sm text-gray-500" >Kamar dipilih </span> {detailData.DetailPemesanan.DaftarKamar.length} </h5>
                        <h5 className="text-right text-lg font-semibold" >
                            <span className="text-sm text-gray-500" >Lama Menginap </span> 
                            {
                                intervalToDuration({
                                    start : new Date(detailData.tglCheckIn),
                                    end : new Date(detailData.tglCheckOut),
                                }).days
                            }
                            <span className="text-sm text-gray-500" > hari </span> 
                        </h5>
                    </div>
                </div>
            </section>
            <section className="flex flex-row-reverse pb-7" >
                <div className="basis-4/6 flex flex-col gap-2">
                    <div className="flex justify-between">
                        <p className="text-gray-500 font-semibold">Nama Pemesan</p>
                        <p>{detailData.namaPemesan}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-500 font-semibold">Email Pemesan</p>
                        <p>{detailData.emailPemesan}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-500 font-semibold">Nama tamu</p>
                        <p>{detailData.namaTamu}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-500 font-semibold">Tanggal Check In</p>
                        <p>{detailData.tglCheckIn}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-500 font-semibold">Tanggal Check Out</p>
                        <p>{detailData.tglCheckOut}</p>
                    </div>
                </div>
            </section>
            </div>
        </section>
        </>
    )
}



export default DetailPemesanan

export async function getServerSideProps(context) {
    try {
        const nomorPemesanan = context.params.nomorPemesanan;
        let result = await pemesanan.getPemesananByNomorPemesanan(nomorPemesanan);
        let detailData = result.result.getPemesananOne.data
        return {
          props: {detailData : detailData}
        }
    } catch (error) {
        console.log("mengapa not found ???")
        console.log(error)
        return {
            notFound : true
        }
    }
  }

//apply layout
DetailPemesanan.getLayout = function getLayout(page) {
    return (
      <MainGuestLayout >
        {page}
      </MainGuestLayout>
    )
}
