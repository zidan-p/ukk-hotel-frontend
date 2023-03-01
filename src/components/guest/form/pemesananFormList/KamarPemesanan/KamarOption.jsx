import { useEffect, useState } from "react"




import kamar from "@/service/kamar"



export default ({idTipeKamar, dataSend, setParent}) => {
    const [kamarList, setKamarList] = useState([]);
    const [selected, setSelected] = useState([]);
    const [sendFormData, setSendFormData] = useState({
        kamarIdList: [],
    })

    console.log("render kamar option")

    useEffect(()=>{
        setSendFormData({
            ...sendFormData,
            ...dataSend
        })
        setStateKamarList();
    },[idTipeKamar])

    useEffect(()=>{
        console.log("kamar list refresh");
    },[kamarList])

    async function setStateKamarList(){
        try {
            let data = await kamar.findAvailableKamarByTipeKamar({
                TipeKamarId : idTipeKamar,
                intervalDate : {
                    start : dataSend.tglCheckIn,
                    end : dataSend.tglCheckOut
                }
            })

            let temp = data.result.kamarList.data.map((val) => ({
                ...val,
                selected: isSelected(val.id,dataSend.kamarIdList)
            }))

            setKamarList(temp);
        } catch (error) {
            console.error(error);
        }
    }

    function isSelected(id, idSelected = []){
        if(idSelected === null) return false;
        if(idSelected === undefined) return false;

        console.log("id selected", idSelected);
        console.log("id", id)
        return idSelected.includes(id);
    }

    async function changeKamarListState(values){
        setSendFormData((pre)=>({
            ...pre,
            kamarIdList: values
        }))

        setParent({key: "kamarIdList", value: values});
    }

    function removeKamarListId(id){
        let data = sendFormData.kamarIdList.filter((val) => val !== id);
        changeKamarListState(data);
    }

    function addKamarListId(id){
        let data = sendFormData.kamarIdList;
        data.push(id);
        changeKamarListState(data);
    }

    async function setSelectedKamar(index){
        let data = kamarList
        console.log(isSelected(data[index].id, sendFormData.kamarIdList))
        if(isSelected(data[index].id, sendFormData.kamarIdList)){
            data[index].selected = false
            removeKamarListId(data[index].id);
        }else{
            data[index].selected = true;
            addKamarListId(data[index].id);
        }
        setKamarList([...data])
    }
    
    return (
        <div className="bg-white p-2">
            <p className="text-sm text-gray-500">silahkan memilih kamar berikut</p>
            <hr className="mb-2" />
            <div className="flex gap-1 flex-wrap">
                {kamarList.map((kamar,index)=> {
                    return (
                        <div 
                        onClick={()=>setSelectedKamar(index)}
                        key={kamar.id} 
                        className={`
                            text-sm cursor-pointer px-6 py-1 border-2 rounded hover:bg-gray-300
                            ${kamar.selected ? "bg-slate-300" : "bg-white" }
                        `}>
                            {kamar.nama}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}