import getLocalStorage from "@/features/getLocalStorage";
import deleteLocalStorage from "@/features/deleteLocalStorage";
import { IMAGE_SOURCE_URL } from "@/utils/const";
import { isObjectEmpty } from "@/utils/object";
import Image from "next/image";
import { useEffect, useState } from "react"
import Tippy from "@tippyjs/react";
import LogoutIcon from "@/components/icons/LogoutIcon";
import { useRouter } from "next/router";

// import 'tippy.js/dist/tippy.css'; // optional




export default function Header(){

    const [userData, setUserData] = useState({});
    const router = useRouter();

    useEffect(()=>{setData()},[])

    async function setData(){
        try {
            let data = getLocalStorage("userData");
            setUserData(data);
        } catch (error) {
            console.log(error);
        }
    }

    function logout(){
        deleteLocalStorage("token");
        deleteLocalStorage("userData");
        router.push("/login");
    }

    let judul;

    switch (router.pathname) {
        case "/admin":
            judul = "Dashboard Utama"
            break;
        case "/admin/pemesanan" :
            judul = "Daftar Pemesanan"
            break
        case "/admin/user" :
            judul = "Daftar user"
            break
        case "/admin/tipe-kamar" :
            judul = "Daftar tipe-kamar"
            break
        case "/admin/kamar" :
            judul = "Daftar kamar"
            break
        default:
            break;
    }


    if(isObjectEmpty(userData))return (
        <header className="bg-slate-300 animate-pulse">Loading...</header>
    )

    return (
        <header className="py-2 px-8">
            <div className="flex justify-between relative items-center">
                <h1 className="font-semibold text-xl">{judul}</h1>
                <Tippy 
                    content={(
                        <div className="transition-all font-sans bg-white shadow-md rounded  break-words w-[300px] relative">
                            <div className="py-7">
                                {/* TODO : buat suapay properti object center bisa digunakan di gambar ini */}
                                <Image className=" mb-4 w-28 h-28 border object-fit rounded-full mx-auto" src={IMAGE_SOURCE_URL + userData.foto} width={150} height={150}/>
                                <div className="flex  justify-center gap-2">
                                    <p className="font-semibold">{userData.username}</p>
                                    <p className="font-light">{userData.role}</p>
                                </div>
                                <div className="flex justify-center mb-2">
                                    <p className="p-1 px-3 bg-slate-200 rounded-r-full rounded-l-full">{userData.email}</p>
                                </div>
                            </div>
                            <div className="border-t w-full rounded-br rounded-bl overflow-hidden flex">
                                <button onClick={()=>logout()} className="flex justify-center gap-2 bg-red-700 py-1 px-3 basis-1/2 text-white hover:bg-red-600 active:bg-red-500">
                                    <LogoutIcon className={"w-4"} />
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                    maxWidth={600}
                    interactive={true}
                    trigger="click"
                    >
                    <button className="p-0.5 bg-slate-200 hover:bg-slate-300 rounded-full flex items-center px-1">
                        <p className="px-2 font-semibold">{userData.username}</p>
                        <Image className="w-8 h-8 border border-slate-800 rounded-full" src={IMAGE_SOURCE_URL + userData.foto} height={40} width={40} />
                    </button>
                </Tippy>
            </div>
        </header>
    )
}