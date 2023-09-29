import Label from '../common/Label';
import Input from '../common/Input';
import Button from '../common/Button';
import { useState } from 'react';

const Form = () => {
    const [form, setForm] = useState();

    const getFormData = (e) => {
        const { value, name } = e.target;
        setForm((prevState) => (
            {
                ...prevState, [name]: value
            }
        ))
    }
    return <>
        <h1>{form && JSON.stringify(form)}</h1>
        <div className='my-2'>
            <Label labelName="Enter your Name" />
            <Input type="text" name="fullname" handler={getFormData} />
        </div>
        <div>
            <Label labelName="Enter your email" />
            <Input type="email" name="email" handler={getFormData} />
        </div>
        <Button />
    </>
}

export default Form;
