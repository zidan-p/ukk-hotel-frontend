

//font
import { Adamina } from "@next/font/google"
const adamina = Adamina({subsets : ["latin"],weight : ["400"]})

//layout
import MainGuestLayout from "@/layouts/MainGuestLayout"

//component
import FormPemesanan from "@/components/guest/form/FormPemesanan"
import TimeLineVertical from "@/components/guest/timeLine/TimeLineVertical"
import { useEffect, useRef, useState } from "react"




export default function PesanHotel(){

    const [formListPemesanan,setFormListPemesanan] = useState([]);
    const [formListIteration,setFormLIteration] = useState(0);
    const formPesan = useRef(null)

    useEffect(()=>{
        setFormListPemesanan(formPesan.current.getLabel());
        setFormLIteration(formPesan.current.getIteration());
    },[formPesan])

    //cara kasar supaya mendapatkan nilai ref untuk form
    useEffect(()=>{
        setTimeout(()=>{
            setFormListPemesanan(formPesan.current.getLabel());
            setFormLIteration(formPesan.current.getIteration());
        },100)
    },[])

    const handleUpdateComplete = () => {
        setFormListPemesanan(formPesan.current.getLabel());
    }

    const changeIterationPage = index => {
        formPesan.current.setIteration(index)
    }

    const changeIteration = index => {
        setFormLIteration(index);
    }


    return(
    <>
        <section className='px-28 py-4 border-b'>
            <h1 className={`${adamina.className} text-3xl mb-3`}>Pesan Hotel</h1>
            <p className="text-gray-600">silakan melakukan pemesanan kamar disini, harap isikan bidang yang diperlukan</p>
        </section>
        <section className="px-28 py-4 flex flex-row-reverse transition gap-4" >
            <div className="basis-1/4">
                <TimeLineVertical setActive={changeIterationPage} activeLabel={formListIteration} pemesananList={formListPemesanan.map(dat => {return {label: dat.label, complete: dat.complete}})} />
            </div>
            <div className="basis-3/4 ">
                <FormPemesanan changeIteration={changeIteration} onComplete={handleUpdateComplete} ref={formPesan} pemesananList={formListPemesanan} />
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




/**
 * NOTE
 * 
 * saya bermasalah bila mendefinisikan semua komponen langsung pda halaman ini.
 * masalahnya terdapat pada render untuk child component, yaitu timeline.
 * timeline untuk page ini tidak mau terender walau satate di page ini terupdate.
 * props yg dikirim ke child merupakan state page ini
 * setelah dicari-cari ternyata hal itu karena props yang dikirm masih berupa object
 * dengan instansi yg sama, hal ini membuat react tidak merender komponen ini.
 * 
 * 
 * setelah melakukan pikir ulang, saya akhirnya melakukan revisi untuk page ini.
 * untuk teknisnya panjang, sehingga tidak bisa saya sebutkan dalam side note ini.
 * 
 */