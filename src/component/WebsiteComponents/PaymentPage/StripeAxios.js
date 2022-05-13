import axios from "axios";
/**
 * url for firebase server queries
 */
const stripeAxios = axios.create({
  baseURL: "http://localhost:5001/clickology-63112/us-central1/api",
});
export default stripeAxios;
