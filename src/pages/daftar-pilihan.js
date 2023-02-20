import { useState,useEffect } from 'react'
import {Head, Main} from 'next/document'

//feature
import tipeKamar from '@/service/tipeKamar'
import Link from 'next/link'

//component
import TipeKamarList from '@/components/guest/tipeKamarList/TipeKamarList'

// layout
import MainGuestLayout from '@/layouts/MainGuestLayout'

//font
import { Adamina } from "@next/font/google"
const adamina = Adamina({subsets : ["latin"],weight : ["400"]})

export default function DaftarPilihan(){
    const [tipeKamarList, setTipeKamarList] = useState([])

    async function getAllData() {
        try {
            let data = await tipeKamar.getAllTipeKamar();
            setTipeKamarList(data.result.getTipeKamarList.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{getAllData()},[])

    return (
        <div className='h-full flex flex-col'>
        <section className='px-28 py-4'>
            <h1 className={`${adamina.className} text-3xl mb-4`}>Daftar Tipe Kamar</h1>
        </section>
        <section className='px-28'>
            <div className="overflow-auto">
                <div className='flex gap-3 overflow-auto'>
                    {tipeKamarList.map((tipeKamar,i) => {return (
                        <div className="shrink-0 max-h-full">
                            <TipeKamarList dataTipeKamar={tipeKamar}/>
                        </div>
                    )})}
                </div>
            </div>
        </section>
        </div>
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

  