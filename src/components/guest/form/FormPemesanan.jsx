

import { useRef,useState,useEffect,forwardRef,useImperativeHandle } from "react"
import Image from "next/image"
import pemesanan from "@/service/pemesanan"

//compoenent
import ProfilPemesan from "./pemesananFormList/ProfilPemesan"
import KamarPemesanan from "./pemesananFormList/KamarPemesanan/KamarPemesanan"
import KonfimasiPemesanan from "./pemesananFormList/KonfirmasiPemesanan"

const FORM_LIST_PEMESANAN = [
    {
        label : "Profil dan Tanggal Pemesanan",
        Element : ProfilPemesan,
        complete : false,
        data : {}
    },
    {
        label : "Kamar dan Tipe Kamar",
        Element : KamarPemesanan,
        complete : false,
        data : {}
    },
    {
        label : "Konfimasi",
        Element: KonfimasiPemesanan,
        complete : false,
        data : {}
    }
]



export default forwardRef((props,ref) => {

    const [iteration, setIteration] = useState(0)
    const [activeForm, setActiveForm] = useState({});
    const [formList,setFormList] = useState([])
    const [ElementRender, setElementRender] = useState(<></>);
    const [dataSendFormTemp, setDataSendFormTemp] = useState({})

    const [isOrdered, setIsOrdered] = useState(false);
    const [orderedData, setOrderedData] = useState({});

    useEffect(() => {
        setFormList(FORM_LIST_PEMESANAN);
    },[])

    useEffect(()=>{
        if(formList.length === 0) return
        setActiveForm(formList[iteration])
    },[formList])


    useEffect(()=>{
        if(!activeForm?.Element) return
        setElementRender(<activeForm.Element dataSend={dataSendFormTemp} getDataParent={getSendFormData} setDataParent={handleChangeFormData} />);
    },[activeForm])

    useEffect(()=>{
        setActiveForm(formList[iteration])
        props.changeIteration(iteration)
    },[iteration])

    const handleChangeFormData = ({key, value}) => {
        setDataSendFormTemp((prevProps) => ({
            ...prevProps,
            [key]: value
        }));
    }

    const getSendFormData = (key) => {
        return dataSendFormTemp?.key || "";
    }

    const updateCompleteLabel = (id) => {
        let data = [...formList];
        data[id].complete = true;
        setFormList(data)
    }

    const getLabelData = () => {
        return formList.map(form => ({
            label: form.label,
            complete: form.complete
        }))
    }


    const handleNextForm = () => {
        if((iteration + 1) >= formList.length) return
        let newIteration = iteration + 1;
        updateCompleteLabel(iteration)
        setIteration(newIteration)
        props.onComplete();
    }

    const handlePrevieousForm = () => {
        if(iteration <= 0) return
        let newIteration = iteration - 1
        setIteration(newIteration)
    }

    const getIteration = () => iteration;

    const handleCreateOrder = async() => {
        try {
            let data = await pemesanan.createPemesanan(dataSendFormTemp);
            setIsOrdered(true);
            setOrderedData(data.result.pemesananOne);
        } catch (error) {
            console.error(error);
        }
    }


    useImperativeHandle(ref, ()=>{
        return {
            getLabel : getLabelData,
            setIteration : setIteration,
            getIteration : getIteration
        }
    })

    if(formList.length === 0) return <></>
    if(!activeForm) return <></>
    if(isOrdered) return(
        <h1>selamat pemesanan anda sudah diproses</h1>
    )
    return (
        <div className="bg-slate-50 border border-l-8 rounded p-3 shadow border-l-slate-800">
            <section className="flex justify-between border-b pb-3">
                <h4 className="text-lg font-semibold self-center" >{activeForm.label}</h4>
                <div className="flex gap-2">
                    <button onClick={handlePrevieousForm} className={`${iteration > 0 ? "" : "hidden"} p-2 px-3 font-light flex hover hover:bg-slate-200 rounded cursor-pointer`}>
                        <Image alt="icon" src={"/icon/chevron-left.svg"} height={25} width={25} />
                        <p>Sebelumnya</p>
                    </button>
                    <button onClick={handleNextForm} className={` ${iteration < (formList.length-1) ? "" : "hidden" } p-2 px-3 text-slate-300 font-light flex bg-slate-900 hover:bg-slate-700 rounded cursor-pointer`}>
                        <p>Selanjutnya</p>
                        <Image alt="icon" className="fill-white text-white stroke-white" src={"/icon/white/chevron-right.svg"} height={25} width={25} />
                    </button>
                    <button onClick={handleCreateOrder} className={` ${iteration < (formList.length-1) ? "hidden" : "" } p-2 px-3 text-green-100 font-light flex bg-green-800 hover:bg-green-700 rounded cursor-pointer`}>
                        <p>Buat Pesanan</p>
                    </button>
                </div>


            </section>
            <section className="mt-3 transition">
                {ElementRender ? ElementRender : ""}
            </section>
        </div>
    )
})