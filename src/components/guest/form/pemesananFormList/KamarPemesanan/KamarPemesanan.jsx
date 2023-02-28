
import { useRef,useState,useEffect,forwardRef,useImperativeHandle } from "react"
import Image from "next/image"
import tipeKamar from "@/service/tipeKamar"
import { BACKEND_URL } from "@/utils/const"
import kamar from "@/service/kamar"

//component
import TipeKamarListCard from "./TipeKamarListCard"
import DescTipeKamarCard from "./DescTipeKamarCard"
import kamarOption from "./kamarOption"
import KamarOption from "./kamarOption"

export default (props) => {
    
    const [tipeKamarList, setTipeKamarList] = useState([])
    const [availableKamarList, setAvailabelKamarList] = useState([]);
    const [tipeKamarActiveData, setTipeKamarActiveData] = useState({});
    const [sendFormData, setSendFormData] = useState({
        kamarIdList: [],
        tipeKamarId : null,
    })

    const getTipeKamar = async () => {
        try {
            let data = await tipeKamar.getAllTipeKamar();
            setTipeKamarList(data.result.getTipeKamarList.data);
        } catch (error) {
            console.error(error);
        }
    }

    const getTipeKamarDataAndKamar = async(id) => {
        try {
            let data = await tipeKamar.getTipeKamarFull(id)
            console.log("data active kamar", data)
            setTipeKamarActiveData(data.result.getTipeKamarOne.data)
        } catch (error) {
            console.error(error)
        }
    }

    const getAvailableKamar = async() => {
        console.log("get available kamar")
        if(!tipeKamarActiveData?.id) return
        try {

            let data = await kamar.findAvailableKamarByTipeKamar({
                TipeKamarId : tipeKamarActiveData.id,
                intervalDate: {
                    start : sendFormData.tglCheckIn,
                    end : sendFormData.tglCheckOut
                }
            })
            console.log("data available kamara", data);
            setAvailabelKamarList(data.result.kamarList.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        getTipeKamar();
        setSendFormData(props.dataSend);
    },[])

    useEffect(()=>{
        (async()=>{
            await getTipeKamarDataAndKamar(sendFormData.tipeKamarId);
            await getAvailableKamar();
        })()
    },[sendFormData.tipeKamarId])

    const handleSetTipeKamarId = (id) => {
        setSendFormData((pre) => ({
            ...pre,
            tipeKamarId: id
        }))
        props.setDataParent({ key: "tipeKamarId",value : id})
    }

    const toggleKamar = (idKamar) => {
        if(sendFormData.kamarIdList.some(idKamar)){
            let otherArr = [...sendFormData.kamarIdList];
            otherArr.push(idKamar);

            setSendFormData((pre) => ({
                ...pre,
                kamarIdList : otherArr
            }));

            props.setDataParent({key: "kamarIdList", value: otherArr});
            return
        }
        let newArr = sendFormData.kamarIdList.filter(arr => arr !== idKamar);
        setSendFormData((pre) => ({
            ...pre,
            kamarIdList : newArr
        }));

        props.setDataParent({key: "kamarIdList", value: newArr});
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
                                    active={sendFormData.tipeKamarId === tipeKamarElement.id ? true : false}
                                />
                            </label>
                        </div>
                        )
                    } )}
                </div>
            </div>
            <div className="basis-2/3 p-3">
                {tipeKamarActiveData?.id
                ? 
                (
                <div className="flex flex-col gap-3">
                    <DescTipeKamarCard tipeKamarData={tipeKamarActiveData} />
                    <KamarOption kamarList={availableKamarList} selected={sendFormData.kamarIdList} toggleKamar={toggleKamar} />
                </div>
                )
                :
                ( <p>kosong...</p>)
                }
                
            </div>
        </div>
        </>
    )
}