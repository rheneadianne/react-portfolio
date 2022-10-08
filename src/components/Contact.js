import React, { useState } from 'react';
import { validateEmail } from '../util/helper';

function Contact() {
    const [contactState, setContactState] = useState({ contactName: '', email: '', body: '' })
    const [errorModalState, setErrorModalState] = useState('')
    const { contactName, email, body } = contactState

    const handleFormSubmit = event => {
        event.preventDefault();
        if (!errorModalState) { console.log("Submitted! (Note this is front end only, please contact via email or LinkedIn)") }
    }

    const handleFormReset = event => {
        if (event.target.contactName === 'email') {
            const validated = validateEmail(event.target.value)
            validated ? setErrorModalState('Your email is invalid. Please try again') : setErrorModalState('')
        } else {
            if (!event.target.value.length) {
                setErrorModalState(`Fields cannot be left blank!`);
            } else {
                setErrorModalState('');
            }
        }

        if (!errorModalState) {
            setContactState({ ...contactState, [event.target.name]: event.target.value })
        }
    }

    return (
        <section class="m-5">
            <h2>Contact Me!</h2>
            <form onSubmit={handleFormSubmit}>
                <div class="form-group">
                    <label for="contactName">Your Name</label>
                    <input type="text" class="form-control" id="contactName" aria-describedby="contactName" defaultValue={contactName} placeholder="Enter your name." onBlur={handleFormReset}/>
                </div>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="email" defaultValue={email} placeholder="Enter email" onBlur={handleFormReset}/>
                </div>
                <div class="form-group">
                    <label for="body">Message</label>
                    <textarea class="form-control" id="body" rows="3" defaultValue={body} placeholder="Enter your message (please note this is frontend ONLY). Please email me @ rheneadianne@gmail.com for any contact." onBlur={handleFormReset}></textarea>
                </div>
                {errorModalState && (
          <div>
            <p class="bg-danger m-5">{errorModalState}</p>
          </div>
        )}
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </section>
    )
}

export default Contact;