import { LocationModel } from '../../common/models';

export const initialState: LocationInfoState = {
  info: {
    selectedKeys: '1',
    disabledPage: {
      theme: false,
      companyinfo: true,
      logo: true,
      signature: true,
      bankinfo: true,
      notes: true,
      invoicepreview:true
    }
  }
};

export interface LocationInfoStateType {
  locationInfo: LocationInfoState;
}
export interface LocationInfoState {
  readonly info: LocationModel;
}

export enum LocationInfoActionTypes {
  UPDATE_LOCATION = 'UPDATE_LOCATION'
}
