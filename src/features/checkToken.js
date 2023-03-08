const { default: auth } = require("@/service/auth");





async function checkToken(token){
    try {
        let isTokenValid = await auth.checkToken({token : token});
        return isTokenValid.data.isTokenValid;
    } catch (error) {
        return false
    }
}

export default checkToken;