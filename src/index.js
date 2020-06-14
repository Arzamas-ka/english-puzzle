import renderWelcomePage from './render/renderWelcomePage';
import getSignUpForm from './events/eventSignUp';
import checkUserExist from './events/checkUserExist';

import './index.css';

checkUserExist();
renderWelcomePage();
getSignUpForm();
