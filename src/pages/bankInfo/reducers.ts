import { Reducer } from 'redux';
import { BankInfoActionTypes, BankInfoState, initialState } from './types';

const reducer: Reducer<BankInfoState> = (state = initialState, action) => {
  switch (action.type) {
    case BankInfoActionTypes.UPDATE_BANKINFO: {
      return {
        ...state,
        list: [...state.list, action.payload]
      };
    }
    case BankInfoActionTypes.DELETE_BANKINFO: {
      return { ...state, list: [...state.list.filter(x => x.iban !== action.payload.iban)] };
    }
    default:
      return state;
  }
};

export default reducer;
