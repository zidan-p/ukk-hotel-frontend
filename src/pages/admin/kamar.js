import FilterTool from "@/components/admin/kamar/filter/FilterTool";
import SunIcon from "@/components/icons/SunIcon";
import kamar from "@/service/kamar";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import MainAdminLayout from "@/layouts/MainAdminLayout";
import KamarContent from "@/components/admin/kamar/content/Content";
import SideModal from "@/components/admin/kamar/sideModal/SideModal";




function KamarAdmin(){
    const [filterParams, setFilterParams] = useState({
        //menggunakan underscore suapay dapat terbaca oleh query params
        page : 1,
        limit: 10,
        tgl_awal : 0,
        tgl_akhir: 0,
        keyword: "",
        status: "all" 
    })
    const [loading, setLoading] = useState(true);
    const [pageData, setPageData] = useState({}); 
    const [showSideModal, setShowSideModal] = useState({
        show :false,
        sectionPage : 0 //create
    });
    const [activeKamarId, setActiveKamarId] = useState(null);

    useEffect(()=>{  setData()  },[])

    //untuk pagination
    useEffect(()=>{ setData() },[filterParams.page])


    async function setData(){
        try {
            const data = await kamar.getFiltered(filterParams);
            setPageData(data);
            setLoading(false);
        } catch (error) {
            toast.error(JSON.stringify(error));
        }
    }

    async function onFilterChange(filterName, value){
        setFilterParams((prev)=>({
            ...prev,
            [filterName] : value
        }))
    }

    async function onPageChange(pageNum){
        setFilterParams((prev)=>({
            ...prev,
            "page": pageNum
        }))
        setData();
    }

    async function onStatusChange(status){
        try {
            const result = await pemesanan.updateStatusPemesanan(status);
            setData();
            toast.success("berhasil mengubah status")
        } catch (error) {
            toast.error("gagal mengubah status")
            console.log(error);
        }
    }

    async function onOpenCreateSideModal(){
        setShowSideModal({sectionPage : 0,show:true});
    }

    async function onCloseSideModal(){
        setShowSideModal({sectionPage : 0,show:false});
        await setData(); //supaya setiap data yang diubah dari modal bisa terupdate
    }

    async function onOpenSideModal(idKamar){
        setActiveKamarId(idKamar);
        setShowSideModal({sectionPage : 1,show:true});
    }

    return(
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
                    <h1 className="text-4xl font-bold text-gray-500">{pageData.result.getKamarList.count}</h1>
                    <p className="text-sm text-gray-500">Data ditemukan</p>
                </div>
                <FilterTool 
                    filterParams={filterParams} 
                    onFilterChange={onFilterChange} 
                    onFind={setData} 
                    onOpenCreateModal={onOpenCreateSideModal}
                />
                {pageData.result.getKamarList.count !== 0
                ?(
                <>
                    <KamarContent 
                        contentData={pageData.result.getKamarList} 
                        handleNextStatus={onStatusChange}  
                        onPageChange={onPageChange} 
                        onOpenModal={onOpenSideModal}
                    />
                    <SideModal
                        handleClose={onCloseSideModal} 
                        show={showSideModal} 
                        idKamar={activeKamarId}
                    />
                </>
                ):(
                    <div className="w-full bg-white p-3 font-semibold text-gray-400 text-center">
                        maaf data tidak tersedia
                    </div>
                )}

                {/* modal samping */}
                </>
            )}
        </div>
    )
}


export default KamarAdmin;



KamarAdmin.getLayout = function getLayout(page){
    return (
        <MainAdminLayout>
            {page}
        </MainAdminLayout>
    )
}