import { instanceAxios } from "."

const user = {
    getAllUser : async () => {
        let data = await instanceAxios.get("/user/")
        return await data.data;
    },

    getUserById : async (id) => {
        let data = await instanceAxios.get("/user"+id)
        return await data.data
    },

    getUserByUsername : async (username) => {
        let data = await instanceAxios.get("/user/"+username)
        return await data.data
    },

    getAllAdmin : async () => {
        let data = await instanceAxios.get("/user/role/admin")
        return await data.data
    },

    getAllResepsionis : async () => {
        let data = await instanceAxios.get("/user/role/resepsionis")
        return await data.data;
    },

    createUser : async (formData) => {
        let data = await instanceAxios.post("/user",formData)
        return await data.data;
    },
    updateUser : async (id,formData) => {
        let data = await instanceAxios.put("/user/"+id,formData)
        return await data.data
    },

    deleteUser : async (id) => {
        let data = await instanceAxios.delete("/user/"+id)
        return await data.data
    },
}

export default user






