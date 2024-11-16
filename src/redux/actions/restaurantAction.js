// import http from '../../services/api';

// export const AddRestaurantApi = formData => dispatch => {
//   // cb && cb(true);
//   console.log('AddRestaurantApi formData ', formData);
//   http
//     .post('employee/onboardRestaurant', formData, {
//       enctype: 'multipart/form-data',
//       headers: {
//         'Content-Type': 'multipart/form-data',
//         'Content-Disposition': 'form-data',
//       },
//     })
//     .then(async response => {
//       // console.log('hogaya', response.data);
//       // console.log(response.data.token);

//       if (response.data.success) {
//         // navigation && navigation.goBack();
//         console.log(response.data.message);
//         // cb && cb(false);
//       } else {
//         cb && cb(false, response.data);
//       }
//     })
//     .catch(error => {
//       console.log('error.response', error, error.response);
//       cb && cb(false);
//     });
// };

import http from '../../services/api';
import axios from 'axios';
import {
  RESTAURANT_APP_INSTALLED,
  RESTAURANT_PENDING,
  RESTAURANT_FULLY_ONBOARD,
} from '../types';
import {fetchDashboardData} from './dashboardAction';
import Toast from 'react-native-toast-message';

export const AddRestaurantApi = (formData, navigation) => async dispatch => {
  const handleNavigation = onboardingStatus => {
    let statusTab;
    console.log('onboardingStatus handleNavigation', onboardingStatus);
    switch (onboardingStatus) {
      case 'PENDING':
        statusTab = 'Pending';
        break;
      case 'APP_INSTALLED':
        statusTab = 'Installed';
        break;
      case 'FULLY_ONBOARD':
        statusTab = 'Onboarded';
        break;
    }
    console.log('statusTab', statusTab);
    navigation.navigate('BottomTab', {
      screen: 'Restaurants',
      params: {
        screen: statusTab,
      },
    });
  };
  console.log('formData API', formData);
  http
    .post('employee/onboardRestaurant', formData, {
      enctype: 'multipart/form-data',
      headers: {
        'Content-Type': 'multipart/form-data',
        'Content-Disposition': 'form-data',
      },
    })

    .then(async response => {
      console.log('Response:', response?.data?.data?.onboardingStatus);
      const onboardingStatus = response?.data?.data?.onboardingStatus;
      if (response.data.success) {
        // console.log('Success message:', response.data.message);
        dispatch(RestaurantAppInstalled());
        dispatch(RestaurantPending());
        dispatch(RestaurantFullyOnboard());
        dispatch(fetchDashboardData());
        handleNavigation(onboardingStatus);
        // navigation.navigate('BottomTab');
        // navigation.navigate('BottomTab', {
        //   screen: 'Restaurants',
        //   params: {
        //     screen: 'Onboarded',
        //   },
        // });

        Toast.show({
          type: 'success',
          text1: 'Success!',
          text2: 'Restaurant is now live!',
          visibilityTime: 3000,
          autoHide: true,
        });
      }
    })
    .catch(error => {
      console.error('Error:', error.message);
      console.error('Error Response:', error.response?.data);
      Toast.show({
        type: 'error',
        text1: 'Oops! Something went wrong.',
        text2: 'Please give it another try',
        visibilityTime: 3000,
        autoHide: true,
      });
    });
};

export const UpdateRestaurantAPI =
  (formDataToSubmit, navigation, resData) => dispatch => {
    console.log('UpdateRestaurantAPI formData:', formDataToSubmit);
    console.log('resData._id:', resData);

    http
      .put(`employee/updateRestaurant/${resData._id}`, formDataToSubmit, {
        enctype: 'multipart/form-data',
        headers: {
          'Content-Type': 'multipart/form-data',
          'Content-Disposition': 'form-data',
        },
      })

      .then(response => {
        console.log('Response:', response.data);

        if (response.data.success) {
          console.log('Success message:', response.data.message);
          dispatch(RestaurantAppInstalled());
          dispatch(RestaurantPending());
          dispatch(RestaurantFullyOnboard());
          dispatch(fetchDashboardData());

          navigation.goBack();
          Toast.show({
            type: 'success',
            text1: 'Update Complete!',
            text2: 'Your restaurant is now up and running!',
            visibilityTime: 3000,
            autoHide: true,
          });
        }
      })
      .catch(error => {
        console.error('Error:', error.message);
        console.error('Error Response:', error.response?.data);
        Toast.show({
          type: 'error',
          text1: 'Oops! Something went wrong.',
          text2: 'Please give it another try',
          visibilityTime: 3000,
          autoHide: true,
        });
      });
  };

export const RestaurantAppInstalled = () => async (dispatch, getState) => {
  const {userId} = getState().auth;
  // console.log('klklklklk');
  http
    .get(`employee/getRestaurants?status=APP_INSTALLED&employeeId=${userId}`)

    .then(async response => {
      if (response.data.success) {
        dispatch({
          type: RESTAURANT_APP_INSTALLED,
          payload: response.data.data, // The profile data
        });
      } else {
        console.log('RESTAURANT_APP_INSTALLED.response.data.message');
      }
    })
    .catch(error => {
      console.log('RESTAURANT_APP_INSTALLED.error.message', error.message);
    });
};
export const RestaurantPending = () => async (dispatch, getState) => {
  const {userId} = getState().auth;

  http
    .get(`employee/getRestaurants?status=PENDING&employeeId=${userId}`)

    .then(async response => {
      if (response.data.success) {
        dispatch({
          type: RESTAURANT_PENDING,
          payload: response.data.data,
        });
        console.log('RestaurantPending response.data.data');
      } else {
        console.log(
          'RESTAURANT_PENDING.response.data.message',
          response.data.message,
        );
      }
    })
    .catch(error => {
      console.log('RESTAURANT_PENDING.error.message', error.message);
    });
};

export const RestaurantFullyOnboard = () => async (dispatch, getState) => {
  const {userId} = getState().auth;

  http
    .get(`employee/getRestaurants?status=FULLY_ONBOARD&employeeId=${userId}`)

    .then(async response => {
      if (response.data.success) {
        dispatch({
          type: RESTAURANT_FULLY_ONBOARD,
          payload: response.data.data, // The profile data
        });
        // console.log(response.data.data);
        console.log(response.data.data, 'hellooooRESTAURANT_FULLY_ONBOARD');
      } else {
        console.log('RESTAURANT_FULLY_ONBOARD.response.data.message');
      }
    })
    .catch(error => {
      console.log('RESTAURANT_FULLY_ONBOARD.error.message', error.message);
    });
};
