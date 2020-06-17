import axios from 'axios';
import { showLoader, hideLoader } from '../render/renderLoader';
import { findElement } from '../helper/domHelpers';
import dragDrop, { initGame } from './dragAndDrop';
import createPuzzles from '../render/renderPuzzles';

const playGame = (data) => {
  const fieldTranslate = findElement('.puzzle-translating');

  data.forEach((element) => {
    fieldTranslate.textContent = element.textExampleTranslate;
  });

  const sentence = data.map((element) => element.textExample);

  console.log('sentence: ', sentence);

  createPuzzles({
    src: 'https://nexgenua.github.io/images/level1/viewvien.jpg',
    wordsList: sentence,
  }).then((res) => {
    initGame(res);
  });
};

export const getWordsForPuzzle = async () => {
  const urlWords = (level, page) =>
    `https://afternoon-falls-25894.herokuapp.com/words?group=${level}&page=${page}&wordsPerExampleSentenceLTE=10&wordsPerPage=10`;

  const level = findElement('#levels').value;
  const page = findElement('#pages').value;

  showLoader();

  try {
    const result = await axios.get(urlWords(level, page), {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    playGame(result.data);

    hideLoader();
  } catch (error) {
    console.log(error);
  }
};

const handleGetWords = () => {
  const buttonGoPlay = findElement('.left-button');

  buttonGoPlay.addEventListener('click', getWordsForPuzzle);
};

export default handleGetWords;
