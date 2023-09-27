import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOCAL_POSTS_URL } from '../constants/messages'
import Heading from "../components/common/Heading";

const SendAMessage = () => {
    const emailRef = useRef();
    const nameRef = useRef();
    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();
        const emailValue = emailRef.current.value;
        const nameValue = nameRef.current.value

        const formData = { "email": emailValue, "fullname": nameValue };

        fetch(LOCAL_POSTS_URL, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then((response) => {
                if (response.status !== 400) {
                    console.log("success")
                    navigate("/techstack")
                }
                else {
                    console.log("oops")
                }
            }).catch((error) => console.log(error)
            )

    }
    return (
        <>
            <Heading heading="send a message" />
            <form className="bg-slate-100 p-4">
                <div className="my-2">
                    <label>Email</label>
                    <input type="email" ref={emailRef} className="border-2 border-black" />
                </div>

                <div className="my-2">
                    <label>Fullname:</label>
                    <input type="text" ref={nameRef} className="border-2 border-black" />
                </div>
                <button onClick={submitForm} className='bg-orange-700 rounded-md px-2 text-white'>Submit</button>
            </form>
        </>
    )
}

export default SendAMessage;