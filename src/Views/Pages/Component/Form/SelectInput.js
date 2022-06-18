import { useEffect, useState } from "react";
  
const SelectInput=({model,id,description,list,text,validation})=>{
    const[value,setValue]=useState(model[id])

    useEffect(()=>{
        setValue(model[id]);
    },[model,id]);
    
    const handelChange=(e)=>{
        setValue(e.target.value);
        model[id]=Number(e.target.value);


    }
    
    
  return(  <>
    <label htmlFor={id}><b>{description}:</b></label>
  
    <select className="form-select" {...validation} id={id} value={value} onChange={handelChange} >
            {
               list.map((val)=>{
                   return <option value={val.id}>{val[text]}</option>

               }) 
            }
            </select>


    </>)
}
export default SelectInput;