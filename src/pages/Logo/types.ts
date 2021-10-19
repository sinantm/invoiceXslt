export const initialState: LogoState = {
    logoBase64: undefined
  };
  
  export interface LogoStateType {
    logo: LogoState;
  }
  
  export interface LogoState {
    readonly logoBase64: any;
  }
  
  export enum LogoActionTypes {
    LOGO_UPDATE_CROP = 'LOGO_UPDATE_CROP'
  }
  