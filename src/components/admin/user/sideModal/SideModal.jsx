





function SideModal(){
    const [closeAnim, setCloseAnim] = useState(false);
    const [openAnim, setOpenAnim] = useState(false);
    const [openState, setOpenState] = useState(false);
    const [userData, setUserData] = useState({});
    const [activePage, setActivePage] = useState(0); //artinya info

    useEffect(()=>{
        if(show){openModal()}
        else {closeModal();}
    },[show])

    useEffect(()=>{
        if(idPemesanan == null) return
        getUserData();
    },[idPemesanan])

    async function getUserData(){
        try {
            const result = await pemesanan.getpemesananFull(idPemesanan);
            setUserData(result.result.getPemesananOne.data);
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
            setActivePage(0);
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
                {(()=>{
                    if(activePage === 0) 
                    return <Content onChangePage={changePage} dataPemesanan={userData} onClose={handleClose} />
                    else if (activePage === 1)
                    return <EditForm onChangePage={changePage} dataPemesanan={userData} onClose={handleClose} />
                    else if (activePage === 2)
                    return <DeletePemesanan onChangePage={changePage} dataPemesanan={userData} onClose={handleClose} />
                    else return (
                        <h1>Data abda tidak ada</h1>
                    )
                })()}
            </div>
        </BackDrop>
    )
}


return SideModal;