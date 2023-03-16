import UserContent from "@/components/admin/user/content/Content";
import FilterTool from "@/components/admin/user/filter/FilterTool";
import SunIcon from "@/components/icons/SunIcon";
import MainAdminLayout from "@/layouts/MainAdminLayout";
import user from "@/service/user";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";





function User(){
    const [filterParams, setFilterParams] = useState({
        page : 1,
        limit: 10,
        keyword : "",
        tgl_awal : 0,
        tgl_akhir: 0,
        role : "all"
    })
    const [loading, setLoading] = useState(true);
    const [pageData, setPageData] = useState({}); 
    const [showSideModal, setShowSideModal] = useState(false);
    const [activeUserId, setactiveUserId] = useState(null);

    useEffect(()=>{ setDataUser() },[])


    async function setDataUser(){
        console.log("data user di cari")
        try {
            const data = await user.getAllUserFiltered(filterParams);
            setPageData(data);
            setLoading(false);
        } catch (error) {
            toast.error("gagal mengambil data user");
        }
    }

    function onfilterChange(name, value){
        setFilterParams((prev) =>({
            ...prev,
            [name] : value
        }))
    }

    async function openSideModal(){}


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
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-500">{pageData.result.getUserList.count}</h1>
                    <p className="text-sm text-gray-500">Data ditemukan</p>
                </div>
                <FilterTool 
                    filterParams={filterParams} 
                    onFilterChange={onfilterChange} 
                    onFind={setDataUser} 
                />
                {pageData.result.getUserList.count !== 0
                ?(
                    <UserContent 
                        contentData={pageData.result.getUserList} 
                        onPageChange={onPageChange} 
                        onOpenModal={openSideModal}
                    />
                ):(
                    <div className="w-full bg-white p-3 font-semibold text-gray-400 text-center">
                        maaf data tidak tersedia
                    </div>
                )}
                </>
            )}
        </div>
    )
}

export default User;

User.getLayout = function getLayout(page){
    return (
        <MainAdminLayout>
            {page}
        </MainAdminLayout>
    )
}