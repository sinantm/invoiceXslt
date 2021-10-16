import { action } from 'typesafe-actions';
import { TemplateModel } from '../../common/models';
import { TemplateSelectorActionTypes } from './types';

export const setSelectedTemplate = (payload: TemplateModel) =>
  action(TemplateSelectorActionTypes.SET_SELECTED_TEMPLATE, payload);

