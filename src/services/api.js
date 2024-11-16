import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
// import Config from 'react-native-config';
// import {getUniqueId} from 'react-native-device-info';

export const baseURL = 'https://server.apnathali.com/api/v1/';
export const http2 = 'https://thalibucket.s3.ap-south-1.amazonaws.com/';

const http = axios.create({
  baseURL: baseURL,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // ApiToken: 'U0RvR2x0SEZ Ya0ljSzgxUkFCUHZpRUpvREFlb0FuTFBPSFA=',
  },
});
// export const http2 = 'https://medzine.svisf.in/'
http.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('@USER_TOKEN');
    // const signup_token = await AsyncStorage.getItem('@SIGNUP_TOKEN');
    // if(signup_token) config.headers.Authorization = `Bearer ${signup_token}`;
    // console.log('usertoken', token);
    if (token) config.headers.Authorization = `Bearer ${token}`;
    // if (token) config.headers.Authorization = token;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
export default http;
