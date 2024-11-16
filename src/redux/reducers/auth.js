import {
  AUTH_TOKEN,
  OTP_STORE,
  RESET_STATE,
  REVIEW_CONDITION,
  USER_DATA,
  USER_ID,
  GET_PROFILE_SUCCESS,
  UPDATE_EMPLOYEE_DATA,
  AUTH_LOGIN_SUCCESS,
} from '../types';

const initialState = {
  token: null,
  otpState: null,
  userId: null,
  userData: null,
  getReviewCondition: null,
  profile: null,
  employee: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    case USER_ID:
      return {
        ...state,
        userId: action.payload,
      };
    case USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
      };
    case UPDATE_EMPLOYEE_DATA:
      return {
        ...state,
        employee: action.payload,
      };
    default:
      return state;
  }
};
