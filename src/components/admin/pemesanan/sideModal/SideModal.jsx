
import { useEffect, useState } from "react"
import BackDrop from "./BackDrop"
import Content from "./Content"

function SideModal({handleClose, show, idPemesanan}){
    const [closeAnim, setCloseAnim] = useState(false);
    const [openAnim, setOpenAnim] = useState(false);
    const [openState, setOpenState] = useState(false);

    useEffect(()=>{
        console.log("perubahan show")
        if(show){openModal()}
        else {closeModal();}
    },[show])

    function openModal(){
        setOpenAnim(true);
        setTimeout(()=>{
            setOpenState(true);
            setOpenAnim(false);
        },450)
    }

    function closeModal(){
        setCloseAnim(true);
        setTimeout(()=>{
            setOpenState(false);
            setCloseAnim(false);
        },450)
    }

    return(
        <BackDrop 
            onClose={handleClose} 
            className={`
                transition-all overflow-x-hidden flex 
                flex-row-reverse 
                ${openState? " bg-opacity-80 z-10" : "-z-10 bg-opacity-0"}
                ${openAnim ? "z-10 bg-opacity-80" : ""}
                ${closeAnim ? "bg-opacity-0" : ""}
                `}
                >
        {/* // <BackDrop className={`overflow-x-hidden flex flex-row-reverse bg-opacity-0 -z-10`}> */}
            <div 
                className={`
                transition-all basis-3/4 flex flex-col
                gap-2 bg-white rounded-l p-3 
                ${openState ? "" : "translate-x-full"}
                ${closeAnim ? "translate-x-full" : ""}
                `}
            >
                <Content onClose={handleClose} />
            </div>
        </BackDrop>
    )
}

export default SideModal