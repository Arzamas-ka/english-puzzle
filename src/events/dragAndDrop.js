import { findElement, createElement, removeElement } from '../helper/domHelpers';

let wordPuzzles = [];
let collectionIdx = 0;

export const initGame = (puzzles) => {
  const fieldSentence = findElement('.puzzle-pieces');
  wordPuzzles = puzzles;

  fieldSentence.append(wordPuzzles[collectionIdx]);
  dragDrop();
};

function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll('.draggable:not(.dragging)'),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child, };
      }
      return closest;
    },
    { offset: Number.NEGATIVE_INFINITY, }
  ).element;
}

const addDragOver = (e) => {
  console.log('dragover');
  e.preventDefault();
  const afterElement = getDragAfterElement(e.target, e.clientY);
  const draggable = document.querySelector('.dragging');
  if (afterElement == null) {
    e.target.appendChild(draggable);
  } else {
    e.target.append(draggable, afterElement);
  }
};

const addPuzzlesDragEvent = () => {
  const draggables = document.querySelectorAll('.draggable');

  const addDragStart = (e) => {
    e.target.classList.add('dragging');
    // console.log('dragStart');
  };

  const addDragEnd = (e) => {
    const puzzleContainer = findElement('.group-words');

    if (
      puzzleContainer.children.length === 0 &&
      wordPuzzles.length > collectionIdx + 1
    ) {
      // console.log('end');
      collectionIdx += 1;

      const fieldSentence = findElement('.puzzle-pieces');

      draggables.forEach((draggable) => {
        draggable.removeEventListener('dragstart', addDragStart);
        draggable.removeEventListener('dragend', addDragEnd);

        const containers = document.querySelectorAll('.puzzle-container');
        containers.forEach((container) => {
          container.removeEventListener('dragover', addDragOver);
        });
      });

      // console.log('test');

      removeElement('.group-words');
      fieldSentence.append(wordPuzzles[collectionIdx]);
      dragDrop();
    }

    e.target.classList.remove('dragging');
  };

  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', addDragStart);

    draggable.addEventListener('dragend', addDragEnd);
  });
};

const addContainerDragOver = () => {
  const containers = document.querySelectorAll(
    `.container-row-${collectionIdx + 1}`
  );

  console.log(containers);

  if (containers.length > 0) {
    containers[containers.length - 1].addEventListener('dragover', addDragOver);
  }
};

const dragDrop = () => {
  const puzzlesContainer = findElement('.puzzle-container');
  const row = createElement('div', 'row');
  row.classList.add(`container-row-${collectionIdx + 1}`);
  row.style.height = '100%';
  puzzlesContainer.appendChild(row);

  if (puzzlesContainer.children.length > 1) {
    puzzlesContainer.children[puzzlesContainer.children.length - 2].style.height = '50px';
  }

  addPuzzlesDragEvent();
  addContainerDragOver();
};

export default dragDrop;
