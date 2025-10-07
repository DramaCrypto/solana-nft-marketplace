import { create } from "zustand";
import axios from "axios";

export default create((set) => ({
  data: [],
  loading: false,
  error: null,
  createOrUpdateItem: async (item) => {
    const response = await axios.post("/api/items", item);
    return response.data;
  },
  getItems: async (data) => {
    const response = await axios.get("/api/items?" + new URLSearchParams(data));
    return response.data;
  },
  getItem: async (id) => {
    const response = await axios.get("/api/items/" + id);
    return response.data;
  },
  getOffersByItemId: async (id) => {
    const response = await axios.get("/api/items/" + id + "/offers");
    return response.data;
  },
  getActivitiesByItemId: async (id) => {
    const response = await axios.get("/api/items/" + id + "/activities");
    return response.data;
  },
}));
