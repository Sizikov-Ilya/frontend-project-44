import runGame from '../index.js';
import { getRandomInt, isPrime } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question.toString(), correctAnswer];
};

const startPrimeGame = () => runGame(description, generateRound);

export default startPrimeGame;
