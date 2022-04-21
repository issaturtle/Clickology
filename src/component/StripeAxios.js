import axios from 'axios';

const stripeAxios = axios.create({
	baseURL: 'http://localhost:5001/clickology-63112/us-central1/api',
});
export default stripeAxios;
