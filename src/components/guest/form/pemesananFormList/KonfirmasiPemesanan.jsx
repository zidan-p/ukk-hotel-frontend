// module
import Joi from "joi";
import { intervalToDuration } from "date-fns";

import kamar from "@/service/kamar";
import tipeKamar from "@/service/tipeKamar";
import Image from "next/image"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "@/utils/const";
import { formatMoneyIDN } from "@/utils/formatNumber";
import AlertIcon from "@/components/icons/AlertIcon";


const formSchema = Joi.object({
    tglCheckIn: Joi.date().iso().required(),
    tglCheckOut: Joi.date().iso().required(),
    namaPemesan : Joi.string().required(),
    emailPemesan : Joi.string().email({ tlds: { allow: false } }).required(),
    namaTamu : Joi.string().required(),
    TipeKamarId : Joi.required(),
    kamarIdList: Joi.array().required()
})



export default ({dataSend}) => {
    const [tipeKamarData, setTipeKamarData] = useState({});
    const [dataSendState, setDataSendState] = useState({});
    const [dataKamar, setDataKamar] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    const [validated, setValidated] = useState(false);
    const [errorBag, setErrorBag] = useState({});
    

    useEffect(()=>{
        console.log(dataSend);
        validateForm();
    },[])

    useEffect(()=>{
        if(!validated) return;
        setAllData();
    },[validated])


    async function validateForm(){
        try {
            let validatedData = await formSchema.validateAsync(dataSend,{ abortEarly: false });
            setValidated(true);
        } catch (error) {
            console.error(error);
            if((error.name) === "ValidationError"){
                setErrorBag(error);
            }
            setIsloading(false);
        }
    }

    async function setAllData(){
        await setDataSendState(dataSend);
        await setStateTipeKamar();
        await setStateDataKamar();
        setIsloading(false);
    }

    async function setStateTipeKamar(){
        try {
            let data = await tipeKamar.getTipeKamarFull(dataSend.TipeKamarId);
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


    // if(isObjectEmpty(tipeKamarData)) return (
    //     <h1>Loading....</h1>
    // )

    if(isLoading){
        return (
            <h1>Loading......</h1>
        )
    }

    if(!validated){
        return(
            <div className="bg-white p-3">
                <div className=" ">
                    {/* untuk testing output */}
                    {/* {JSON.stringify(errorBag, null,' ').replace('[', '').replace(']', '')} */}
                    <div className="flex px-10">
                        <div className="basis-1/2 self-center">
                            <h2 className="text-xl font-semibold">Data yang anda masukan belum lengkap atau tidaak sesuai</h2>
                            <p className="text-sm">pastikan data berikut ini sudah sesuai anda inputkan</p>
                        </div>
                        <div className="basis-1/2">
                            <Image className="mx-auto" src={"/images/illustrations/Something_went_wrong.png"} height={100} width={200} />
                        </div>
                    </div>
                    <div className="flex flex-col divide-y gap-2 text-red-800">
                    {errorBag.details.map((err , index) => {
                        return (
                        <div key={index} className="hover:bg-red-100 rounded px-2 py-4 flex justify-between">
                            {err.message}
                            <div className="px-3">
                                <AlertIcon />
                            </div>
                        </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        )
    }

    const renderData = {
        imgSource : BACKEND_URL+"/file/image/"+tipeKamarData.foto,
        namaTipeKamar : tipeKamarData.namaTipeKamar,
        hargaTipeKamar : formatMoneyIDN(tipeKamarData.harga),
        totalHargaPemesanan : formatMoneyIDN(
            dataKamar.length * 
            tipeKamarData.harga * 
            intervalToDuration({
                start : new Date(dataSendState.tglCheckIn), 
                end : new Date(dataSendState.tglCheckOut)})
            .days
        ),
        banyakKamarDipilih : dataKamar.length,
        hariMenginap : intervalToDuration({start : new Date(dataSendState.tglCheckIn), end : new Date(dataSendState.tglCheckOut)}).days,
        namaPemesan : dataSendState.namaPemesan,
        emailPemesan : dataSendState.emailPemesan,
        namaTamu: dataSendState.namaTamu,
        tglCheckIn : dataSendState.tglCheckIn,
        tglCheckOut : dataSendState.tglCheckOut,
    }


    return(
        <div className="bg-white p-2">
            <section>
                <h1 className="text-xl font-semibold">Berikut adalah Pemesanan anda</h1>
                <p className="text-sm">Harap konfirmasi pemesanan anda</p>
            </section>
            <section className="border-y py-2 my-2 flex">
                <Image className="basis-2/6" src={renderData.imgSource} height={200} width={200} alt={"gambar"}/>
                <div className="basis-4/6 w-full flex justify-between self-start border-b">
                    <div className="">
                        <h5 className="text-xl font-bold">{renderData.namaTipeKamar}</h5>
                        <h5 className="font-medium">Rp. {renderData.hargaTipeKamar} / <span className="text-gray-500">malam</span> </h5>
                    </div>
                    <div className="justify-between px-6 border-b-2 border-slate-500 pb-3">
                        <h5 className="text-slate-800 text-xl font-bold" ><span className="text-sm text-gray-500">Jumlah total</span> Rp. {renderData.totalHargaPemesanan}</h5>
                        <h5 className="text-right text-lg font-semibold" ><span className="text-sm text-gray-500" >Kamar dipilih </span> {renderData.banyakKamarDipilih} </h5>
                        <h5 className="text-right text-lg font-semibold" >
                            <span className="text-sm text-gray-500" >Lama Menginap </span> 
                            {/* dapatkan panjang hari */}
                            {renderData.hariMenginap}
                            <span className="text-sm text-gray-500" > hari </span> 
                        </h5>
                    </div>
                </div>
            </section>
            <section className="flex flex-row-reverse" >
                <div className="basis-4/6 flex flex-col gap-2">
                    <div className="flex justify-between">
                        <p className="text-gray-500 font-semibold">Nama Pemesan</p>
                        <p>{renderData.namaPemesan}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-500 font-semibold">Email Pemesan</p>
                        <p>{renderData.emailPemesan}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-500 font-semibold">Nama tamu</p>
                        <p>{renderData.namaTamu}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-500 font-semibold">Tanggal Check In</p>
                        <p>{renderData.tglCheckIn}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-500 font-semibold">Tanggal Check Out</p>
                        <p>{renderData.tglCheckOut}</p>
                    </div>
                </div>
            </section>
            
        </div>
    )
}