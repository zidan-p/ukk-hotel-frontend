

import { useRef,useState,useEffect,forwardRef,useImperativeHandle } from "react"
import Image from "next/image"

//compoenent
import ProfilPemesan from "./pemesananFormList/ProfilPemesan"







export default ({pemesananList,setComplete}) => {

    const [iteration, setIteration] = useState(0)
    const [activeForm, setActiveForm] = useState({});
    const [formList,setFormList] = useState([])

    useEffect(() => {
        setFormList(pemesananList);
    },[])

    useEffect(()=>{
        if(formList.length === 0) return
        setActiveForm(formList[iteration])
        console.log(formList)
    },[formList])


    const handleNextForm = () => {
        if(iteration >= formList.length) return
        setIteration(iteration + 1)
        setActiveForm(formList[iteration])
        setComplete(iteration);
    }

    const handlePrevieousForm = () => {
        if(iteration <= 0) return
        setIteration(iteration - 1)
        setActiveForm(formList[iteration])
    }

    if(formList.length === 0) return <></>

    return (
        <div className="bg-slate-50 border border-l-8 rounded p-3 shadow border-l-slate-800">
            <section className="flex justify-between border-b pb-3">
                <h4 className="text-lg font-semibold self-center" >{activeForm.label}</h4>
            {  
                iteration === 0  ? 
                (<div className="flex gap-3">
                    <div onClick={handleNextForm} className="p-2 px-3 text-slate-300 font-light flex bg-slate-900 hover:bg-slate-700 rounded cursor-pointer">
                        <p>Selanjutnya</p>
                        <Image className="fill-white text-white stroke-white" src={"/icon/white/chevron-right.svg"} height={25} width={25} />
                    </div>
                </div>)

                : iteration === FORM_LIST_PEMESANAN.length ?
                (<div className="flex gap-3">
                    <div onClick={handlePrevieousForm} className="p-2 px-3 font-light flex hover hover:bg-slate-200 rounded cursor-pointer">
                        <Image src={"/icon/chevron-left.svg"} height={25} width={25} />
                        <p>Sebelumnya</p>
                    </div>
                    <div onClick={handleNextForm} className="p-2 px-3 text-slate-300 font-light flex bg-slate-900 hover:bg-slate-700 rounded cursor-pointer">
                        <p>Selanjutnya</p>
                        <Image className="fill-white text-white stroke-white" src={"/icon/white/chevron-right.svg"} height={25} width={25} />
                    </div>
                </div>)

                : 
                (<div className="flex gap-3">
                    <div onClick={handlePrevieousForm} className="p-2 px-3 font-light flex hover hover:bg-slate-200 rounded cursor-pointer">
                        <Image src={"/icon/chevron-left.svg"} height={25} width={25} />
                        <p>Sebelumnya</p>
                    </div>
                    <div onClick={handleNextForm} className="p-2 px-3 text-slate-300 font-light flex bg-slate-900 hover:bg-slate-700 rounded cursor-pointer">
                        <p>Selanjutnya</p>
                        <Image className="fill-white text-white stroke-white" src={"/icon/white/chevron-right.svg"} height={25} width={25} />
                    </div>
                </div>)
            }
            </section>
            <section className="mt-5 transition">
                <activeForm.element />
            </section>
        </div>
    )
}