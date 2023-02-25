

import { useRef,useState,useEffect,forwardRef,useImperativeHandle } from "react"
import Image from "next/image"

//compoenent
import ProfilPemesan from "./pemesananFormList/ProfilPemesan"







export default ({pemesananList,setComplete}) => {

    const [iteration, setIteration] = useState(0)
    const [activeForm, setActiveForm] = useState({});
    const [formList,setFormList] = useState([])
    const [elementList, setElementList] = useState([]);

    useEffect(() => {
        setFormList(pemesananList);
    },[])

    useEffect(()=>{
        if(formList.length === 0) return
        setActiveForm(formList[iteration])

        let elementListTemp = formList.map((data) => {
            return <data.Element />
        })

        setElementList(elementListTemp);
    },[formList])


    const handleNextForm = () => {
        if((iteration + 1) >= formList.length) return
        let newIteration = iteration + 1;
        setComplete(iteration);
        setIteration(newIteration)
        setActiveForm(formList[newIteration])
    }

    const handlePrevieousForm = () => {
        if(iteration <= 0) return
        let newIteration = iteration - 1
        setIteration(newIteration)
        setActiveForm(formList[newIteration])
    }

    //cara kasar untuk menghandle

    if(formList.length === 0) return <></>
    if(!activeForm) return <></>
    return (
        <div className="bg-slate-50 border border-l-8 rounded p-3 shadow border-l-slate-800">
            <section className="flex justify-between border-b pb-3">
                <h4 className="text-lg font-semibold self-center" >{activeForm.label}</h4>
                <div className="flex gap-2">
                    <button onClick={handlePrevieousForm} className={`${iteration > 0 ? "" : "hidden"} p-2 px-3 font-light flex hover hover:bg-slate-200 rounded cursor-pointer`}>
                        <Image src={"/icon/chevron-left.svg"} height={25} width={25} />
                        <p>Sebelumnya</p>
                    </button>
                    <button onClick={handleNextForm} className={` ${iteration < (formList.length-1) ? "" : "hidden" } p-2 px-3 text-slate-300 font-light flex bg-slate-900 hover:bg-slate-700 rounded cursor-pointer`}>
                        <p>Selanjutnya</p>
                        <Image alt="icon" className="fill-white text-white stroke-white" src={"/icon/white/chevron-right.svg"} height={25} width={25} />
                    </button>
                </div>


            </section>
            <section className="mt-5 transition">
                {/* {activeForm.Element ? <activeForm.Element /> : ""} */}
                {/* {Element ? <Element /> : ""} */}
                {elementList ? elementList[iteration] : ""}
            </section>
        </div>
    )
}