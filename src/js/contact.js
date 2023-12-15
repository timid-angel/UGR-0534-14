const form = document.querySelector('.contact__form');
const errorName = document.querySelector('.contact__error--name');
const errorEmail = document.querySelector('.contact__error--email');
const errorMessage = document.querySelector('.contact__error--message');
const successNotice = document.querySelector('.contact__success');
const systemErrNotice = document.querySelector('.contact__error--system');
const nameField = document.querySelector('.contact__form-input--name');
const emailField = document.querySelector('.contact__form-input--email');
const textareaField = document.querySelector('.contact__form-textarea--message');
let nameEl;
let emailEl;
let messageEl;
let errObj;
const emailRegex = /\S+@\S+\.\S+/;

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
        errorName.setAttribute('style', 'display: block;');
        nameField.setAttribute('style', 'outline: solid 3px #D70040;');
    }
    if (errObj.email) {
        errorEmail.setAttribute('style', 'display: block;');
        emailField.setAttribute('style', 'outline: solid 3px #D70040;');
    }
    if (errObj.message) {
        errorMessage.setAttribute('style', 'display: block;');
        textareaField.setAttribute('style', 'outline: solid 3px #D70040;');
    }
    successNotice.setAttribute('style', 'display: none;');
}

// reset UI indicators for both success and failure scenarios
function resetNameUI() {
    errorName.setAttribute('style', 'display: none;');
    nameField.setAttribute('style', 'outline: none;');
}

function resetEmailUI() {
    errorEmail.setAttribute('style', 'display: none;');
    emailField.setAttribute('style', 'outline: none;');
}

function resetMessageUI() {
    errorMessage.setAttribute('style', 'display: none;');
    textareaField.setAttribute('style', 'outline: none;');
}

function resetNotices() {
    successNotice.setAttribute('style', 'display: none;');
    systemErrNotice.setAttribute('style', 'display: none;');
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
    successNotice.setAttribute('style', 'display: block;');
    nameField.setAttribute('style', 'outline: solid 3px #009E60;');
    emailField.setAttribute('style', 'outline: solid 3px #009E60;');
    textareaField.setAttribute('style', 'outline: solid 3px #009E60;');
}

// change UI to show system error
function showSystemError() {
    resetUI();
    systemErrNotice.setAttribute('style', 'display: block;');
}

// reset UI indicators for both success and failure scenarios along with any input data
function reset() {
    resetUI();
    nameField.value = "";
    emailField.value = "";
    textareaField.value = "";
}

// main function to send the email
function sendEmail(formData) {
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
        .catch(showSystemError);
}

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
    sendEmail(msgObj);
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