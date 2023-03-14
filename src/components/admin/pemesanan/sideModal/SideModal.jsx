
import pemesanan from "@/service/pemesanan";
import { useEffect, useState } from "react"
import {toast} from "react-toastify"
import BackDrop from "./BackDrop"
import Content from "./Content"

function SideModal({handleClose, show, idPemesanan}){
    const [closeAnim, setCloseAnim] = useState(false);
    const [openAnim, setOpenAnim] = useState(false);
    const [openState, setOpenState] = useState(false);
    const [pemesananData, setPemesananData] = useState({});

    useEffect(()=>{
        if(show){openModal()}
        else {closeModal();}
    },[show])

    useEffect(()=>{
        if(idPemesanan == null) return
        getPemesananData();
    },[idPemesanan])

    async function getPemesananData(){
        try {
            const result = await pemesanan.getpemesananFull(idPemesanan);
            setPemesananData(result.result.getPemesananOne.data);
        } catch (error) {
            console.log(error)
            toast.error("Ada masalah..")
        }
    }

    function openModal(){
        setOpenAnim(true);
        setTimeout(()=>{
            setOpenState(true);
            setOpenAnim(false);
        },450)
    }

    function closeModal(){
        if(openState === false)return
        console.log("close modal tertriggger")
        setCloseAnim(true);
        setTimeout(()=>{
            setOpenState(false);
            setCloseAnim(false);
        },450)
    }

    return(
        // <></>
        <BackDrop 
            onClose={handleClose} 
            className={`
                transition-all ease-out overflow-x-hidden flex 
                flex-row-reverse bg-opacity-0 -z-10
                ${openState? " bg-opacity-80 z-10" : "-z-10 bg-opacity-0"}
                ${openAnim ? "z-10 bg-opacity-80" : ""}
                ${closeAnim ? "bg-opacity-0" : ""}
                `}
                >
            <div 
                className={`
                transition-all basis-2/4 flex flex-col
                gap-2 bg-white rounded-l p-3 
                ${openState ? "" : "translate-x-full"}
                ${closeAnim ? "translate-x-full" : ""}
                `}
            >
                <Content dataPemesanan={pemesananData} onClose={handleClose} />
            </div>
        </BackDrop>
    )
}

export default SideModal