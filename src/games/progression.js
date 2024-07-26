import runGame from '../index.js';
import getRandomInt from '../utils.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const start = getRandomInt(1, 10);
  const step = getRandomInt(1, 5);
  const length = 10;
  const progression = generateProgression(start, step, length);
  const hiddenIndex = getRandomInt(0, length - 1);
  const correctAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

const startProgressionGame = () => runGame(description, generateRound);

export default startProgressionGame;
