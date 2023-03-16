import UserContent from "@/components/admin/tipeKamar/content/Content";
import SunIcon from "@/components/icons/SunIcon"
import MainAdminLayout from "@/layouts/MainAdminLayout"
import tipeKamar from "@/service/tipeKamar";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";





function TipeKamar(){
    const [filterParams, setFilterParams] = useState({
        page : 1,
        limit: 10,
        keyword : "",
        tgl_awal : 0,
        tgl_akhir: 0,
    })
    const [loading, setLoading] = useState(true);
    const [pageData, setPageData] = useState({}); 


    useEffect(()=>{
        setDataPage();
    },[])

    async function setDataPage(){
        console.log("data user di cari")
        try {
            const data = await tipeKamar.getAllTipeKamarFiltered(filterParams);
            console.log(data);
            setPageData(data);
            setLoading(false);
        } catch (error) {
            console.log(error)
            toast.error("gagal mengambil data user");
        }
    }

    async function openSideModal(){

    }


    async function onPageChange(){}


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
                    <button className="text-white bg-slate-800 px-3 py-1 rounded mb-3">Tambah</button>
                    <UserContent 
                        contentData={pageData.result.getTipeKamarList} 
                        onPageChange={onPageChange} 
                        onOpenModal={openSideModal}
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