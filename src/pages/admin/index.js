import getLocalStorage from "@/features/getLocalStorage"
import { useEffect, useState } from "react"

import MainAdminLayout from "@/layouts/MainAdminLayout";

function AdminIndex(){
    const [tokenString, setTokenString] = useState("");

    useEffect(()=>{
        setToken();
    },[])

    async function setToken(){
        try {
            let token = getLocalStorage("token");
            setTokenString(token);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="bg-slate-100 flex flex-col justify-center text-white h-screen ">
            <div className="w-2/5 mx-auto bg-white p-3 rounded text-black">
            <h1 className="text-3xl font-bold" >Hello wolrd</h1>
            <p>
                hallooo ini adlaah halaman admin index
                ketika anda belum login seharusnya anda tidak bisa
            </p>
            {
            tokenString !== ""
            ?(
                <p className="bg-green-100 mt-2 px-3 p-1 text-sm break-words">{tokenString} </p>
            ):(
                <p className="p-1 px-3 mt-2 text-sm bg-yellow-100">tidak ada token</p> 
            )
            }
            </div>
        </div>
    )
}


AdminIndex.getLayout = function getLayout(page){
    return (
        <MainAdminLayout>
            {page}
        </MainAdminLayout>
    )
}

export default AdminIndex