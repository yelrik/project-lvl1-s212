import readlineSync from 'readline-sync';

export const flowGame = ({ task, mechanics }) => {
  console.log('Welcome to the Brain Games! \n');
  if (task) console.log(`${task} \n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  let i = 0;
  while (i < 3) {
    const { question, answer } = mechanics();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer. Right answer is '${answer}' \n Let's try again, ${name}!`);
      return '';
    }
  }
  console.log(`Congratulations, ${name}!`);
  return '';
};

export const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min)) + min;

