import axios from 'axios';
import {AsyncStorage} from '@react-native-community/async-storage';
const fetchClient = () => {
  const defaultOptions = {
    baseURL: 'http://e7e2518149f5.ngrok.io',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the token for any request
  // instance.interceptors.request.use(async (config) => {
  // await AsyncStorage.setItem('token', 'null');
  // const token = await AsyncStorage.getItem('token');
  // config.headers.token = token ? token : '';
  // return config;
  // });

  return instance;
};

export default fetchClient();
