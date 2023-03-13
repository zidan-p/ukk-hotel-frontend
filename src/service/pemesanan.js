import { instanceAxios } from ".";


const pemesanan = {
    getAllPemesanan : [],
    getAllPemesaanFull : [],
    getpemesanan: [],
    getpemesananFull: [],
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
    updatePemesanan: [],
    updateStatusPemesanan: async ({id, status}) => {
        try {
            const data = await instanceAxios.put("/pemesanan/status/"+id,{status : status})
            return await data.data;
        } catch (error) {
            return error;
        }
    },
    deletePemesanan : []
}

export default pemesanan