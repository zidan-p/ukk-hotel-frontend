
import Image from "next/image"
import { formatMoneyIDN } from "@/utils/formatNumber"
import { useRef,useState,useEffect,forwardRef,useImperativeHandle } from "react"
import tipeKamar from "@/service/tipeKamar"
import kamar from "@/service/kamar"
import {startOfDay,addDays,formatISO} from "date-fns"

 

export default forwardRef((props,ref) => {

    // modal state
    const [open,setOpen] = useState(false);
    const [idTipeKamar, setIdTipeKamar] = useState(null);
    const [tipeKamardata, setTipeKamarData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // available tipe kamar
    const [availableKamar, setAvailableKamar] = useState([]);
    const [firstDate, setFirstDate] = useState(startOfDay(new Date()))
    const [lastDate, setLastDate] = useState(startOfDay(addDays(new Date(), 1)));

    const tipeKamarDescriptionSection = useRef();

    const getTipeKamarData = async () => {
        if(idTipeKamar === null) return
        try {
            let data = await tipeKamar.getTipeKamar(idTipeKamar);
            setTipeKamarData(data.result.getTipeKamarOne.data);
            setIsLoading(false)
        } catch (error) {
            console.error(error);
        }
    }
    const getAvailableKamar = async () => {
        if(firstDate === undefined || lastDate === undefined) return
        let dataKamarList = await kamar.findAvailableKamarByTipeKamar({
            intervalDate : {
                start : firstDate,
                end : lastDate
            },
            TipeKamarId : idTipeKamar
        })
        setAvailableKamar(dataKamarList.result.kamarList.data);
    }
    useEffect(() => {
        getTipeKamarData(); 
        getAvailableKamar();
    },[idTipeKamar])
    useEffect(()=>{
        if(!open)document.getElementsByTagName("BODY")[0].style.overflow = "auto";
        else  document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
    },[open]);

    const changeIdTipeKamar = (id) => {
        setIdTipeKamar(id)
    }
    const openModal = () => {setOpen(true)}
    const closeModal = (event) => {
        setOpen(false);
        setIsLoading(true);
        setIdTipeKamar(null);
        tipeKamarDescriptionSection.current?.scrollTo(0, 0)
    }

    const handleChangeFirstDate = (e) => {
        let date = e.target.value;
        date = startOfDay(new Date(date))
        setFirstDate(date);
    }

    useImperativeHandle(ref, () => {
        return {
            changeIdTipeKamarModal : changeIdTipeKamar,
            openModal : openModal,
            closeModal : closeModal
        }
    })

    
    if(tipeKamardata.id === undefined){
        return (<></>)
    }

    return (
        <div className={`${open ? "" : "hidden"} fixed flex items-center z-10 top-0 h-screen max-h-screen w-full bg-[rgba(0,0,0,0.6)]`}>
            {/* <div className={`transition-all ${isLoading ? "w-96" : "w-[1300px]"} mx-auto rounded h-[600px] flex flex-col bg-white p-5 grow-0 overflow-y-auto overflow-x-hidden `}> */}
            <div className={`transition-all w-[1300px] mx-auto rounded h-[600px] flex flex-col bg-white p-5 grow-0 overflow-y-auto overflow-x-hidden `}>
                <div className="flex justify-between border-b pb-3">
                    <h4 className="text-lg font-semibold">Detail Tipe kamar</h4>
                    <button onClick={closeModal} className="p-0.5 hover:bg-gray-300 rounded">
                        <Image src={"/icon/x.svg"} width={30} height={30} alt={"close"}  />
                    </button>
                </div>


                {/* {isLoading} */}
                <div className="h-full relative overflow-x-hidden">
                    <div className={`transition-all flex max-h-full divide-x bg-white`}>
                        <div ref={tipeKamarDescriptionSection} className="basis-1/2 overflow-auto p-3 pr-8">
                            <section className="border-b mb-5 pb-5">
                                <Image className="w-full mb-3" src={"/images/gambar-default.jpg"} width={300} height={200} alt={"gambar default"} />
                                <h1 className="text-lg font-semibold">{tipeKamardata.namaTipeKamar}</h1>
                                <p className="break-words font-medium text-gray-600">
                                    {tipeKamardata.deskripsi}
                                </p>
                            </section>
                            <section>
                                <h3 className="text-2xl font-semibold mb-2">Detail Lengkap</h3>
                                <div className="flex justify-between mb-2">
                                    <h3 className="text-gray-600 font-semibold" >Nama Tipe Kamar</h3>
                                    <h5 className="font-semibold">{tipeKamardata.namaTipeKamar}</h5>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <h3 className="text-gray-600 font-semibold">
                                        <Image className="inline mr-1 stroke-gray-600" src={"/icon/money.svg"} width={20} height={20} />
                                        Harga Kamar
                                    </h3>
                                    <h5 className="font-semibold">Rp. {formatMoneyIDN(tipeKamardata.harga)}</h5>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <h3 className="text-gray-600 font-semibold">
                                        <Image className="inline mr-1" src={"/icon/bookmark.svg"} width={20} height={20} />
                                        Banyak kamar
                                    </h3>
                                    <h5 className="font-semibold">30</h5>
                                </div>
                            </section>
                        </div>

                        <div className="basis-1/2 p-3 pl-6">
                            <h3 className="text-2xl font-semibold mb-2">Daftar Kamar</h3>
                            <div className="flex gap-3 border-b pb-4 mb-5">
                                <div className="w-full">
                                    <h5 className="text-sm font-semibold text-gray-500 mb-2" >Tanggal Mulai</h5>
                                    <input onChange={handleChangeFirstDate} value={formatISO(firstDate,{representation: "date"})} className="p-3 border rounded-sm w-full" placeholder="dd-mm-YY" type="date" name="" id="" />
                                </div>
                                <div className="w-full">
                                    <h5 className="text-sm font-semibold text-gray-500 mb-2" >Tanggal akhir</h5>
                                    <input value={formatISO(lastDate,{representation: "date"})} className="p-3 border rounded-sm w-full" type="date" name="" id="" />
                                </div>
                                <button onClick={getAvailableKamar} className="bg-slate-700 hover:bg-slate-600 text-white p-4 rounded">
                                    Cari
                                </button>
                            </div>
                            <section>
                                <div className="flex text-small gap-3 font-semibold">
                                    {availableKamar.map(() => {
                                        return (
                                            <div className="cursor-pointer px-6 py-1 border rounded hover:bg-gray-300">
                                                0
                                            </div>
                                        )
                                    })}
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* loader */}
                    <div className={`transition-all duration-500 absolute inset-0  opacity-0 ${isLoading ? "opacity-100 z-10" : "-z-10"} bg-white flex justify-center items-center h-full `}>
                        <div className="flex gap-4 items-center">
                            <Image className="mx-auto animate-spin" src={"/icon/sun.svg"} width={30} height={30} alt={"loader icon"} />
                            <p className="text-gray-400 font-semibold">Loading...</p>
                        </div>
                    </div> 
                    
                </div>
            </div>
        </div>
    )
})

