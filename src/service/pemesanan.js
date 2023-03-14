import { instanceAxios } from ".";


const pemesanan = {
    getAllPemesanan : [],
    getAllPemesaanFull : [],
    getpemesanan: [],
    getpemesananFull: async (idPemesanan) => {
        try {
            const data = await instanceAxios.get("/pemesanan/find/full/"+idPemesanan);
            return await data.data;
        } catch (error) {
            return error;
        }
    },
    getPemesananFilter: async (filterData) => {
        const data = await instanceAxios.get("/pemesanan/filter",{params: filterData});
        return await data.data
    },
    getPemesananByNomorPemesanan : async (nomorPemesanan) => {
        const data = await instanceAxios.get("/pemesanan/nomor-pemesanan/"+nomorPemesanan);
        return await data.data;
    },
    createPemesanan : async (params) => {
        const data = await instanceAxios.post("/pemesanan/transaction/", params);
        return await data.data;
    },
    createPemesananDirect : [],
    acceptPemesaanan : [],
    updatePemesanan: async ({id, dataSend}) => {
        try {
            const data = await instanceAxios.put("/pemesanan/"+id,dataSend)
            return await data.data;
        } catch (error) {
            return error
        }
    },
    updateStatusPemesanan: async ({id, status}) => {
        try {
            const data = await instanceAxios.put("/pemesanan/status/"+id,{status : status})
            return await data.data;
        } catch (error) {
            throw new Error(error);
            return error;
        }
    },
    deletePemesanan : async (id) => {
        try {
            const data = await instanceAxios.delete("/pemesanan/"+id);
            return await data.data;
        } catch (error) {
            return error;
        }
    }
}

export default pemesanan