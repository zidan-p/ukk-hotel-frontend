
import { useRef,useState,useEffect,forwardRef,useImperativeHandle } from "react"
import Image from "next/image"
import tipeKamar from "@/service/tipeKamar"
import { BACKEND_URL } from "@/utils/const"
import kamar from "@/service/kamar"
import { isObjectEmpty } from "@/utils/object"


//component
import TipeKamarListCard from "./TipeKamarListCard"
import DescTipeKamarCard from "./DescTipeKamarCard"
import KamarOption from "./KamarOption"

export default (props) => {
    
    const [tipeKamarList, setTipeKamarList] = useState([])
    const [tipeKamarActiveData, setTipeKamarActiveData] = useState({});
    const [sendFormData, setSendFormData] = useState({
        TipeKamarId : null, //ini yang active
    })

    useEffect(()=>{
        setSendFormData({
            ...sendFormData,
            ...props.dataSend
        })
        setStateTipeKamarList()
    },[])

    //!! saya tidaak tahu bagaimana caranya
    //tapi ii adalah bagian yang berbahada
    // saya samapi melakukan revisi setelah 2.5 jam ngoding gara2 ini
    useEffect(() => {
        if(sendFormData.TipeKamarId === null) return
        setStateActiveTipeKamar();
    },[sendFormData.TipeKamarId])




    //change state, local anda parent
    function changeState({key, value}){
        setSendFormData((previous) => ({...previous,[key] : value}))
        props.setDataParent({key : key,value : value})
    }


    //init function
    async function setStateTipeKamarList(){
        try {
            let data = await tipeKamar.getAllTipeKamar();
            setTipeKamarList(data.result.getTipeKamarList.data);
        } catch (error) {
            console.error(error);
        }
    }

    async function setStateActiveTipeKamar(){
        try {
            let data = await tipeKamar.getTipeKamarFull(sendFormData.TipeKamarId);
            setTipeKamarActiveData(data.result.getTipeKamarOne.data)
        } catch (error) {
            console.error(error);
        }
    }


    function handleSetTipeKamarId(id){
        changeState({key: "TipeKamarId", value: id})
    }
    return (
        <>
        <div className="flex divide-x h-96">
            <div className="basis-1/3 px-2">
                <div className="flex flex-col  gap-1">
                    {tipeKamarList.map((tipeKamarElement, index) =>{
                        return (
                        <div key={index} className="basis-1/5">
                            <input className="hidden" type="radio" name="tipeKamar" id={tipeKamarElement.id} />
                            <label 
                                onClick={()=>{handleSetTipeKamarId(tipeKamarElement.id)}}
                                htmlFor={tipeKamarElement.id}>
                                <TipeKamarListCard 
                                    harga={tipeKamarElement.harga} 
                                    image={BACKEND_URL+"/file/image/"+tipeKamarElement.foto} 
                                    name={tipeKamarElement.namaTipeKamar} 
                                    active={sendFormData.TipeKamarId === tipeKamarElement.id ? true : false}
                                />
                            </label>
                        </div>
                        )
                    } )}
                </div>
            </div>
            <div className="basis-2/3 p-3">
            {
                !isObjectEmpty(tipeKamarActiveData) 
                ?
                (<div className="flex flex-col gap-3">
                    <DescTipeKamarCard tipeKamarData={tipeKamarActiveData} />
                    <KamarOption idTipeKamar={tipeKamarActiveData.id} dataSend={props.dataSend} setParent={props.setDataParent} />
                </div>)
                :  
                (
                <h1 className="text-center font-semibold text-gray-700">silahkan memilih tipe kamar</h1> 
                )
            }
            </div>
        </div>
        </>
    )
}