import { Reducer } from 'redux';
import { LocationInfoActionTypes, LocationInfoState, initialState } from './types';

const reducer: Reducer<LocationInfoState> = (state = initialState, action) => {
  switch (action.type) {
    case LocationInfoActionTypes.UPDATE_LOCATION: {
      return {
        ...state,
        info: action.payload
      };
    }
    default:
      return state;
  }
};

export default reducer;
