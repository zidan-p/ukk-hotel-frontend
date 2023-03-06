import { useState } from "react"
import { useRouter } from "next/router"

// layout
import MainGuestLayout from "@/layouts/MainGuestLayout"

//font
import { Adamina } from "@next/font/google"
const adamina = Adamina({subsets : ["latin"],weight : ["400"]})


export default function CekPemesanan(){
  const [nomorPemesanan, setNomorPemesanan] = useState("");
  const router = useRouter();

  function gotToPemesanan(e){
    e.preventDefault();
    router.push("/cek-pemesanan/"+nomorPemesanan);
  }

  return (
    <>
    <section className="px-28 py-5 border-b">
      <h1 className={`${adamina.className} text-3xl mb-3`}>Cari Pemesanan</h1>
      <p className="text-gray-700">cari dan cek pemesanan yang telah anda lakukan sebelumnya.</p>
    </section>
    <section className="px-28 py-6 group ">
      <div className="border rounded p-5 group-focus-within:shadow-md">
        <h1 className="text-center font-semibold text-gray-600 mb-3">masukan nomor pemesanan disini</h1>
        <form onSubmit={gotToPemesanan} className="flex justify-center gap-3">
          <input 
          onChange={(e)=>{
            setNomorPemesanan(e.target.value);
          }}
          value={nomorPemesanan}
          className="
              w-4/6 py-1 px-5 border bg-slate-100 rounded outline-none 
              focus-within:bg-white transition-all
              group-focus-within:border group-focus-within:border-slate-500 focus-within:shadow-slate-400
          " 
          type="text" 
          placeholder="########-####" 
          />
          <button className="bg-slate-900 px-3 py-1 rounded hover:bg-slate-800 active:bg-slate-700 text-white">Cari</button>
        </form>
      </div>
    </section>
    </>
  )
}


//apply layout
CekPemesanan.getLayout = function getLayout(page) {
    return (
      <MainGuestLayout >
        {page}
      </MainGuestLayout>
    )
}