import { instanceAxios } from ".";

const auth = {
    login : async (dataLogin) => {
        const data = await instanceAxios.post("/login", dataLogin);
        return await data.data;
    },
    checkToken : async(dataToken) => {
        const data = await instanceAxios.post("/check-token", dataToken);
        return await data.data;
    }
}

export default auth;