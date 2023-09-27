import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from "../components/common/Heading";

const Contact = () => {
    const [isValid, setIsValid] = useState(true);
    const emailValue = useRef();
    const fullnameValue = useRef();
    const navigate = useNavigate();

    const validateForm = () => {
        const email = emailValue.current.value;
        const fullname = fullnameValue.current.value;

        const formData = { "fullname": fullname, "email": email };

        if (formData.fullname !== " " && formData.email !== "") {
            // navigate to home
            navigate("/");
            setIsValid(true)
        }
        else {
            // throw an error
            setIsValid(false)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        validateForm();
    }
    return (
        <>
            <Heading heading="Contact Me" />
            {isValid ? "" : <p>Please fix the errors:</p>}
            <form className="bg-slate-100 p-4">
                <div className="my-2">
                    <label>Email</label>
                    <input type="email" className="border-2 border-black" ref={emailValue} />
                </div>

                <div className="my-2">
                    <label>Fullname:</label>
                    <input type="text" className="border-2 border-black" ref={fullnameValue} />
                </div>
                <button onClick={submitHandler} className='bg-orange-700 rounded-md px-2 text-white'>Submit</button>
            </form>
        </>
    )
}

export default Contact;