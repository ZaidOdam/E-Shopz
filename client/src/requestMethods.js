import axios from "axios";

const BASE_URL = "https://e-shopz.onrender.com/api/";
// const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzI1MjA4NTZlOWI1ZDljZDMyNTA5YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTAwOTIzNywiZXhwIjoxNjY5MjY4NDM3fQ.zv4YLOFc-0tc6byjuXskFiCEYVRTlR5X5vZT7SS4gpk";

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
})