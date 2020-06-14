import {
  createElement,
  removeElement,
  findElement
} from '../helper/domHelpers';
import renderTrainPage from './renderTrainPage';
import startImage from '../assets/images/start-game.png';

const handleStartClick = () => {
  const startButton = findElement('.welcome__start-button');
  startButton.removeEventListener('click', handleStartClick);
  removeElement('.welcome');

  renderTrainPage();
};

const renderStartPage = () => {
  removeElement('.modal-wrapper');

  const welcomeTextSound = createElement('p', 'welcome__text-wrapper');
  welcomeTextSound.innerHTML = `
    <span class="welcome__text">Click on words, collect phrases.</span>
    <span class="welcome__text">Words can be drag and drop.</span>
    <span class="welcome__text">Select tooltips in the menu.</span>
    <span class="welcome__text">Click on the button and speak the words into the microphone.</span>
  `;
  const welcomeStartButton = createElement('button', 'welcome__start-button');
  welcomeStartButton.textContent = 'Start';

  const welcomeStartImage = createElement('img', 'welcome__start-image');
  welcomeStartImage.setAttribute('src', `${startImage}`);

  const welcomePageWrapper = findElement('.welcome-wrapper');
  welcomePageWrapper.append(welcomeTextSound);
  welcomePageWrapper.append(welcomeStartButton);
  welcomePageWrapper.append(welcomeStartImage);

  welcomeStartButton.addEventListener('click', handleStartClick);
};

export default renderStartPage;
