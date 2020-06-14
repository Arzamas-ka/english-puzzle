import {
  createElement,
  findElement,
  removeElement
} from '../helper/domHelpers';
import renderHeaderPage from './renderHeaderPage';
import renderMainPage from './renderMainPage';
import handleGetWords from '../events/eventPlayGame';

const renderTrainPage = () => {
  removeElement('.train-page');

  const body = findElement('body');
  const trainPageWrapper = createElement('div', 'train-page');

  body.append(trainPageWrapper);
  renderHeaderPage();
  trainPageWrapper.append(renderMainPage());

  handleGetWords();
};

export default renderTrainPage;
