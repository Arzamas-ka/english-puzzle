import axios from 'axios';
import { findElement } from '../helper/domHelpers';
import * as constants from '../helper/constants';
import renderStartPage from '../render/renderStartPage';

const handleInputCheckbox = () => {
  const checkbox = findElement('.password-toggler');

  checkbox.addEventListener('change', (event) => {
    const toggler = checkbox.parentElement;
    const input = toggler.parentElement.querySelector('.input-password');
    const icon = toggler.querySelector('.auth-form__icon');

    if (event.target.checked) {
      input.type = 'text';
      icon.classList.remove('la-eye');
      icon.classList.add('la-eye-slash');
    } else {
      input.type = 'password';
      icon.classList.remove('la-eye-slash');
      icon.classList.add('la-eye');
    }
  });
};

export default handleInputCheckbox;

export const handleInputFocus = () => {
  const inputText = [...document.querySelectorAll('.auth-form__input')];
  inputText.forEach((input) => {
    input.addEventListener('focus', () => {
      input.classList.add('focus');
      input.parentElement
        .querySelector('.auth-form__placeholder')
        .classList.add('focus');
    });
    input.addEventListener('blur', () => {
      input.classList.remove('focus');
      if (!input.value) {
        input.parentElement
          .querySelector('.auth-form__placeholder')
          .classList.remove('focus');
      }
    });
  });
};

const SignIn = async (user) => {
  try {
    const response = await axios.post(constants.SIGN_IN, user, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const responseDataUser = {
      token: response.data.token,
      userId: response.data.userId,
    };

    localStorage.setItem('user', JSON.stringify(responseDataUser));

    await renderStartPage();
  } catch (error) {
    findElement('.auth-error').innerHTML = 'Incorrect credentials!!!';
    findElement('.auth-error').style.color = constants.COLORS.red;
  }
};

export const handleSignIn = () => {
  findElement('.auth-form__submit').addEventListener('click', (event) => {
    event.preventDefault();

    const emailUserValue = findElement('.input-email').value;
    const passwordUserValue = findElement('.input-password').value;

    SignIn({
      email: `${emailUserValue}`,
      password: `${passwordUserValue}`,
    });
  });
};
