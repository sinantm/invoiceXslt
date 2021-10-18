import { ToastPosition, TypeOptions } from 'react-toastify';

export interface IToastify {
  title?: string;
  type?: TypeOptions;
  position?: ToastPosition;
}

export default IToastify;
