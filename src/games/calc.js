import { getRandomInt } from '../utils.js';

const operations = ['+', '-', '*'];

const calculate = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown operation: '${operation}'`);
  }
};

const generateRound = () => {
  const a = getRandomInt(1, 20);
  const b = getRandomInt(1, 20);
  const operation = operations[getRandomInt(0, operations.length - 1)];

  const question = `${a} ${operation} ${b}`;
  const correctAnswer = String(calculate(a, b, operation));

  return [question, correctAnswer];
};

const gameDescription = 'What is the result of the expression?';

export { generateRound, gameDescription };
