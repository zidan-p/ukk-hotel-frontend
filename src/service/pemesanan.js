import { instanceAxios } from ".";


const pemesanan = {
    getAllPemesanan : [],
    getAllPemesaanFull : [],
    getpemesanan: [],
    getpemesananFull: [],
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
    deletePemesanan : []
}

export default pemesanan