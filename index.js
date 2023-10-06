'use strict';

const signUpForm = document.getElementById('sign-up-form');
const signUpFormSubmitBtn = document.getElementById('sign-up-form-submit-btn');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

signUpForm.addEventListener('submit', function (e) {
	if (password.value !== confirmPassword.value) {
		e.preventDefault();
	}
});

signUpFormSubmitBtn.addEventListener('click', function () {
	signUpForm.classList.add('submitted');
	const inputErrorMsg = password.parentNode.querySelector('.input-error-msg');
	if (password.value !== confirmPassword.value) {
		password.classList.add('error');
		confirmPassword.classList.add('error');
		inputErrorMsg.textContent = '* Password do not match';
	} else {
		password.classList.remove('error');
		confirmPassword.classList.remove('error');
		inputErrorMsg.textContent = '';
	}
});
