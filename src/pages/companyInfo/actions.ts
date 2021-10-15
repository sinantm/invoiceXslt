import { action } from 'typesafe-actions';
import { CompanyInfoModel } from '../../common/models';
import { CompanyInfoActionTypes } from './types';

export const updateCompanyInfo = (payload: CompanyInfoModel) =>
  action(CompanyInfoActionTypes.UPDATE_COMPANYINFO, payload);
