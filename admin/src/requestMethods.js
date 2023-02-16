import axios from "axios";

const BASE_URL = "https://e-shopz.onrender.com/api/";
// const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).currentUser).accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
})