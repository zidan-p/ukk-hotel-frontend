


import DashboardIcon from "@/components/icons/DashboardIcon"
import PemesaanIcon from "@/components/icons/PemesaanIcon"
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
                        <PemesaanIcon classname={"w-5"} />
                        Pemesanan
                    </Link>
                </li>
            </ul>
        </nav>
    )
}