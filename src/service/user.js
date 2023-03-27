import { instanceAxios } from "."

const user = {
    getAllUser : async () => {
        try {
            let data = await instanceAxios.get("/user/")
            return await data.data;
        } catch (error) {
            throw error;
        }
    },

    getAllUserFiltered : async (filterData) => {
        try {
            let data = await instanceAxios.get("/user/filter",{params: filterData});
            return await data.data;
        } catch (error) {
            throw error;
        }
    },
    getUserById : async (id) => {
        try {
            let data = await instanceAxios.get("/user/"+id)
            return await data.data
        } catch (error) {
            throw error;
        }
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
        try {
            let data = await instanceAxios.post("/user",formData,{
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
            })
            return await data.data;
        } catch (error) {
            throw error;
        }
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






