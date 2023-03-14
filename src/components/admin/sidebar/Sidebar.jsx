


import BoxIcon from "@/components/icons/BoxIcon"
import DashboardIcon from "@/components/icons/DashboardIcon"
import PemesaanIcon from "@/components/icons/PemesaanIcon"
import TagIcon from "@/components/icons/TagIcon"
import UserIcon from "@/components/icons/UserIcon"
import { Adamina } from "@next/font/google"
import Link from "next/link"
import { useRouter } from "next/router"
const adamina = Adamina({subsets : ["latin"],weight : ["400"]})


export default function Sidebar({className}){
    const router = useRouter();

    return (
        <nav className={`${className} bg-slate-800 text-white`}>
            <div className="px-3">
                <h1 
                className={`${adamina.className} text-center font-bold text-2xl py-3 border-b border-b-slate-500`}>
                    Admin
                </h1>
            </div>
            <ul className="flex flex-col">
                <li>
                    <Link 
                    href={"/admin"} 
                    className={`
                    ${router.pathname == "/admin" ? "bg-slate-700" : "text-slate-500"}
                     transition py-4 px-5 hover:bg-slate-700 flex gap-2
                    `}>
                        <DashboardIcon classname={"w-5"} />
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link 
                    href={"/admin/pemesanan"} 
                    className={`
                    ${router.pathname.includes("/admin/pemesanan") ? "bg-slate-700" : "text-slate-500"}
                     transition py-4 px-5 hover:bg-slate-700 flex gap-2
                    `}>
                        <PemesaanIcon className={"w-5"} />
                        Pemesanan
                    </Link>
                </li>
                <li>
                    <Link 
                    href={"/admin/user"} 
                    className={`
                    ${router.pathname.includes("/admin/user") ? "bg-slate-700" : "text-slate-500"}
                     transition py-4 px-5 hover:bg-slate-700 flex gap-2
                    `}>
                        <UserIcon className={"w-5"} />
                        User
                    </Link>
                </li>
                <li>
                    <Link 
                    href={"/admin/tipe-kamar"} 
                    className={`
                    ${router.pathname.includes("/admin/tipe-kamar") ? "bg-slate-700" : "text-slate-500"}
                     transition py-4 px-5 hover:bg-slate-700 flex gap-2
                    `}>
                        <TagIcon className={"w-5"} />
                        Tipe Kamar
                    </Link>
                </li>
                <li>
                    <Link 
                    href={"/admin/kamar"} 
                    className={`
                    ${router.pathname.includes("/admin/kamar") ? "bg-slate-700" : "text-slate-500"}
                     transition py-4 px-5 hover:bg-slate-700 flex gap-2
                    `}>
                        <BoxIcon className={"w-5"} />
                        Kamar
                    </Link>
                </li>
            </ul>
        </nav>
    )
}