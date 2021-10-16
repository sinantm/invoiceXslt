import { TemplateModel } from '../../common/models';

export const EINVOICE = 'EINVOICE';

export const initialState: TemplateSelectorState = {
  selected: {
    HtmlTemplate: '',
    EinvoiceTemplate: '',
    EarchiveTemplate: ''
  }
};

export interface TemplateSelectorStateType {
  theme: TemplateSelectorState;
}

export interface TemplateSelectorState {
  readonly selected: TemplateModel;
}
 
export enum TemplateSelectorActionTypes {
  SET_SELECTED_TEMPLATE = 'SET_SELECTED_TEMPLATE',
}
