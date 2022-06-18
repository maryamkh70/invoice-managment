
import { useEffect, useState } from "react";


const NumberInput = ({ model, id, description,validation }) => {
    const [value, setValue] = useState(model[id])

    useEffect(() => {
        setValue(model[id]);
    }, [model, id]);

    const handelChange = (e) => {
        setValue(e.target.value);
        model[id] = Number(e.target.value);


    }


    return (<>
        <label htmlFor={id}><b>{description}:</b></label>
        <input className="form-control" {...validation} type="text" id={id} value={value} onChange={handelChange} />

    </>)
}
export default NumberInput;