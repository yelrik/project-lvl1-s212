import readlineSync from 'readline-sync';

const getUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export const greeting = () => console.log('Welcome to the Brain Games!');

export const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min)) + min;

export const isEven = n => ((n % 2 === 0) ? 'yes' : 'no');

export const whatIsYourName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}! \n`);
  return name;
};

export const questionAndAnswer = (q) => {
  console.log(`Question: ${q}`);
  const ans = readlineSync.question('Your answer: ');
  return ans;
};

export const func = () => {
  greeting();
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = whatIsYourName();
  let i = 0;
  while (i < 3) {
    const q = getRandomInt();
    const ans = questionAndAnswer(q);
    if (isEven(q) === ans) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${ans}' is wrong answer \n Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default getUserName;
