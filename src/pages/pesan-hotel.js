

//font
import { Adamina } from "@next/font/google"
const adamina = Adamina({subsets : ["latin"],weight : ["400"]})

//layout
import MainGuestLayout from "@/layouts/MainGuestLayout"

//component
import FormPemesanan from "@/components/guest/form/FormPemesanan"
import TimeLineVertical from "@/components/guest/timeLine/TimeLineVertical"
import ProfilPemesan from "@/components/guest/form/pemesananFormList/ProfilPemesan"
import KamarPemesanan from "@/components/guest/form/pemesananFormList/KamarPemesanan"
import { useEffect, useState } from "react"


//pemesanananya
const FORM_LIST_PEMESANAN = [
    {
        label : "Profil dan Tanggal Pemesanan",
        element : ProfilPemesan,
        complete : false
    },
    {
        label : "Kamar dan Tipe Kamar",
        element : KamarPemesanan,
        complete : false
    }
]



export default function PesanHotel(){

    const [formListPemesanan,setFormListPemesanan] = useState([]);

    useEffect(()=>{setFormListPemesanan(FORM_LIST_PEMESANAN)},[]);

    const setCompletePemesanan = (index) => {
        let data = formListPemesanan;
        data = formListPemesanan[index].complete = true;
        setFormListPemesanan(data);
    }

    if(formListPemesanan.length === 0) return <></>
    console.log(formListPemesanan)
    return(
    <>
        <section className='px-28 py-4 border-b'>
            <h1 className={`${adamina.className} text-3xl mb-3`}>Pesan Hotel</h1>
            <p className="text-gray-600">silakan melakukan pemesanan kamar disini, harap isikan bidang yang diperlukan</p>
        </section>
        <section className="px-28 py-4 flex flex-row-reverse gap-4" >
            <div className="basis-1/4">
                <TimeLineVertical pemesananList={formListPemesanan.map(dat => {return {label: dat.label, complete: dat.complete}})} />
            </div>
            <div className="basis-3/4 ">
                <FormPemesanan setComplete={setCompletePemesanan} pemesananList={formListPemesanan} />
            </div>
        </section>
    </>
    )
}



//apply layout
PesanHotel.getLayout = function getLayout(page) {
    return (
      <MainGuestLayout >
        {page}
      </MainGuestLayout>
    )
}