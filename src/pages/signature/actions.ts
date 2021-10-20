import { action } from 'typesafe-actions';
import { SignatureActionTypes } from './types';

export const signatureOnCrop = (payload: string) => action(SignatureActionTypes.SIGNATURE_UPDATE_CROP, payload);