import axios from "axios";

const api = axios.create({
  baseURL: "https://ssg-backend.herokuapp.com/api/contents",
});

export default api;
