//font
import { Adamina } from "@next/font/google"
const adamina = Adamina({subsets : ["latin"],weight : ["400"]})


//component
import LoginInput from "@/components/login/LoginInput"
import { useEffect, useState } from "react"


//feature
import auth from "@/service/auth"
import { useRouter } from "next/router"
import Link from "next/link"
import tryLogin from "@/features/tryLogin"
import getLocalStorage from "@/features/getLocalStorage"
import checkToken from "@/features/checkToken"


function Login(){
    const router = useRouter();
    const [dataForm, setDataForm] = useState({
        username : "",
        password : ""
    });
    // const [errorBag, setErrorBag] = useState({});
    const [errorData, setErrorData] = useState({
        isError : false,
        errorBag: {}
    })

    useEffect(()=>{
        checkLogin();
    },[])

    async function checkLogin(){
        let data = getLocalStorage("token");
        if(data === "" ) return router.replace("/login");
        if((await checkToken(data)))return router.replace("/admin");
    }

    async function login(e){
        e.preventDefault();
        try {
            let result = await tryLogin(dataForm);
            if(!result.success)throw {...result.data}
            router.push("/admin");
        } catch (error) {
            console.log(error?.response?.data?.error || "ada masalah")
            setErrorData({
                isError: true,
                errorBag: error?.response?.data?.error || "ada masalah"
            })
        }
    }

    function handleChange(e){
        let {name, value} = e.target;
        setDataForm((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    return (
        <div 
        className="bg-slate-800 h-screen  flex flex-col justify-center"
        style={{
            backgroundImage :`url("/images/vektor_bintang.png")`
        }}
        >
            <div className="bg-white w-2/5 rounded mx-auto my-auto p-3 px-6 border-l-8 border-slate-600">
                <h1 className={`text-3xl font-semibold text-slate-900 ${adamina.className}`}>Login</h1>
                <p className="text-gray-600 text-sm mb-3">silahkan login..</p>
                {errorData.isError
                ?(
                    <ul className=" flex flex-col bg-red-50 p-2 rounded text-sm text-red-700">
                        {errorData.errorBag}
                    </ul>
                )
                :""
                }
                <form onSubmit={login} className="border-t py-2 pt-4 mt-3">
                    <div className="mb-6">
                        <label className="text-sm font-semibold text-gray-600 block" htmlFor="">Username</label>
                        <input onChange={handleChange} value={dataForm?.username} name="username" className="w-full py-1 px-3 border outline-none focus-within:border-slate-600 focus:shadow rounded" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="text-sm font-semibold text-gray-600 block" htmlFor="">password</label>
                        <input onChange={handleChange} value={dataForm?.password} name="password" className="w-full py-1 px-3 border outline-none focus-within:border-slate-600 focus:shadow rounded" type="password" />
                    </div>
                    <div className="flex justify-between items-end">
                        <button className="bg-slate-800 hover:bg-slate-700 active:bg-slate-600  text-white py-1 px-8 rounded" type="submit">Login</button>
                        <Link className="text-sm text-gray-500 hover:underline" href={"/"} >
                            kembali ke halaman utama
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login