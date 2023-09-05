import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const publicRequest = axios.create({
    baseURL: BASE_URL
});


let headers = {};
let TOKEN = null;
try {
    const localStorageData = JSON.parse(localStorage.getItem("persist:root"));
    const currentUser = localStorageData && JSON.parse(localStorageData).user && JSON.parse(JSON.parse(localStorageData).user).currentUser;
    TOKEN = currentUser && currentUser.accessToken;
} catch (error) {
    console.log("Error accessing localStorage:", error);
}

if (TOKEN) {
    headers = { token: `Bearer ${TOKEN}` };
}

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers,
});