import axios from 'axios';

export const BaseAPI = 'https://demo3418193.mockable.io/';

export const DataService = axios.create({ baseURL: BaseAPI });