import AsyncStorage from '@react-native-async-storage/async-storage';
import http from '../../services/api';
import {GET_TARGET} from '../types';

// Action Creator

export const getTarget = () => async (dispatch, getState) => {
  // const {userId} = getState().auth;
  const userId = await AsyncStorage.getItem('@USER_ID');

  http
    .get(`/employee/getAllTarget/${userId}`)

    .then(async response => {
      if (response.data.success) {
        dispatch({
          type: GET_TARGET,
          payload: response.data.data,
        });
        // console.log('targetT', response.data.data);
      } else {
        console.log('GET_TARGET.response.data.message', response.data.message);
      }
    })
    .catch(error => {
      console.log('GET_TARGET.error.message', error.message);
    });
};
