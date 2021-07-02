import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.177.1.104:9000/api"
});

export default apiClient;