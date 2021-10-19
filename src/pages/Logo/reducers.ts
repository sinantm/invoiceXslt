import { Reducer } from 'redux';
import { initialState, LogoActionTypes, LogoState } from './types';

const reducer: Reducer<LogoState> = (state = initialState, action) => {
  switch (action.type) {
    case LogoActionTypes.LOGO_UPDATE_CROP: {
      return {
        ...state,
        logoBase64: action.payload
      };
    }
    default:
      return state;
  }
};

export default reducer;
