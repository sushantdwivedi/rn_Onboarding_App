import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  AUTH_TOKEN,
  OTP_STORE,
  USER_DATA,
  USER_ID,
  GET_PROFILE_SUCCESS,
  AUTH_LOGIN_SUCCESS,
} from '../types';
import http from '../../services/api';
import {fetchDashboardData} from './dashboardAction';
import Toast from 'react-native-toast-message';
import {SIZES} from '../../constants';
import {StatusBar} from 'react-native';
import {getTarget} from './getTargetAction';
/// get login data
export const LoginApi = (postData, check, navigation, cb) => dispatch => {
  cb && cb(true);
  console.log('postData', postData);
  // dispatch({
  //   type: AUTH_LOGIN_SUCCESS,
  //   payload: null,
  // });
  // console.log('authLoginSucess before', response.data.success);

  http
    .post('employee/login', postData)
    .then(async response => {
      if (response.data.success) {
        Toast.show({
          type: 'success',
          text1: 'Login Successful',
          text2: 'Welcome aboard! 👋',
          visibilityTime: 3000,
          autoHide: true,
        });

        await AsyncStorage.setItem('@USER_TOKEN', response.data.token);
        await AsyncStorage.setItem('@USER_ID', response.data.data?._id);

        console.log('response.data', response.data);
        dispatch({
          type: AUTH_TOKEN,
          payload: response.data.token,
        });

        await dispatch({
          type: USER_ID,
          payload: response.data.data._id,
        });
        await dispatch(fetchDashboardData());
        await dispatch(getTarget());
        await dispatch(GetProfile());
        // console.log('dispatch', response.data.data._id);
        // navigation.navigate('MainStack');
        cb && cb(false);
      } else {
        cb && cb(false, response.data);
      }
    })
    .catch(error => {
      console.log('checkmob', error, error.response.data.success);
      Toast.show({
        type: 'error',
        topOffset: StatusBar.currentHeight + SIZES.height * 0.046, // Adjust for status bar

        text1: 'Login Failed',
        text2: 'Invalid credentials. Please try again.',
        visibilityTime: 3000,
        autoHide: true,
      });
      cb && cb(false);
    });
};

// get User profile
export const GetProfile = id => async (dispatch, getState) => {
  // const {userId} = getState().auth;
  const userId = await AsyncStorage.getItem('@USER_ID');
  // console.log('uId', id ? id : userId);

  http
    .get(`/employee/getProfile/${userId}`)

    .then(async response => {
      if (response.data.success) {
        await dispatch({
          type: GET_PROFILE_SUCCESS,
          payload: response.data.data,
        });
        await dispatch({
          type: USER_DATA,
          payload: response.data.data,
        });
        console.log('userData', response.data.data);
      } else {
        console.log('getProfile.response.data.message', response.data.message);
      }
    })
    .catch(error => {
      console.log('getProfile.error.message', error.response.data.message);
    });
};

//// update Employee profile
export const updateEmployeeData =
  (updatedData, navigation) => async (dispatch, getState) => {
    const {userId} = getState().auth;
    console.log('updatedData', updatedData._parts);

    http
      .put(`/update/employee/${userId}`, updatedData, {
        enctype: 'multipart/form-data',
        headers: {
          'Content-Type': 'multipart/form-data',
          'Content-Disposition': 'form-data',
        },
      })
      .then(async response => {
        if (response.data.success) {
          await dispatch(GetProfile());
          Toast.show({
            type: 'success',
            text1: 'Profile Updated!',
            text2: 'Changes saved successfully!',
            visibilityTime: 3000,
            autoHide: true,
          });
          await navigation.goBack();
        } else {
          console.log('Update failed', response.data.message);
        }
      })
      .catch(error => {
        console.error(
          'updateEmployeeData_ERR',
          error.response ? error.response.data : error.message,
          error,
        );
        Toast.show({
          type: 'error',
          text1: 'Profile Update Failed',
          text2: 'Something went wrong. Please try again.',
          visibilityTime: 3000,
          autoHide: true,
        });
      });
  };

export const LogoutUser = () => async dispatch => {
  await AsyncStorage.clear();

  dispatch({
    type: AUTH_TOKEN,
    payload: null,
  });

  dispatch({
    type: USER_DATA,
    payload: null,
  });

  dispatch({
    type: GET_PROFILE_SUCCESS,
    payload: null,
  });
};
