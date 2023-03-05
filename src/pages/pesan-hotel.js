

//font
import { Adamina } from "@next/font/google"
const adamina = Adamina({subsets : ["latin"],weight : ["400"]})

//layout
import MainGuestLayout from "@/layouts/MainGuestLayout"

//component
import FormPemesanan from "@/components/guest/form/FormPemesanan"
import TimeLineVertical from "@/components/guest/timeLine/TimeLineVertical"
import { useEffect, useRef, useState } from "react"

//service
import pemesanan from "@/service/pemesanan"
import PemesananSuccess from "@/components/guest/form/PemesananSuccess"


export default function PesanHotel(){

    const [formListPemesanan,setFormListPemesanan] = useState([]);
    const [formListIteration,setFormLIteration] = useState(0);


    const [isOrdered, setIsOrdered] = useState(false);
    const [loadingOrder, setLoadingOrder] = useState(false);
    const [orderedData, setOrderedData] = useState({});

    const formPesan = useRef(null)

    useEffect(()=>{
        setFormListPemesanan(formPesan.current?.getLabel());
        setFormLIteration(formPesan.current?.getIteration());
    },[formPesan])

    //cara kasar supaya mendapatkan nilai ref untuk form
    useEffect(()=>{
        setTimeout(()=>{
            setFormListPemesanan(formPesan.current?.getLabel());
            setFormLIteration(formPesan.current?.getIteration());
        },100)
    },[])

    const handleUpdateComplete = () => {
        setFormListPemesanan(formPesan.current?.getLabel());
    }

    const changeIterationPage = index => {
        formPesan.current?.setIteration(index)
    }

    const changeIteration = index => {
        setFormLIteration(index);
    }

    const sendPemesananData = async(dataSend) => {
        try {
            setIsOrdered(true);
            setLoadingOrder(true);
            let data = await pemesanan.createPemesanan(dataSend);
            setOrderedData(data.result);
        } catch (error) {
            console.error(error);
        }finally{
            setLoadingOrder(false);
        }
    }

    if(isOrdered){
        if(loadingOrder){
            return (
                <div className="py-24 px-24">
                    <div className="animate-pulse bg-slate-200 shadow-sm border rounded p-3 flex p-10">
                        <div className="basis-1/2 self-center">
                            <h1 className="text-3xl font-semibold">Loading...</h1>
                        </div>
                        <div className="basis-1/2">
                            <div className="w-40 h-40 bg-slate-300 mx-auto"></div>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div className="py-24 px-24">
                <PemesananSuccess dataPemesananOne={orderedData.pemesananOne} />
            </div>
        )
    }

    return(
    <>
        <section className='px-28 py-4 border-b'>
            <h1 className={`${adamina.className} text-3xl mb-2`}>Pesan Hotel</h1>
            <p className="text-gray-600">silakan melakukan pemesanan kamar disini, harap isikan bidang yang diperlukan</p>
        </section>
        <section className="px-28 py-4 flex flex-row-reverse transition gap-4" >
            <div className="basis-1/4">
                <TimeLineVertical setActive={changeIterationPage} activeLabel={formListIteration} pemesananList={formListPemesanan.map(dat => {return {label: dat.label, complete: dat.complete}})} />
            </div>
            <div className="basis-3/4 ">
                <FormPemesanan sendPemesananData={sendPemesananData} changeIteration={changeIteration} onComplete={handleUpdateComplete} ref={formPesan} pemesananList={formListPemesanan} />
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