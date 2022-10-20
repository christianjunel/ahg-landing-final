import '../styles/Contact.css'
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';


const Contact = props => {

    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        message: ""
    })

    const onChange = e => {      
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

    const { name, email, message } = inputs

    const onSubmitForm = async (event) => {
        event.preventDefault()
        const form = event.currentTarget;
        
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            try {

                const body = { name, email, message }
    
                const response = await fetch(
                    "https://api.ahglab.com/api:fXznCvvM/contact_us",
                    {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify(body)
                    }
                )
    
                const parseRes = await response.json()
    
                if (parseRes) {
                    //localstorage
                    console.log("Successful!")
                    setShowSuccess(true);
                    setInputs({
                        name: "",
                        email: "",
                        message: ""
                    })
                    console.log(parseRes)
                } else {
                    setShow(true)
                    console.error("Something wrong")
                    console.log(parseRes)
                }
    
            } catch (error) {
                console.log(error.message)
            }
        }
        setValidated(true);
    }

    return (
        <div className="flexbox-contact">
            <Form noValidate validated={validated} onSubmit={onSubmitForm} id='contact-form'>
                <h1>Reach Out To Us</h1>
                <p>There’s always something new going on at Altruvita. Every day brings new ideas, new challenges, new connections, and new opportunities to grow.<br /><br /></p>
                <p>Learn more about us and what we do, and let’s work together!<br /><br /></p>
                {show ? <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    Please check your inputs and try again.
                </Alert> : null}
                {showSuccess ? <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                    Your inquiry has been sent. Thanks mate!
                </Alert> : null}
                <Form.Group className="mb-3" controlId="formBasicName">
                    {/* <Form.Label className="name-label">Username</Form.Label> */}
                    <Form.Control type="text" placeholder="Enter your name..." onChange={e => onChange(e)} name="name" value={name} required/>
                    <Form.Control.Feedback type="invalid">Name is required.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label className="email-label">Email</Form.Label> */}
                    <Form.Control type="email" placeholder="Enter your email..." onChange={e => onChange(e)} name="email" value={email} required/>
                    <Form.Control.Feedback type="invalid">Email is required.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMessage">
                    {/* <Form.Label className="message-label">Message</Form.Label> */}
                    <Form.Control as="textarea" rows={3} placeholder="Enter your message..." onChange={e => onChange(e)} name="message" value={message} required/>
                    <Form.Control.Feedback type="invalid">Message is required.</Form.Control.Feedback>
                </Form.Group>

                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Contact;