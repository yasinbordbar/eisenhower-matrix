import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

const API = {
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  delete: axios.delete,
};
export default API;
