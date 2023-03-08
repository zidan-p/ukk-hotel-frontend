import getLocalStorage from "@/features/getLocalStorage";
import { isObjectEmpty } from "@/utils/object";
import { useEffect, useState } from "react"







export default function Header(){

    const [userData, setUserData] = useState({});

    useEffect(()=>{setData},[])

    async function setData(){
        try {
            let data = getLocalStorage("userData");
            setUserData(data);
        } catch (error) {
            console.log(error);
        }
    }

    if(isObjectEmpty(userData))return (
        <header className="bg-slate-300 animate-pulse">Loading...</header>
    )

    return (
        <header>
            k
        </header>
    )
}