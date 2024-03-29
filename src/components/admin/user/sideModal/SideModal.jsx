import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import user from "@/service/user";

//component
import BackDrop from "./BackDrop";
import EditForm from "./edit/EditForm";
import CreateForm from "./create/CreateForm";
import DeleteForm from "./delete/DeleteForm";
import ShowForm from "./show/ShowForm";




const SECTION = ["create","show", "edit", "delete"];
function SideModal({handleClose, show, idUser}){
    const [closeAnim, setCloseAnim] = useState(false);
    const [openAnim, setOpenAnim] = useState(false);
    const [openState, setOpenState] = useState(false);
    const [userData, setUserData] = useState({});
    const [activePage, setActivePage] = useState(show.sectionPage ?? 0); //artinya create// note : karena ini unmounted, maka initial state nya akan

    useEffect(()=>{
        if(show.show){
            openModal();
            changePage(show.sectionPage)
        }
        else {closeModal();}
    },[show])

    useEffect(()=>{
        if(idUser == null || idUser === undefined) return
        getUserData();
    },[idUser])

    async function getUserData(){
        if(show.sectionPage === 0) return; //bilan section page adalah creata maka tidak perlu mengambil data
        try {
            const result = await user.getUserById(idUser);
            setUserData(result.result.getUserOne.data);
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
        setCloseAnim(true);
        setTimeout(()=>{
            setOpenState(false);
            setCloseAnim(false);
            changePage(0);
        },450)
    }

    function changePage(pageNumber){
        setActivePage(pageNumber);
    }

    return(
        // <></>
        <BackDrop 
            onClose={handleClose} 
            className={`
                transition-all ease-out overflow-x-hidden flex 
                flex-row-reverse bg-opacity-0 -z-10
                ${openState? " bg-opacity-40 z-10" : "-z-10 bg-opacity-0"}
                ${openAnim ? "z-10 bg-opacity-40" : ""}
                ${closeAnim ? "bg-opacity-0" : ""}
                `}
                >
            <div 
                className={`
                transition-all basis-1/4 grow-0 overflow-x-auto flex flex-col
                bg-white rounded-l p-3 
                ${openState ? "" : "translate-x-full"}
                ${closeAnim ? "translate-x-full" : ""}
                `}
            >
                {(()=>{
                    if(activePage === 0) 
                    return <CreateForm onChangePage={changePage} dataUser={userData} onClose={handleClose} />
                    else if (activePage === 1)
                    return <ShowForm onChangePage={changePage} dataUser={userData} onClose={handleClose} />
                    else if (activePage === 2)
                    return <EditForm onChangePage={changePage} dataUser={userData} onClose={handleClose} />
                    else if(activePage === 3)
                    return <DeleteForm onChangePage={changePage} dataUser={userData} onClose={handleClose} />
                    else return (
                        <h1>Data abda tidak ada</h1>
                    )
                })()}
            </div>
        </BackDrop>
    )
}


export default SideModal;