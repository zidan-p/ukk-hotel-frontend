import MainAdminLayout from "@/layouts/MainAdminLayout"
import { useEffect, useState } from "react"


//component
import FilterTool from "@/components/admin/pemesanan/filterTool/FilterTool"
import PemesananContent from "@/components/admin/pemesanan/content/Content"
import pemesanan from "@/service/pemesanan"
import SunIcon from "@/components/icons/SunIcon"
import SideModal from "@/components/admin/pemesanan/sideModal/SideModal"
import { toast } from "react-toastify"







function AdminPemesanan(){
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
    const [showSideModal, setShowSideModal] = useState(false);
    const [activePemesananId, setActivePemesananId] = useState(null);

    useEffect(()=>{  setData()  },[])


    async function setData(){
        try {
            const data = await pemesanan.getPemesananFilter(filterParams);
            setPageData(data);
            setLoading(false);
        } catch (error) {
            setPageData(error);
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

    async function onCloseSideModal(){
        setShowSideModal(false);
        await setData(); //supaya setiap data yang diubah dari modal bisa terupdate
    }

    async function onOpenSideModal(idPemesanan){
        setActivePemesananId(idPemesanan);
        setShowSideModal(true);
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
                    <h1 className="text-4xl font-bold text-gray-500">{pageData.result.getPemesananList.count}</h1>
                    <p className="text-sm text-gray-500">Data ditemukan</p>
                </div>
                <FilterTool filterParams={filterParams} onFilterChange={onFilterChange} onFind={setData} />
                {pageData.result.getPemesananList.count !== 0
                ?(
                <>
                    <PemesananContent 
                        contentData={pageData.result.getPemesananList} 
                        handleNextStatus={onStatusChange}  
                        onPageChange={onPageChange} 
                        onOpenModal={onOpenSideModal}
                    />
                    <SideModal 
                        handleClose={onCloseSideModal} 
                        show={showSideModal} 
                        idPemesanan={activePemesananId}
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

export default AdminPemesanan


AdminPemesanan.getLayout = function getLayout(page){
    return (
        <MainAdminLayout>
            {page}
        </MainAdminLayout>
    )
}