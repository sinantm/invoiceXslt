import { BankInfoModel } from '../../common/models';

export const initialState: BankInfoState = {
  list: [{bankName:'akbank',branch:'kadıköy',branchCode:'2253',accountCode:'111',accountType:'TL',accountName:'AHMET ÖZCAN',iban:'TRDFGDFGFDGFD'}]
};

export interface BankInfoStateType {
  bankInfo: BankInfoState;
}

export interface BankInfoState {
  readonly list: Array<BankInfoModel>;
}

export enum BankInfoActionTypes {
  UPDATE_BANKINFO = 'UPDATE_BANKINFO',
  DELETE_BANKINFO = 'DELETE_BANKINFO'
}
