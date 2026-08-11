import axios from "axios";


const api = axios.create({

    baseURL:"https://ffr-log-backend.onrender.com/"

});


export default api;