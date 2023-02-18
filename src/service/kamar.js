import { instanceAxios } from ".";


const kamar = {
    getAllKamar : async() => {
        const data = await instanceAxios.get("/kamar")
        return await data.data;
    },
    getKamarByTipeKamar : async (idTipeKamar) => {
        const data = await instanceAxios.get("/kamar/tipe-kamar/"+idTipeKamar)
        return await data.data;
    },
    getKamar : async(idKamar) => {
        const data = await instanceAxios.get("/kamar/"+idKamar)
        return await data.data;
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
    searchMany : async (datakamarList) => {
        const data = await instanceAxios.post("/kamar/search",datakamarList)
        return await data.data;
    },
    findAvailableKamar : async (searchIntervalDate) => {
        const data = await instanceAxios.post("/kamar/find-available-kamar",searchIntervalDate)
        return await data.data
    },
    updateKamar : async (idKamar,kamarData) => {
        const data = await instanceAxios.put("/kamar/"+idKamar,kamarData);
        return await data.data
    },
    deleteKamar : async (idKamar) => {
        const data = await instanceAxios.put("/kamar/"+idKamar);
        return await data.data
    }
}


export default kamar;