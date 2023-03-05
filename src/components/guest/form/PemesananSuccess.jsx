

//component
import PrinterIcon from "@/components/icons/PrinterIcon"
import Image from "next/image"
import Tippy from '@tippyjs/react';

//for tippy
import 'tippy.js/dist/tippy.css'; // optional
import { Roboto } from '@next/font/google'
const roboto = Roboto({
    subsets: ['latin'],
    variable: "--font-roboto",
    weight: ["100", "300", "400", "500", "700", "900"]
})

export default ({dataPemesananOne}) => {

    async function copyNoPemesanan(){
        try {
            navigator.clipboard.writeText(dataPemesananOne?.data.nomorPemesanan);
            console.log("teks telah disalin")
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <div className="bg-white shadow-sm border rounded p-3">
            <div className="flex px-10 w-full">
                <div className="basis-1/2 self-center">
                    <h1 className="text-2xl font-semibold">Pemesanan anda telah berhassil diproses</h1>
                    <p>data yang anda kirimkan sudah kami terima, silahkan tunggu pesanan anda diterima.</p>
                    <p className="text-sm text-gray-500">berikut adalah nomer pemesanan anda, dan anda bisa mencetaknya</p>
                    <div onClick={copyNoPemesanan} className="flex gap-2 mt-2">
                        <Tippy 
                        className=""
                        interactive={true}
                        animation="fade"
                        trigger="click"
                        duration={[250,0]}
                        arrow={true}
                        theme={"translucent"}
                        content={(
                            <div className={`box ${roboto.variable} px-3 py-1 rounded text-white font-sans`} >
                              tersalin
                            </div>
                        )}
                        >
                            <button className="transition-all text-white bg-black rounded hover:bg-gray-800 px-5 py-2">
                                {dataPemesananOne?.data.nomorPemesanan || "#######"}
                            </button>
                        </Tippy>
                        <button className="flex px-5 py-2 gap-2 border border-black rounded hover:bg-slate-800 hover:text-white transition">
                            <PrinterIcon />
                            Cetak
                        </button>
                    </div>
                </div>
                <div className="basis-1/2">
                    <Image className="mx-auto" src={"/images/illustrations/Success.png"} width={300} height={200} alt={"illustration success"} />
                </div>
            </div>
        </div>
    )
}