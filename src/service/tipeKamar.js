import { instanceAxios } from ".";


const tipeKamar = {
    getAllTipeKamar : async () => {
        const data = await instanceAxios.get("/tipe-kamar/")
        return await data.data;
    },
    getTipeKamar : async (idTipeKamar) => {
        const data = await instanceAxios.get("/tipe-kamar/"+idTipeKamar)
        return await data.data;
    },
    getTipeKamarFull : async (idTipeKamar) => {
        const data = await instanceAxios.get("/tipe-kamar/full/"+idTipeKamar)
        return await data.data;
    },
    createTipeKamar : async (formData) => {
        const data = await instanceAxios.post("/tipe-kamar/")
        return await data.data;
    },
    updateTipeKamar : async (idTipeKamar,formData) => {
        const data = await instanceAxios.put("/tipe-kamar/"+idTipeKamar,formData)
        return await data.data;
    },
    deleteTipeKamar : async (idTipeKamar) => {
        const data = await instanceAxios.delete('/tipe-kamar/'+idTipeKamar)
        return await data.data;
    }
}

export default tipeKamar


