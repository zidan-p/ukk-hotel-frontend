



function getLocalStorage(key){
    if(typeof window !== "undefined"){
        let data = localStorage.getItem(key)
        try {
            return JSON.parse(data);
        } catch (error) {
            return data
        }
    }

    // return ""
}

export default getLocalStorage