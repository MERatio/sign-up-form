'use strict';

const dom = {
	form: document.querySelector('.js-form'),
	passwordInput: this.form.querySelector('.js-password'),
	confirmPasswordInput: this.form.querySelector('.js-confirm-password'),
};

function showInputErrorText(input, inputError) {
	if (input.validity.valueMissing) {
		inputError.textContent = '* Please fill out this field.';
	} else if (input.validity.typeMismatch) {
		switch (input.type) {
			case 'email':
				inputError.textContent = '* Please enter a valid e-email.';
				break;
		}
	}
}

function checkIfPasswordsMatch() {
	const password1 = dom.passwordInput.value;
	const password2 = dom.confirmPasswordInput.value;
	const passwordInputError = dom.passwordInput.nextSibling.nextSibling;

	if ((password1 !== '' || password2 !== '') && password1 !== password2) {
		dom.passwordInput.classList.add('invalid-input');
		dom.confirmPasswordInput.classList.add('invalid-input');
		passwordInputError.textContent = '* Password does not match';
		return false;
	} else {
		return true;
	}
}

function checkInputValidity(input) {
	const inputError = input.nextSibling.nextSibling;

	if (input.validity.valid) {
		input.classList.remove('invalid-input');
		inputError.textContent = '';
		return true;
	} else {
		input.classList.add('invalid-input');
		showInputErrorText(input, inputError);
		return false;
	}
}

function handleFormSubmit(event) {
	let validInputs = true;

	for (const element of form.elements) {
		if (element.nodeName === 'INPUT') {
			if (!checkInputValidity(element)) {
				validInputs = false;
			}
		}
	}

	if (!checkIfPasswordsMatch()) {
		validInputs = false;
	}

	if (!validInputs) {
		event.preventDefault();
	}
}

dom.form.addEventListener('submit', handleFormSubmit);
