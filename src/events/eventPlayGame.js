import axios from 'axios';
import { showLoader, hideLoader } from '../render/renderLoader';
import { findElement } from '../helper/domHelpers';

const playGame = (data) => {
  const translateString = findElement('.puzzle-translating');
  const translateButton = findElement('.tool--image');
  const fieldSentence = findElement('.puzzle-pieces');

  data.forEach((element) => {
    fieldSentence.textContent = element.textExample;
  });

  translateButton.addEventListener('click', () => {
    data.forEach((element) => {
      translateString.textContent = element.textExampleTranslate;
    });
  });
};

const getWords = async () => {
  // const urlWords = (level, page) =>
  //   `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${level}`;

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

    console.log(result.data);
  } catch (error) {
    console.log(error);
  }
};

const handleGetWords = () => {
  const buttonGoPlay = findElement('.left-button');

  buttonGoPlay.addEventListener('click', getWords);
};

export default handleGetWords;
