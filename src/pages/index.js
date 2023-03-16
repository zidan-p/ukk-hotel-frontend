import Head from 'next/head'
import Image from 'next/image'
import { useState,useEffect } from 'react'
import Marquee from "react-marquee-slider";

// component
import HotelIlustration from '@/components/guest/hero/ilustration/HotelIlustration'
import KamarImage from '@/components/guest/section_main_page/KamarImage'
import PersonComment from '@/components/guest/section_main_page/PersonComment'
import TipeKamarListCard from '@/components/guest/tipeKamarList/TipeKamarListCard';

//feature
import tipeKamar from '@/service/tipeKamar'
import Link from 'next/link'

// layout
import MainGuestLayout from '@/layouts/MainGuestLayout'

//font
import adamina from '@/font/Adamina';
import { isObjectEmpty } from '@/utils/object';
import { toast } from 'react-toastify';

export default function Home() {
  const [tipeKamarList, setTipeKamarList] = useState([]);
  const [popularTipeKamar, setPopularTipeKamae] = useState({});

  const getPopularTipeKamar = async()=>{
    try {
      if(isObjectEmpty(tipeKamarList[0])) return
      let data = await tipeKamar.getTipeKamarFull(tipeKamarList[0].id);
      console.log(data);
      setPopularTipeKamae(data.result.getTipeKamarOne.data);
    } catch (error) {
      console.log(error);
      toast.error("ada masalah");
    }
  }

  const getTipeKamar = async () => {
    try {
      let data = await tipeKamar.getAllTipeKamar();
      setTipeKamarList(data.result.getTipeKamarList.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{getTipeKamar()},[]);
  useEffect(() =>{getPopularTipeKamar()}, [tipeKamarList])

  if(tipeKamarList.length === 0)return <></>
  return (
    <>
      <Head>
        <title>Wikusama Hotel</title>
      </Head>
      <main>

        <section 
          style={{
              backgroundImage :`url("/images/vektor_bintang.png")`
          }}
          className="pt-7 bg-slate-800 flex px-28 text-white">
            <div className="basis-1/2 self-center">
                <div className={adamina.className}>
                    <h1 className="text-5xl mb-1 text-yellow-400">
                        Nikmati 1001 layanan dari kami
                    </h1>
                </div>
                <p className="mb-5">Nikmati berragam layanan kami dengan berbagai pilihan selama yang anda mau</p>
                <Link href={"/pesan-hotel"} className="transition rounded-sm bg-[rgb(250,204,21,.2)] border border-yellow-600 px-6 py-2 hover:bg-yellow-500">
                    Pesan Sekarang
                </Link>
            </div>
            <div className="basis-1/2 self-end">
                <HotelIlustration className={"mx-auto pt-32"} />
            </div>
        </section>

        <section className='min-h-[100px] px-28 py-10'>
          <h2 className={`${adamina.className} text-3xl mb-8`}>Beragam jenis kamar tersedia di Hotel kami</h2>
          <div className="flex gap-4 justify-center">
            {
            tipeKamarList.slice(0,3).map((tipeKamar, index) => (
              <TipeKamarListCard key={index} tipeKamar={tipeKamar} />
            ))
            }
          </div>
        </section>

        {/* <section className='min-h[100px] px-28 py-10'>
            <h5 className='text-slate-500 text-center font-semibold'>Mengapa ?</h5>
            <h3 className='font-semibold text-center text-lg mb-6'>Layanan dari kami untuk kepuasan anda</h3>
            <div className="flex gap-6 justify-center">
                <div className="basis-1/2 flex flex-col gap-5">
                    <div className="border p-4 rounded hover:bg-slate-200">
                        <p className="font-semibold text-sm">Daftar pilihan yang beragam</p>
                    </div>
                    <div className="border p-4 rounded hover:bg-slate-200">
                        <p className="font-semibold text-sm">Lakukan pemesanan dengan mudah</p>
                    </div>
                    <div className="border p-4 rounded hover:bg-slate-200">
                        <p className="font-semibold text-sm">Lakukan update kapan saja</p>
                    </div>
                </div>
                <div className="basis-1/2 px-24">
                    <Image className="max-w-full" src={"/images/test-image-illustration.png"} width={1000} height={400} />
                </div>
            </div>
        </section> */}

        <section className='min-h-[100px] px-28 py-10'>
          <h5 className='font-semibold text-lg mb-6'>Kamar Populer dari kami</h5>
          <div className="flex justify-center gap-3">
            {!isObjectEmpty(tipeKamarList[0]) ? 
            <TipeKamarListCard tipeKamar={tipeKamarList[0]} />  
            : ""
            }
            {!isObjectEmpty(popularTipeKamar) ?
            (
              <div className="">
                <h1 className='text-3xl font-bold'>
                  {popularTipeKamar.namaTipeKamar}
                </h1>
                <p className='font-semibold text-green-700'>{popularTipeKamar.harga}</p>
                <p className='text-gray-500'>{popularTipeKamar.deskripsi}</p>
              </div>
            )
            :""
            }
          
          </div>
        </section>
          

      </main>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <MainGuestLayout >
      {page}
    </MainGuestLayout>
  )
}
