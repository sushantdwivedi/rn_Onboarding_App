import AsyncStorage from '@react-native-async-storage/async-storage';
import {DASHBOARD_DATA} from '../types';
import http from '../../services/api';

// export const dashboardData = () => async dispatch => {
//   try {
//     const response = await axios.get(
//       `${http}/employee/getEmployeeDashboard/669f9fbd7160b3a823fd9bdf`,
//     );

//     console.log(response.data);
//     dispatch({type: DASHBOARD_DATA, payload: response.data});
//   } catch (error) {
//     console.error('Error fetching dashboard data:', error);
//   }
// };

export const fetchDashboardData = () => async (dispatch, getState) => {
  const {userId} = getState().auth;

  // console.log('sdfghj');
  http
    .get(`employee/getEmployeeDashboard/${userId}`)
    .then(async response => {
      if (response.data.success) {
        dispatch({
          type: DASHBOARD_DATA,
          payload: response.data.data,
        });
        // console.log('dispatch', response.data.data);
      } else {
        console.log('first');
      }
    })
    .catch(error => {
      console.log('dashboardData_ERR', error.response?.data);
    });
};

// export const fetchDashboardData = () => async dispatch => {
//   try {
//     console.log('trying fetchDashboardData');
//     const response = await http.get(
//       'employee/getEmployeeDashboard/669f9fbd7160b3a823fd9bdf',
//     );
//     if (response.data.success) {
//       console.log(response.data);

//       dispatch({type: DASHBOARD_DATA, payload: response.data});
//     }
//     console.log('Raw Response:', response.data);
//   } catch (error) {
//     console.error('dashboardData_ERR', error);
//   }
// };
