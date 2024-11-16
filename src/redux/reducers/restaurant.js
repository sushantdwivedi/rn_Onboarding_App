import {
  RESTAURANT_APP_INSTALLED,
  RESTAURANT_PENDING,
  RESTAURANT_FULLY_ONBOARD,
} from '../types';

const initialState = {
  restaurantPending: null,
  restaurantAppInstalled: null,
  RestaurantFullyOnboard: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESTAURANT_PENDING:
      return {
        ...state,
        restaurantPending: action.payload,
      };
    case RESTAURANT_APP_INSTALLED:
      return {
        ...state,
        restaurantAppInstalled: action.payload,
      };
    case RESTAURANT_FULLY_ONBOARD:
      return {
        ...state,
        RestaurantFullyOnboard: action.payload,
      };
    default:
      return state;
  }
};
