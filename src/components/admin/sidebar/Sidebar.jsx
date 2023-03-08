


import DashboardIcon from "@/components/icons/DashboardIcon"
import { Adamina } from "@next/font/google"
import Link from "next/link"
const adamina = Adamina({subsets : ["latin"],weight : ["400"]})


export default function Sidebar({className}){


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
                    <Link href={"/admin"} className="text-slate-500 transition py-4 px-5 hover:bg-slate-700 flex gap-2">
                        <DashboardIcon classname={"w-5"} />
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link href={"/admin"} className="bg-slate-700 transition py-4 px-5 hover:bg-slate-700 flex gap-2">
                        <DashboardIcon classname={"w-5"} />
                        Dashboard
                    </Link>
                </li>
            </ul>
        </nav>
    )
}