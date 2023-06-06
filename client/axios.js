import axios from 'axios';
import Config from 'react-native-config';

export const instance = axios.create({
  baseURL: `http://${Config.HOST}:${Config.PORT}`,
});
