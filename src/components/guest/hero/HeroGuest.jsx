import HotelIlustration from "./ilustration/HotelIlustration"

import { Adamina } from "@next/font/google"

const adamina = Adamina({
    subsets : ["latin"],
    weight : ["400"]
})


export default () => {

    return (
        <section 
            style={{
                backgroundImage :`url("/images/vektor_bintang.png")`
            }}
            className="h-screen bg-slate-800 flex px-28 text-white">
            <div className="basis-1/2 self-center">
                <div className={adamina.className}>
                    <h1 className="text-5xl mb-1 text-yellow-400">
                        Selalu datang dengan nyaman
                    </h1>
                </div>
                <p className="mb-2">Nikmati berragam layanan kami dengan berbagai pilihan selama yang anda mau</p>
                <button className="transition rounded-sm bg-[rgb(250,204,21,.2)] border border-yellow-600 px-6 py-2 hover:bg-yellow-500">
                    Pesan Sekarang
                </button>
            </div>
            <div className="basis-1/2 self-end">
                <HotelIlustration />
            </div>
        </section>
    )
}