import { create } from "zustand";
import axios from "axios";

export default create((set) => ({
  data: [],
  loading: false,
  error: null,
  createCollection: async (collection) => {
    const response = await axios.post("/api/collections", collection);
    return response.data;
  },
  getCollections: async (data) => {
    const response = await axios.get(
      "/api/collections?" + new URLSearchParams(data)
    );
    return response.data;
  },
  getCollection: async (id) => {
    const response = await axios.get("/api/collections/" + id);
    return response.data;
  },
}));
