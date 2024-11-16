import {DASHBOARD_DATA} from '../types';

const initialState = {
  dashboardData: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DASHBOARD_DATA:
      return {
        ...state,
        dashboardData: action.payload,
      };
    default:
      return state;
  }
};
