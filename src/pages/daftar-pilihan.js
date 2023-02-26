import { useState,useEffect,useRef } from 'react'
import {Head, Main} from 'next/document'

//feature
import tipeKamar from '@/service/tipeKamar'
import Link from 'next/link'

//component
import TipeKamarList from '@/components/guest/tipeKamarList/TipeKamarList'
import TipeKamarModalUp from '@/components/guest/modal/TipeKamarModalUp'

// layout
import MainGuestLayout from '@/layouts/MainGuestLayout'

//font
import { Adamina } from "@next/font/google"
const adamina = Adamina({subsets : ["latin"],weight : ["400"]})

export default function DaftarPilihan(){
    const [tipeKamarList, setTipeKamarList] = useState([])
    const modal = useRef(null);

    async function getAllData() {
        try {
            let data = await tipeKamar.getAllTipeKamar();
            setTipeKamarList(data.result.getTipeKamarList.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{getAllData()},[])

    const handleOpenModal = (idTipeKamar) => {
        console.log(idTipeKamar);
        modal.current.changeIdTipeKamarModal(idTipeKamar)
        modal.current.openModal();
    }

    return (
        <>
        <section className='px-28 py-4'>
            <h1 className={`${adamina.className} text-3xl mb-4`}>Daftar Tipe Kamar</h1>
        </section>
        <section className='px-28 mb-10'>
            <div className="">
                <div className='justify-center flex flex-wrap items-stretch gap-3'>
                    {tipeKamarList.map((tipeKamar,i) => {return (
                        <div key={i} className="shrink-0 max-h-full">
                            <TipeKamarList onClickElement={handleOpenModal} dataTipeKamar={tipeKamar}/>
                        </div>
                    )})}
                </div>
            </div>
        </section>
        <TipeKamarModalUp ref={modal} />
        </>
    )
}

//apply layout
DaftarPilihan.getLayout = function getLayout(page) {
    return (
      <MainGuestLayout >
        {page}
      </MainGuestLayout>
    )
}

  