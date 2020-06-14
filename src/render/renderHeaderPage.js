import { createElement, findElement } from '../helper/domHelpers';

const range = (start, end) =>
  Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
const optionsCountPages = range(1, 30);
const optionsCountLevels = range(1, 6);

const renderLevelBlock = () => {
  const levelWrapper = createElement('div', 'level-wrapper');
  levelWrapper.innerHTML = `<label for="levels">Level </label>
    <select class="selectpicker" name="levels" id="levels">
    ${optionsCountLevels
    .map((option) => `<option value=${option}>${option}</option>`)
    .join('')}
    </select>`;

  return levelWrapper;
};

const renderPageBlock = () => {
  const pageWrapper = createElement('div', 'page-wrapper');

  pageWrapper.innerHTML = `<label for="pages">Page </label>
    <select class="selectpicker" name="pages" id="pages">
    ${optionsCountPages
    .map((option) => `<option value=${option}>${option}</option>`)
    .join('')}
    </select>`;

  return pageWrapper;
};

const renderGoButton = () => {
  const buttonGo = createElement('button', 'left-button');
  buttonGo.innerHTML = 'Go';

  return buttonGo;
};

const renderToolsBlock = () => {
  const toolsWrapper = createElement('div', 'tools-wrapper');
  toolsWrapper.innerHTML = `
    <button class="tool tool--sound"><i class="las la-volume-up"></i></button>
    <button class="tool tool--translate"><i class="las la-language"></i></button>
    <button class="tool tool--image"><i class="las la-file-image"></i></button>
  `;

  return toolsWrapper;
};

const renderFunctionalBlock = () => {
  const functionalWrapper = createElement('div', 'functional-wrapper');
  functionalWrapper.innerHTML = `
  <button class="functional functional--statistic">Statistic</button>
  <button class="functional tool--sign-out">Sign Out</button>
  `;

  return functionalWrapper;
};

const renderHeaderPage = () => {
  const trainPage = findElement('.train-page');
  const header = createElement('div', 'header');
  const leftBlockWrapper = createElement('div', 'left-side');
  const rightBlockWrapper = createElement('div', 'right-side');

  leftBlockWrapper.append(renderLevelBlock());
  leftBlockWrapper.append(renderPageBlock());
  leftBlockWrapper.append(renderGoButton());
  header.append(leftBlockWrapper);
  rightBlockWrapper.append(renderToolsBlock());
  rightBlockWrapper.append(renderFunctionalBlock());
  header.append(rightBlockWrapper);
  trainPage.append(header);
};

export default renderHeaderPage;
