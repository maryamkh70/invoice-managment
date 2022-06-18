
import { useEffect, useState } from "react";

const CheckBoxInput = ({ model, id, description, }) => {
    const [check, setcheck] = useState(model[id]);
    useEffect(() => {
        setcheck(model[id]);
    }, [model, id]);

    const handelChange = (e) => {

        model[id] = !check;
        setcheck(!check);


    }


    return (<>
        <div className="form-check">
            <label className="form-ckeck-label" htmlFor={id}><b>{description}:</b></label>
            <input className="form-ckeck-input" type="checkbox" id={id}  onChange={handelChange} />

        </div>

    </>)
}
export default CheckBoxInput;