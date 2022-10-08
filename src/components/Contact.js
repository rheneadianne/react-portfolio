import React, { useState } from 'react';

function Contact() {
    const [contactState, setContactState] = useState({contactName: '', email: '', body: ''})
    const {contactName, email, body} = contactState

    const handleFormSubmit = event => {
        event.preventDefault();
        console.log("Submitted! (Note this is front end only, please contact via email or LinkedIn)")
    }

    const handleFormReset = event => {
        if (event.target.contactName === 'email') {
        }
    }
}