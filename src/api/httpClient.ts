import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

httpClient.interceptors.request.use(request => {
  console.log('Starting Request', JSON.stringify(request, null, 2));
  return request;
});

httpClient.interceptors.response.use(response => {
  console.log('Response:', JSON.stringify(response.data, null, 2));
  return response;
});
