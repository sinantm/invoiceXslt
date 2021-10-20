export const initialState: SignatureState = {
  signatureBase64: undefined
  };
  
  export interface SignatureStateType {
    signature: SignatureState;
  }
  
  export interface SignatureState {
    readonly signatureBase64: any;
  }
  
  export enum SignatureActionTypes {
    SIGNATURE_UPDATE_CROP = 'SIGNATURE_UPDATE_CROP'
  }
  