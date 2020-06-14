import { findElement, createElement } from '../helper/domHelpers';

const createLoader = () => {
  const textContent = `
    <div class='lds-ellipsis__list'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  `;
  const loader = createElement('div', 'lds-ellipsis');
  loader.innerHTML = `${textContent}`;
  const body = findElement('body');

  body.prepend(loader);
};

export const hideLoader = () => {
  const loader = findElement('.lds-ellipsis');

  if (loader) {
    loader.remove();
  }
};

export const showLoader = () => {
  const isLoaderExist = !!findElement('.lds-ellipsis');

  if (isLoaderExist) {
    return;
  }

  createLoader();
};
