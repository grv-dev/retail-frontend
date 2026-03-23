import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api/v1",
    });

    export const getProducts = () => api.get("/products");
export const addProduct = (data) => api.post("/products", data);
export const deleteProduct = (id) => api.delete(`/products/${id}`);
export const getProductById = (id) => api.get(`/products/${id}`);
    