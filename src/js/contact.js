import { Email } from './smtp.js';
const submitButton = document.querySelector('.button--primary');
const nameEl = document.querySelector('.contact__form-input--name').value.trim();
const emailEl = document.querySelector('.contact__form-input--email').value.trim();
const messageEl = document.querySelector('.contact__form-textarea--message').value.trim();
const emailRegex = /\S+@\S+\.\S+/;

function validateInput() {
    const errArr = {
        name: '',
        email: '',
        message: ''
    };

    if (nameEl == "") {
        errArr.name = 'Please enter your name.';
    }

    if (emailEl == "") {
        errArr.email = 'Please enter a valid email.';
    } else if (emailRegex.test(emailEl)) {
        errArr.email = 'Please enter a valid email.';
    }

    if (messageEl == "") {
        errArr.message = 'Please enter a message.';
    }

    return errArr;
}

function sendEmail(formData) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "formmail87@gmail.com",
        Password: "=K+~v~gganjWx66",
        To: 'formmail87@gmail.com',
        From: formData.email,
        Subject: "A contact form entry from: " + formData.name,
        Body: formData.message
    })
        .then(message => alert(message))
        .catch(err => console.log(err));
}

submitButton.addEventListener('submit', (event) => {
    const msgObj = {
        name: nameEl,
        email: emailEl,
        message: messageEl
    };

    const errors = validateInput();
    //display errors appropriately

    sendEmail(msgObj);
})