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

export const brainEven = () => {
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

const randomOperator = () => {
  const operators = '+-*';
  return operators[getRandomInt(0, 3)];
};

const stringToOperation = (n1, n2, str) => {
  if (str === '+') return n1 + n2;
  else if (str === '-') return n1 - n2;
  return n1 * n2;
};

export const calcGame = () => {
  greeting();
  console.log('What is the result of the expression?\n');
  const name = whatIsYourName();
  let i = 0;
  while (i < 3) {
    const n1 = getRandomInt(1, 10);
    const n2 = getRandomInt(1, 10);
    const operator = randomOperator();
    const q = `${n1} ${operator} ${n2}`;
    const ans = questionAndAnswer(q);
    const rightAnswer = String(stringToOperation(n1, n2, operator));
    if (rightAnswer === ans) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${ans}' is wrong answer. Right answer is ${rightAnswer} \n Let's try again, ${name}!`);
      return '';
    }
  }
  console.log(`Congratulations, ${name}!`);
  return '';
};

export default getUserName;
