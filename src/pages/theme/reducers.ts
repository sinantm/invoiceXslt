import { Reducer } from 'redux';
import { initialState, TemplateSelectorActionTypes, TemplateSelectorState } from './types';

const reducer: Reducer<TemplateSelectorState> = (state = initialState, action) => {
  switch (action.type) {
    case TemplateSelectorActionTypes.SET_SELECTED_TEMPLATE: {
      return {
        ...state,
        selected: action.payload
      };
    }
    default:
      return state;
  }
};
 
export default reducer;
