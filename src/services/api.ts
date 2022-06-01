import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: "https://catfact.ninja/"
})

export default api