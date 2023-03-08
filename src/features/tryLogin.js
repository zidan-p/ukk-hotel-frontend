import auth from "@/service/auth";
import setLocalStorage from "./setLocalStorage";


async function tryLogin(dataForm){
    const data = await auth.login(dataForm);
    if(typeof window !== "undefined"){
        localStorage.setItem(
            "token", 
            data.result.login.token    
        )
        setLocalStorage("userData", data.result.login.data)
    }
    return {
        success : data.success,
        data : data.result.login
    }

}


export default tryLogin