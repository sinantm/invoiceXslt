import { ProductSetModel, TemplateModel } from '../../common/models';

export const EINVOICE = 'EINVOICE';

export const initialState: TemplateSelectorState = {
  selected: {
    HtmlTemplate: 'temp2',
    EinvoiceTemplate: 'einvoıice',
    EarchiveTemplate: 'earchive'
  },
  selectedProduct: { Product: EINVOICE }
};

export interface TemplateSelectorStateType {
  theme: TemplateSelectorState;
}

export interface TemplateSelectorState {
  readonly selected: TemplateModel;
  readonly selectedProduct: ProductSetModel;
}

export enum TemplateSelectorActionTypes {
  SET_SELECTED_TEMPLATE = 'SET_SELECTED_TEMPLATE',
  SET_PRODUCT = 'SET_PRODUCT'
}
