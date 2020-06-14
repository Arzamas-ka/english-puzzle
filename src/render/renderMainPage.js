import { createElement } from '../helper/domHelpers';

const renderMainPage = () => {
  const main = createElement('div', 'train-main');
  const translatingField = createElement('div', 'puzzle-translating');
  const puzzleContainer = createElement('div', 'puzzle-container');
  const puzzlePieces = createElement('div', 'puzzle-pieces');
  const buttonsWrapper = createElement('div', 'play-buttons');
  buttonsWrapper.innerHTML = `
    <button class="play play--know">I don't know</button>
    <button class="play play--check">Check</button>
    <button class="play play--continue">Continue</button>
    <button class="play play--result">Results</button>
  `;

  main.append(translatingField);
  main.append(puzzleContainer);
  main.append(puzzlePieces);
  main.append(buttonsWrapper);

  return main;
};

export default renderMainPage;
