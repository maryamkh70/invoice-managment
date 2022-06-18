import { toast } from 'react-toastify';

export const SuccessMessage=()=>{
    toast.success(" عملیات با موفقیت انجام شد",{
        position:"top-right",
        autoClose:2000,
        hideProgressBar:false,
        closeOnClick:true,
        draggable:true,
        pauseOnHover:undefined,
        theme:"dark",
        icon:"🦄"
    });
}
export const ErrorMessage=()=>{
    toast.error(" خطا",{
        position:"top-right",
        autoClose:2000,
        hideProgressBar:false,
        closeOnClick:true,
        draggable:true,
        pauseOnHover:undefined,
        theme:"dark",
        icon:"🦄"
    });
}