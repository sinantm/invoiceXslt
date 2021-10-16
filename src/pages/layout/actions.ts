import { action } from 'typesafe-actions';
import { LocationModel } from '../../common/models';
import { LocationInfoActionTypes } from './types';

export const updateLocationInfo = (payload: LocationModel) =>
  action(LocationInfoActionTypes.UPDATE_LOCATION, payload);
