import ChevronLeftIcon from "@/components/icons/ChevronLeftIcon"
import EditIcon from "@/components/icons/EditIcon"
import TrashIcon from "@/components/icons/TrashIcon"
import { IMAGE_SOURCE_URL } from "@/utils/const"
import { intervalToDuration } from "date-fns"
import Image from "next/image"


export default ({onClose}) => {
    return (
        <>
        <div className="flex justify-between items-center">
            <button onClick={()=>onCLose()} className="flex gap-2 items-center rounded hover:bg-slate-200 active:bg-slate-300 p-1 ">
                <ChevronLeftIcon/>
                <h2 className="px-2 text-2xl font-bold">
                Pemesanan yang banyak
                </h2>
            </button>
            <div className="flex gap-2 px-3">
                <button className="p-2 rounded text-yellow-600 bg-yellow-50 hover:bg-yellow-100 active:bg-yellow-200">
                    <EditIcon />
                </button>
                <button className="p-2 rounded text-red-600 bg-red-50 hover:bg-red-100 active:bg-red-200">
                    <TrashIcon />
                </button>
            </div>
        </div>
        <div className="h-full flex ">
            
            <section className="border-b py-2 my-2 flex gap-3">
                <Image className="basis-2/6" src={"/images/gambar-default.jpg"} height={200} width={200} alt={"gambar"}/>
                <div className="basis-4/6 w-full flex justify-between self-start border-b">
                    <div className="">
                        <h5 className="text-xl font-bold">{"kamar gaul"}</h5>
                        <h5 className="font-medium">Rp. {1000} / <span className="text-gray-500">malam</span> </h5>
                    </div>
                    <div className="justify-between px-6 border-b-2 border-slate-500 pb-3">
                        <h5 className="text-slate-800 text-xl font-bold" ><span className="text-sm text-gray-500">Jumlah total</span> Rp. {120000}</h5>
                        <h5 className="text-right text-lg font-semibold" ><span className="text-sm text-gray-500" >Kamar dipilih </span> {4} </h5>
                        <h5 className="text-right text-lg font-semibold" >
                            <span className="text-sm text-gray-500" >Lama Menginap </span> 
                            {
                                intervalToDuration({
                                    start : new Date(),
                                    end : new Date(),
                                }).days
                            }
                            <span className="text-sm text-gray-500" > hari </span> 
                        </h5>
                    </div>
                </div>
            </section>
            <section className="flex flex-row-reverse pb-7" >
                <div className="basis-4/6 flex flex-col gap-2">
                    <div className="flex justify-between">
                        <p className="text-gray-500 font-semibold">Nama Pemesan</p>
                        <p>tamu icikiwin</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-500 font-semibold">Email Pemesan</p>
                        <p>icikir@djawir.con</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-500 font-semibold">Nama tamu</p>
                        <p>iwir iwir</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-500 font-semibold">Tanggal Check In</p>
                        <p>12- 0 12</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-500 font-semibold">Tanggal Check Out</p>
                        <p>12 - 12 - 12</p>
                    </div>
                </div>
            </section>

        </div>
        </>
    )
}