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

    const submitHandler = () => {
        console.log('click')
    }
    return <>
        <h1>{form && JSON.stringify(form)}</h1>
        <div className='my-2'>
            <Label htmlfor="fname" labelName="Enter your Name" />
            <Input id="fname" type="text" name="fullname" handler={getFormData} />
        </div>
        <div>
            <Label htmlfor="email" labelName="Enter your email" />
            <Input id="email" type="email" name="email" handler={getFormData} />
        </div>
        <Button buttonLabel="submit" onSubmit={submitHandler} />
    </>
}

export default Form;
