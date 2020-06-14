import axios from 'axios';
import * as constants from '../helper/constants';
import renderStartPage from '../render/renderStartPage';
import renderWelcomePage from '../render/renderWelcomePage';
import { showLoader, hideLoader } from '../render/renderLoader';

const requestUserExist = async (user) => {
  try {
    showLoader();
    await axios.get(`${constants.SIGN_UP}/${user.id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    renderStartPage();

    hideLoader();
  }
};

const checkUserExist = () => {
  window.addEventListener('load', () => {
    const storageUserData = JSON.parse(localStorage.getItem('user'));

    if (storageUserData && storageUserData.userId) {
      requestUserExist({ id: storageUserData.userId });
      renderStartPage();
    }
    renderWelcomePage();
  });
};

export default checkUserExist;
