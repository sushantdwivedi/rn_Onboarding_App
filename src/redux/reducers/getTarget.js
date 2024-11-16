import {GET_TARGET} from '../types';

const initialState = {
  targetT: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TARGET:
      return {
        ...state,
        targetT: action.payload,
        error: null,
      };

    default:
      return state;
  }
};

// export default getTargetReducer;
