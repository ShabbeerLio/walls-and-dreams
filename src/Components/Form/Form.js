import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import "./Form.css"

const Form = ({ btntxt }) => {

    // form
    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_number: '',
        message: ''
    });

    // Handle input changes and update the formData state
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const [messageSent, setMessageSent] = useState(false); // Track whether the message has been sent

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        setMessageSent(true);

        setTimeout(() => {
            setMessageSent(false);
        }, 2500);

        // emailjs.sendForm(
        //     'service_doayfq4',
        //     'template_vi0ghkl',
        //     form.current,
        //     'Iejd5R2PTV0wvsSiQ'
        // )
        //     .then((result) => {
        //         console.log(result.text);
        //         console.log("message sent")
        //     }, (error) => {
        //         console.log(error.text);
        //     });

        // Access the user's name, email, and message from the formData state
        const { user_name, user_number, user_email, message } = formData;

        console.log('Name:', user_name);
        console.log('Email:', user_email);
        console.log('Number:', user_number);
        console.log('Message:', message);

        setFormData({
            user_name: '',
            user_email: '',
            user_number: '',
            message: ''
        });
    };


    return (
        <>
            <form className='form' ref={form} onSubmit={handleSubmit}>
                <div className="form-box">
                    <div className="form-field mb-3">
                        <input
                            value={formData.name}
                            name="user_name"
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            onChange={handleInputChange}
                            required
                        />
                        <span></span>
                    </div>
                    <div className="form-field mb-3">
                        <input
                            value={formData.number}
                            name="user_number"
                            type="number"
                            className="form-control"
                            placeholder="Phone No."
                            onChange={handleInputChange}
                            required
                        />
                        <span></span>
                    </div>
                    <div className="form-field mb-3">
                        <input
                            value={formData.email}
                            name="user_email"
                            type="text"
                            className="form-control"
                            placeholder="Email"
                            onChange={handleInputChange}
                            required
                        />
                        <span></span>
                    </div>
                </div>
                <div className="form-field mb-3">
                    <textarea
                        value={formData.message}
                        className="form-control"
                        name="message"
                        placeholder="Your Message Here...."
                        onChange={handleInputChange}
                        required
                    />
                    <span></span>
                </div>
                <div className="form-btn">
                    <button type="submit" className="btn btn-primary">
                        {messageSent ? (
                            <span>Message sent successfully!</span>
                        ) : (
                            <>
                                <span>Send Message</span>
                            </>)}
                    </button>
                </div>
            </form>
        </>
    )
}

export default Form
