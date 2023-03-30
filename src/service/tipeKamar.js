import { instanceAxios } from ".";


const tipeKamar = {
    getAllTipeKamar : async () => {
        const data = await instanceAxios.get("/tipe-kamar/")
        return await data.data;
    },
    getAllTipeKamarFiltered : async (filterData) => {
        const data = await instanceAxios.get("/tipe-kamar/filter",{params: filterData})
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
        //NOTE : untuk create tipe kamar belum divalidasi, sehingga semua data bisa dikirim
        //bahkan data kosongpun
        try {
            const data = await instanceAxios.post("/tipe-kamar/", formData,{
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
            });
            return await data.data;
        } catch (error) {
            throw error;    
        }
    },
    updateTipeKamar : async (idTipeKamar,formData) => {
        try {
            const data = await instanceAxios.put("/tipe-kamar/"+idTipeKamar,formData)
            return await data.data;
        } catch (error) {
            throw error;
        }
    },
    deleteTipeKamar : async (idTipeKamar) => {
        try {
            const data = await instanceAxios.delete('/tipe-kamar/'+idTipeKamar)
            return await data.data;
        } catch (error) {
            throw error;
        }
    }
}

export default tipeKamar


