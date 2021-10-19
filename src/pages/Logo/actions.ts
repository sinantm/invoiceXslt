import { action } from 'typesafe-actions';
import { LogoActionTypes } from './types';

export const logoOnCrop = (payload: string) => action(LogoActionTypes.LOGO_UPDATE_CROP, payload);