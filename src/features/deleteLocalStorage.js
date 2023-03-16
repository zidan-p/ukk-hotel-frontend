

function deleteLocalStorage(key){
    if(typeof window !== "undefined"){
        try {
            localStorage.removeItem(key);
            return 1
        } catch (error) {
            return false
        }
    }
}

export default deleteLocalStorage