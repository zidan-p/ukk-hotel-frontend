


function setLocalStorage(key, value){
    if(typeof window !== "undefined"){
        localStorage.setItem(key, JSON.stringify(value))
    }
}

export default setLocalStorage




