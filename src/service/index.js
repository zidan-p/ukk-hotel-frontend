import axios from "axios"


//token disimpan disini
// let tokenGlobal;

// Default config options
const defaultOptions = {
    baseURL: "http://localhost:3005",
    headers: {
        'Content-Type': 'application/json',
    },
};

// Create instance
const instanceAxios = axios.create(defaultOptions);

// Set the AUTH token for any request
instanceAxios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config
})



export {
    instanceAxios
}

