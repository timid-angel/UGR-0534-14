const form = document.querySelector('#contact__form');
const errorName = document.querySelector('#name__error');
const errorEmail = document.querySelector('#email__error');
const errorMessage = document.querySelector('#message__error');
const successNotice = document.querySelector('#success');
const nameField = document.querySelector('#name');
const emailField = document.querySelector('#email');
const textareaField = document.querySelector('#message');
let nameEl;
let emailEl;
let messageEl;
let errObj;
const emailRegex = /\S+@\S+\.\S+/;
console.log(form)

// check the provided fields for any invalid data
function validateInput(msgObj) {
    const errObj = {
        name: '',
        email: '',
        message: ''
    };

    if (msgObj.name == "") {
        errObj.name = 'Please enter your name.';
    }

    if (msgObj.email == "") {
        errObj.email = 'Please enter a valid email.';
    } else if (!emailRegex.test(msgObj.email)) {
        errObj.email = 'Please enter a valid email.';
    }

    if (msgObj.message == "") {
        errObj.message = 'Please enter a message.';
    }

    if (errObj.name || errObj.email || errObj.message) return errObj;
    else return false;
}

// change UI to show presence of invalid data
function showDataValidationError(errObj) {
    if (errObj.name) {
        errorName.classList.remove('hidden');
        errorName.classList.add('flex');
        nameField.classList.add('outline-red-800');
    }
    if (errObj.email) {
        errorEmail.classList.remove('hidden');
        errorEmail.classList.add('flex');
        emailField.classList.add('outline-red-800');
    }
    if (errObj.message) {
        errorMessage.classList.remove('hidden');
        errorMessage.classList.add('flex');
        textareaField.classList.add('outline-red-800');
    }
    if (successNotice.classList.contains('flex')) {
        successNotice.classList.remove('flex');
    }
    successNotice.classList.add('hidden');
}

// reset UI indicators for both success and failure scenarios
function resetNameUI() {
    errorName.classList.add('hidden');
    nameField.classList.add('outline-none');
}

function resetEmailUI() {
    errorEmail.classList.add('hidden');
    emailField.classList.add('outline-none');
}

function resetMessageUI() {
    errorMessage.classList.add('hidden');
    textareaField.classList.add('outline-none');
}

function resetNotices() {
    successNotice.classList.add('hidden');
}

function resetUI() {
    resetNameUI();
    resetEmailUI();
    resetMessageUI();
    resetNotices();
}

function resetOnSuccess() {
    resetNotices();
    if (!errObj) {
        resetUI();
    }
}

// change UI to show successful operation
function showSuccess() {
    resetUI();
    if (successNotice.classList.contains('hidden')) {
        successNotice.classList.remove('hidden');
    }
    successNotice.classList.add('flex');
}

// reset UI indicators for both success and failure scenarios along with any input data
function reset() {
    resetUI();
    nameField.value = "";
    emailField.value = "";
    textareaField.value = "";
}

// main function to send the email - requires SMTP.JS
/* function sendEmail(formData) {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "formmail87@gmail.com",
        Password: "5EDAFDEFD3B0A8758C405175ADDCB3024697",
        To: 'formmail87@gmail.com',
        From: 'formmail87@gmail.com',
        Subject: "A Contact Form Entry from " + formData.name + ' on ' + formData.email,
        Body: formData.message
    })
        .then(() => {
            showSuccess();
        })
        .catch(err => console.log(err));
} */

// event listeners and handlers for the buttons
form.addEventListener('submit', (event) => {
    event.preventDefault();
    resetUI();
    nameEl = nameField.value.trim();
    emailEl = emailField.value.trim();
    messageEl = textareaField.value.trim();
    const msgObj = {
        name: nameEl,
        email: emailEl,
        message: messageEl
    };

    errObj = validateInput(msgObj);
    if (errObj) {
        showDataValidationError(errObj);
        return;
    }
    // sendEmail(msgObj);
})

form.addEventListener('reset', (event) => {
    event.preventDefault();
    reset();
})

// event listeners and handlers for the fields
nameField.addEventListener('focus', (event) => {
    resetNameUI();
    resetOnSuccess();

})

emailField.addEventListener('focus', (event) => {
    resetEmailUI();
    resetOnSuccess();
})

textareaField.addEventListener('focus', (event) => {
    resetMessageUI();
    resetOnSuccess();
})