import axios from 'axios';
import * as constants from '../helper/constants';
import { findElement } from '../helper/domHelpers';
import renderSignUp from '../render/renderSignUpPage';
import renderWelcomePage from '../render/renderWelcomePage';

const createUser = async (user) => {
  try {
    await axios.post(constants.SIGN_UP, user, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    await renderWelcomePage();

    findElement('.auth-error').innerHTML =
      'You have been created an account successfully!';
    findElement('.auth-error').style.color = constants.COLORS.green;
  } catch (error) {
    findElement('.auth-error').innerHTML = 'Incorrect credentials';
    findElement('.auth-error').style.color = constants.COLORS.red;
  }
};

const handleCreateUser = () => {
  findElement('.auth-form__submit').addEventListener('click', (event) => {
    event.preventDefault();

    const emailUserValue = findElement('.input-email').value;
    const passwordUserValue = findElement('.input-password').value;

    createUser({
      email: `${emailUserValue}`,
      password: `${passwordUserValue}`,
    });

    findElement('.input-email').value = constants.EMPTY_STRING;
    findElement('.input-password').value = constants.EMPTY_STRING;
  });
};

const getSignUpForm = () => {
  const createLink = findElement('.auth-form__bottom');
  createLink.addEventListener('click', (event) => {
    event.preventDefault();

    renderSignUp();
    handleCreateUser();
  });
};

export default getSignUpForm;

// hello@user.com
// Gfhjkm_123

// test@test.gmail.com
// Test!!test5

// test@gmail.com
// Test!!test25
