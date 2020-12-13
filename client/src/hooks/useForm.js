// write your custom hook here to control your checkout form
import { useState } from 'react';

export const useForm = (initalValues) => {

    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        
        setValues({ ...values, [e.target.name]: e.target.value });

    };

    return [values, handleChange];

}