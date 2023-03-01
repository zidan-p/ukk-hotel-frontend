

import kamar from "@/service/kamar";
import tipeKamar from "@/service/tipeKamar";
import Image from "next/image"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "@/utils/const";
import { isObjectEmpty } from "@/utils/object";
import { formatMoneyIDN } from "@/utils/formatNumber";


export default ({dataSend}) => {
    const [tipeKamarData, setTipeKamarData] = useState({});
    const [dataSendState, setDataSendState] = useState({});
    const [dataKamar, setDataKamar] = useState([]);
    

    useEffect(()=>{
        setDataSendState(dataSend);
        setStateTipeKamar();
        setStateDataKamar();
    },[])


    

    async function setStateTipeKamar(){
        try {
            let data = await tipeKamar.getTipeKamarFull(dataSend.tipeKamarId);
            setTipeKamarData(data.result.getTipeKamarOne.data);
        } catch (error) {
            console.error(error);
        }
    }

    async function setStateDataKamar(){
        try {
            let data = await kamar.searchMany({kamarIdList :dataSend.kamarIdList});
            setDataKamar(data.result.getKamarList.data);
        } catch (error) {
            console.error(error);
        }
    }


    if(isObjectEmpty(tipeKamarData)) return (
        <h1>Loading....</h1>
    )

    return(
        <div className="bg-white p-2">
            <section>
                <h1 className="text-xl font-semibold">Berikut adalah Pemesanan anda</h1>
                <p className="text-sm">Harap konfirmasi pemesanan anda</p>
            </section>
            <section className="border-y py-2 my-2 flex">
                <Image src={BACKEND_URL+"/file/image/"+tipeKamarData.foto} height={200} width={200} alt={"gambar"}/>
                <div className="w-full flex justify-between self-start border-b">
                    <div className="">
                        <h5 className="text-xl font-bold">{tipeKamarData.namaTipeKamar}</h5>
                        <h5 className="font-medium">Rp. {formatMoneyIDN(tipeKamarData.harga)} / <span className="text-gray-500">malam</span> </h5>
                    </div>
                    <div className="justify-between px-6 border-b-2 border-slate-500 pb-3">
                        <h5 className="text-slate-800 text-xl font-bold" ><span className="text-sm text-gray-500">Jumlah total</span> Rp. {formatMoneyIDN(dataKamar.length * tipeKamarData.harga)}</h5>
                        <h5 className="text-right text-lg font-semibold" ><span className="text-sm text-gray-500" >kamar dipilih </span> {dataKamar.length} </h5>
                    </div>
                </div>
            </section>
            <section className="flex" >
                <div className="basis-1/2 flex flex-col gap-2">
                    <div className="flex justify-between">
                        <p className="text-gray-500 font-semibold">Nama Pemesan</p>
                        <p>{dataSendState.namaPemesan}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-500 font-semibold">Email Pemesan</p>
                        <p>{dataSendState.emailPemesan}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-500 font-semibold">Nama tamu</p>
                        <p>{dataSendState.namaTamu}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-500 font-semibold">Tanggal Check In</p>
                        <p>{dataSendState.tglCheckIn}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-500 font-semibold">Tanggal Check Out</p>
                        <p>{dataSendState.tglCheckOut}</p>
                    </div>
                </div>
            </section>
            
        </div>
    )
}