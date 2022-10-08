import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

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
                setErrorModalState(`${event.target.name} cannot be blank!`);
              } else {
                setErrorModalState('');
              }
        }

        if (!errorModalState) {
            setContactState({ ...contactState, [e.target.name]: e.target.value })
        }
    }
}

//ill deal with the html in a bit