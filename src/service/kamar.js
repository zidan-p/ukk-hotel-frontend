import { instanceAxios } from ".";


const kamar = {
    getAllKamar : async() => {
        try {
            const data = await instanceAxios.get("/kamar")
            return await data.data;
        } catch (error) {
            throw error;
        }
    },
    getFiltered : async (filterData) => {
        try {
            const data = await instanceAxios.get("/kamar/filtered", {params : filterData});
            return await data.data;
        }catch(error){
            throw error;
        }
    },
    getKamarByTipeKamar : async (idTipeKamar) => {
        const data = await instanceAxios.get("/kamar/tipe-kamar/"+idTipeKamar)
        return await data.data;
    },
    getKamar : async(idKamar) => {
        try {
            const data = await instanceAxios.get("/kamar/"+idKamar)
            return await data.data;
        } catch (error) {
            throw error;
        }
    },
    createManyWithTipeKamarId : async(idTipeKamar,dataKamar) => {
        const data = await instanceAxios.post("/kamar/create-many-with-tipe-kamar"+idTipeKamar,dataKamar)
        return await data.data;
    },
    createOneWithTipeKamar : async (idTipeKamar,dataKamar) => {
        const data = await instanceAxios.post("/kamar/create-one-with-tipe-kamar"+idTipeKamar,dataKamar)
        return await data.data;
    },
    createBulkWithTipeKamar : async (idTipeKamar,dataKamar) => {
        const data = await instanceAxios.post("/kamar/create-bulk-with-tipe-kamar/"+idTipeKamar,dataKamar)
        return await data.data
    },
    createBulkManyWithTipeKamar : async (idTipeKamar, dataKamar) => {
        try {
            const data = await instanceAxios.post("/kamar/create-bulk-many-with-tipe-kamar/"+idTipeKamar, dataKamar);
            return await data.data;
        } catch (error) {
            throw error;
        }
    },
    searchMany : async (datakamarList) => {
        const data = await instanceAxios.post("/kamar/search",datakamarList)
        return await data.data;
    },
    findAvailableKamar : async (searchIntervalDate) => {
        const data = await instanceAxios.post("/kamar/find-available-kamar",searchIntervalDate)
        return await data.data
    },
    /** dataCari : {intervalDate , TipeKamarId} */
    findAvailableKamarByTipeKamar : async (dataCari) => {
        const data = await instanceAxios.post("/kamar/find-available-kamar-by-tipe-kamar",dataCari)
        return await data.data
    },
    updateKamar : async (idKamar,kamarData) => {
        try {
            const data = await instanceAxios.put("/kamar/"+idKamar,kamarData);
            return await data.data
        } catch (error) {
            throw error;
        }
    },
    deleteKamar : async (idKamar) => {
        try {
            const data = await instanceAxios.delete("/kamar/"+idKamar);
            return await data.data
        } catch (error) {
            throw error;
        }
    }
}


export default kamar;