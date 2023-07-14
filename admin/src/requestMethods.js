import axios from "axios";

// const BASE_URL = "https://e-shopz.onrender.com/api/";
const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).currentUser).accessToken;
// console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user));

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
// export const userRequest = axios.create({
//     baseURL: BASE_URL,
//     headers: { token: `Bearer ${TOKEN}` },
// });

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