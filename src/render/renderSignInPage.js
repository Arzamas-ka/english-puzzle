import { createElement, removeElement } from '../helper/domHelpers';

const renderSignInPage = () => {
  removeElement('modal-wrapper');

  const modalWrapper = createElement('div', 'modal-wrapper');
  modalWrapper.innerHTML = `
    <div class="auth-error"></div>
    <form class="auth-form" name="form-auth" method="post">

      <label class="auth-form__label">
        <span class="auth-form__placeholder">email</span>
        <input class="auth-form__input input-email" type="email" name="email" autocomplete="off" required>
      </label>

      <label class="auth-form__label">
        <span class="auth-form__placeholder">password</span>
        <input class="auth-form__input input-password" type="password" name="password" autocomlete="off" required>
        <div class="auth-form__toggler">
          <i class="la la-eye auth-form__icon"></i> 
          <input type="checkbox" class="auth-form__checkbox password-toggler">
        </div>
      </label>

      <div class="auth-form__answer"></div>
      <button class="auth-form__submit" type="submit" value="Login"><p class="auth-form__sign-in-img"></p>Login</button>

      <div class="auth-form__bottom">
        <span>Have no account?</span>
        <a href="#" target="blank">Create new</a>
      </div>
    </form>
  `;

  return modalWrapper;
};

export default renderSignInPage;
