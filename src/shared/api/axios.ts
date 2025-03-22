import axios from "axios";

const hostUrl = "https://fakestoreapi.com";

export const axiosClient = axios.create({
  baseURL: hostUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
