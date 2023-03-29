import MainAdminLayout from "@/layouts/MainAdminLayout"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

//component
import TipeKamarContent from "@/components/admin/tipeKamar/content/Content";
import FilterTool from "@/components/admin/tipeKamar/filter/FilterTool";
import SunIcon from "@/components/icons/SunIcon"

//service
import tipeKamar from "@/service/tipeKamar";
import SideModal from "@/components/admin/tipeKamar/sideModal/SideModal";




function TipeKamar(){
    const [filterParams, setFilterParams] = useState({
        page : 1,
        limit: 10,
        keyword : "",
        tgl_awal : 0,
        tgl_akhir: 0,
    })
    const [showSideModal, setShowSideModal] = useState({
        show :false,
        sectionPage : 0 //create
    });
    const [loading, setLoading] = useState(true);
    const [pageData, setPageData] = useState({}); 
    const [activeTipeKamarId, setActiveTipeKamarId] = useState(null);


    useEffect(()=>{
        setDataTipeKamar();
    },[])

    async function setDataTipeKamar(){
        try {
            const data = await tipeKamar.getAllTipeKamarFiltered(filterParams);
            setPageData(data);
            setLoading(false);
        } catch (error) {
            console.log(error)
            toast.error("gagal mengambil data tipe kamar");
        }
    }

    function onfilterChange(name, value){
        setFilterParams((prev) =>({
            ...prev,
            [name] : value
        }))
    }

    async function onOpenCreateSideModal(){
        setShowSideModal({sectionPage : 0,show:true});
    }

    function onOpenShowSideModal(idTipeKamar){
        setShowSideModal({sectionPage: 1, show: true});
        setActiveTipeKamarId(idTipeKamar);
    }

    function onCloseSideModal(){
        setShowSideModal({sectionPage: 0 ,show:false});
        setDataTipeKamar();
    }

    async function onPageChange(page){
        onfilterChange("page", page);
    }

    return (
        <div className={`transition bg-slate-100 h-screen px-16 py-2  ${loading ? "opacity-0" : ""}`}>
            {loading 
            ? (
                <div className="max-w-lg bg-slate-700 rounded p-4 mx-auto flex gap-2">
                    <SunIcon className={"animate-spin"} />
                    <span>Loading</span>
                </div>
            ):(
                <>
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-gray-500">{pageData.result.getTipeKamarList.count}</h1>
                        <p className="text-sm text-gray-500">Data ditemukan</p>
                    </div>
                    <FilterTool 
                    filterParams={filterParams} 
                    onFilterChange={onfilterChange} 
                    onOpenCreateModal={onOpenCreateSideModal}
                    onFind={setDataTipeKamar} 
                />
                    <TipeKamarContent 
                        contentData={pageData.result.getTipeKamarList} 
                        onPageChange={onPageChange} 
                        onOpenModal={onOpenShowSideModal}
                    />
                    <SideModal
                        handleClose={onCloseSideModal} 
                        show={showSideModal}  //terisi boolean dan section nganu
                        idTipeKamar={activeTipeKamarId}
                    />
                </>
            )}
        </div>
    )
}

export default TipeKamar



TipeKamar.getLayout = function getLayout(page){
    return (
        <MainAdminLayout>
            {page}
        </MainAdminLayout>
    )
}