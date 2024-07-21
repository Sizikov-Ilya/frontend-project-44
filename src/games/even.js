import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const startEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const rounds = 3;
  for (let i = 0; i < rounds; i += 1) {
    const number = getRandomNumber(1, 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default startEvenGame;
