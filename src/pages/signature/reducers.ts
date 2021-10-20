import { Reducer } from 'redux';
import { initialState, SignatureActionTypes, SignatureState } from './types';

const reducer: Reducer<SignatureState> = (state = initialState, action) => {
  switch (action.type) {
    case SignatureActionTypes.SIGNATURE_UPDATE_CROP: {
      return {
        ...state,
        signatureBase64: action.payload
      };
    }
    default:
      return state;
  }
};

export default reducer;
