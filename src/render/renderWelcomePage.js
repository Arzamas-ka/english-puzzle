import {
  createElement,
  findElement,
  removeElement
} from '../helper/domHelpers';
import renderSignInPage from './renderSignInPage';
import handleInputCheckbox, {
  handleInputFocus,
  handleSignIn
} from '../events/eventSignIn';

const renderWelcomePage = () => {
  removeElement('.welcome');

  const body = findElement('body');
  const welcomePageWrapper = createElement('div', 'welcome-wrapper');
  const welcomePage = createElement('div', 'welcome');
  const welcomeTitle = createElement('h1', 'welcome__title');
  welcomeTitle.textContent = 'English puzzle';

  welcomePageWrapper.append(welcomeTitle);
  welcomePageWrapper.append(renderSignInPage());
  welcomePage.append(welcomePageWrapper);
  body.append(welcomePage);

  handleInputFocus();
  handleInputCheckbox();
  handleSignIn();
};

export default renderWelcomePage;
