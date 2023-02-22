
import Image from "next/image";
import kamar from "@/service/kamar"
import {startOfDay,addDays,formatISO} from "date-fns"
import { useState, useEffect } from "react";




export default ({idTipeKamar}) => {
    // available tipe kamar
    const [availableKamar, setAvailableKamar] = useState([]);
    const [firstDate, setFirstDate] = useState(startOfDay(new Date()))
    const [lastDate, setLastDate] = useState(startOfDay(addDays(new Date(), 1)));

    const getAvailableKamar = async () => {
        if(firstDate === undefined || lastDate === undefined) return
        let dataKamarList = await kamar.findAvailableKamarByTipeKamar({
            intervalDate : {
                start : firstDate,
                end : lastDate
            },
            TipeKamarId : idTipeKamar // perlu diingat
        })
        setAvailableKamar(dataKamarList.result.kamarList.data);
    }
    const handleChangeFirstDate = (e) => {
        let date = e.target.value;
        date = startOfDay(new Date(date))
        setFirstDate(date);
    }
    const handleChangeLastDate = (e) => {
        let date = e.target.value;
        date = startOfDay(new Date(date))
        setLastDate(date);
    }

    useEffect(() => {getAvailableKamar()},[idTipeKamar])

    return (
        <div className="flex flex-col h-full max-h-full">
            <h3 className="text-2xl font-semibold mb-2 p-3 pl-6">Daftar Kamar</h3>
            <div className="flex gap-3 border-y pb-4 mb-5 border-gray-400 bg-gray-200 pl-6 p-3">
                <div className="w-full">
                    <h5 className="text-sm font-semibold border-y  text-gray-500 mb-2" >Tanggal Mulai</h5>
                    <input onChange={handleChangeFirstDate} value={formatISO(firstDate,{representation: "date"})} className="p-3 border rounded-sm w-full" placeholder="dd-mm-YY" type="date" name="" id="" />
                </div>
                <div className="w-full">
                    <h5 className="text-sm font-semibold text-gray-500 mb-2" >Tanggal akhir</h5>
                    <input onChange={handleChangeLastDate} value={formatISO(lastDate,{representation: "date"})} className="p-3 border rounded-sm w-full" type="date" name="" id="" />
                </div>
                <button onClick={getAvailableKamar} className="bg-slate-700 hover:bg-slate-600 text-white p-4 rounded">
                    Cari
                </button>
            </div>
            <section className="overflow-y-auto max-h-full grow"> 
                <div className="flex flex-wrap text-small pl-6 p-3 select-none gap-3 font-semibold">
                    {availableKamar.length === 0 ?
                       (<div className="flex justify-center items-center w-full h-full">
                        <p className="text-gray-500">Daftar tidak tersedia</p>
                        </div>)
                    : 
                    
                    availableKamar.map((kam) => {
                        return (
                            <>
                            <div className="text-sm text-gray-500 cursor-not-allowed px-6 py-1 border rounded">
                                {kam.nama}
                            </div>
                            <div className="text-sm cursor-pointer px-6 py-1 border rounded hover:bg-gray-300">
                                {kam.nama}
                            </div>
                            </>
                        )
                    })
                    }
                </div>
            </section>
        </div>
    )
}