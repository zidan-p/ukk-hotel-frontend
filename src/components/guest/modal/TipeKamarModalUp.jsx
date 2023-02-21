
import Image from "next/image"
import { formatMoneyIDN } from "@/utils/formatNumber"
import { useRef,useState,useEffect,forwardRef,useImperativeHandle } from "react"
import tipeKamar from "@/service/tipeKamar"

 

export default forwardRef((props,ref) => {
    const [open,setOpen] = useState(false);
    const [idTipeKamar, setIdTipeKamar] = useState(null);
    const [tipeKamardata, setTipeKamarData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const tipeKamarDescriptionSection = useRef();

    const getTipeKamarData = async () => {
        if(idTipeKamar === null) return
        try {
            let data = await tipeKamar.getTipeKamar(idTipeKamar);
            // let data = await fetch("http://localhost:3005/tipe-kamar/"+idTipeKamar);
            setTipeKamarData(data.result.getTipeKamarOne.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {getTipeKamarData()},[idTipeKamar])

    const changeIdTipeKamar = (id) => {
        console.log("dari modal cek di parameter",id)
        setIdTipeKamar(id)
    }
    const openModal = () => {setOpen(true)}
    const closeModal = (event) => {
        setOpen(false);
        tipeKamarDescriptionSection.current?.scrollTo(0, 0)
    }

    const handleSwohData = () => {
        setIsLoading(!isLoading)
    }

    useImperativeHandle(ref, () => {
        return {
            changeIdTipeKamarModal : changeIdTipeKamar,
            openModal : openModal,
            closeModal : closeModal
        }
    })

    if(!open) return <></>

    return (
        <div className={`${open ? "" : "hidden"} fixed flex items-center z-10 top-0 h-screen max-h-screen w-full bg-[rgba(0,0,0,0.6)]`}>
            <div className={`transition-all min-w-96 max-w-5xl mx-auto rounded h-[600px] flex flex-col bg-white p-5 grow-0 overflow-auto`}>
                <div className="flex justify-between border-b pb-3">
                    <h4 className="text-lg font-semibold">Detail Tipe kamar</h4>
                    <button onClick={handleSwohData} className="bg-sky-200 rounded hover:bg-sky-300 px-5">text big modal</button>
                    <button onClick={closeModal} className="p-0.5 hover:bg-gray-300 rounded">
                        <Image src={"/icon/x.svg"} width={30} height={30} alt={"close"}  />
                    </button>
                </div>


                {isLoading
                ?(
                <div className="w-96 flex justify-center items-center h-full">
                    <div className="flex gap-4 items-center">
                        <Image className="mx-auto animate-spin" src={"/icon/sun.svg"} width={30} height={30} alt={"loader icon"} />
                        <p className="text-gray-400 font-semibold">Loading...</p>
                    </div>
                </div> 
                ) : (
                <div className="flex overflow-auto divide-x">
                    <div ref={tipeKamarDescriptionSection} className="basis-1/2 overflow-auto p-3 pr-8">
                        <section className="border-b mb-5 pb-5">
                            <Image className="w-full mb-3" src={"/images/gambar-default.jpg"} width={300} height={200} alt={"gambar default"} />
                            <h1 className="text-lg font-semibold">kamar kamaran</h1>
                            <p className="break-words font-medium text-gray-600">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime assumenda cum officia, quo corporis aut rerum sequi nam fugit magni.
                            </p>
                        </section>
                        <section>
                            <h3 className="text-2xl font-semibold mb-2">Detail Lengkap</h3>
                            <div className="flex justify-between mb-2">
                                <h3 className="text-gray-600 font-semibold" >Nama Tipe Kamar</h3>
                                <h5 className="font-semibold">Kamar Luar Biasa</h5>
                            </div>
                            <div className="flex justify-between mb-2">
                                <h3 className="text-gray-600 font-semibold">
                                    <Image className="inline mr-1 stroke-gray-600" src={"/icon/money.svg"} width={20} height={20} />
                                    Harga Kamar
                                </h3>
                                <h5 className="font-semibold">Rp. {formatMoneyIDN(2_000_000)}</h5>
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
                    <div className="basis-1/3 p-3">
                    <h3 className="text-2xl font-semibold mb-2">Daftar Kamar</h3>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
})

