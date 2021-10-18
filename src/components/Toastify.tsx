import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IToastify from "../interfaces/IToastify";

toast.configure();

const Toastifys = ({ title, type, position }: IToastify) =>
  toast(title, {
    type: type,
    position: position,
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export default Toastifys;
