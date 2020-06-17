import {
  createElement,
  findElement,
  removeElement
} from '../helper/domHelpers';
import renderHeaderPage from './renderHeaderPage';
import renderMainPage from './renderMainPage';
import handleGetWords, { getWordsForPuzzle } from '../events/eventPlayGame';
/* eslint-disable-next-line */
import renderWelcomePage from './renderWelcomePage';

const renderTrainPage = () => {
  removeElement('.train-page');

  const body = findElement('body');
  const trainPageWrapper = createElement('div', 'train-page');

  body.append(trainPageWrapper);
  renderHeaderPage();
  trainPageWrapper.append(renderMainPage());

  getWordsForPuzzle();
  handleGetWords();

  findElement('.tool--sign-out').addEventListener('click', () => {
    removeElement('.train-page');
    renderWelcomePage();
  });
};

export default renderTrainPage;
