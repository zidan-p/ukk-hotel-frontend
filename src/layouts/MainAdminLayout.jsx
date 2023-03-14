import Header from '@/components/admin/header/Header';
import Sidebar from '@/components/admin/sidebar/Sidebar';
import SideContainer from '@/components/admin/container/SideContainer';


import { Roboto } from '@next/font/google'
import getLocalStorage from '@/features/getLocalStorage';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import checkToken from '@/features/checkToken';
import SunIcon from '@/components/icons/SunIcon';

const roboto = Roboto({
    subsets: ['latin'],
    variable: "--font-roboto",
    weight: ["100", "300", "400", "500", "700", "900"]
})

export default function MainAdminLayout({children}){
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        checkLogin()
    },[])
  
    async function checkLogin(){
        let data = getLocalStorage("token");
        if(data === "" ) return router.replace("/login");
        if(!(await checkToken(data)))return router.replace("/login");
        setLoading(false);
    }

    if(loading) return (
        <div className={`${roboto.variable} font-sans h-screen text-white bg-slate-800 flex flex-col justify-center`}>
            <div className="max-w-lg bg-slate-700 rounded p-4 mx-auto flex gap-2">
                <SunIcon className={"animate-spin"} />
                <span>
                Loading
                </span>
            </div>
        </div>
    )

    return (
        <div className={`${roboto.variable} font-sans max-h-screen h-screen max-w-full overflow-x-hidden w-full flex`}>
            <Sidebar className={"basis-1/6 py-2 shrink-0"} />
            <SideContainer className={`w-full shrink overflow-auto shadow bg-white`}>
                <Header/>
                {children}
            </SideContainer>
        </div>
    )
}
