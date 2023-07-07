import axios from 'axios';
import Config from 'react-native-config';

console.log(Config);
export const instance = axios.create({
  baseURL: `http://${Config.HOST}:${Config.PORT}`,
});
