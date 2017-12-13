#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greeting } from '..';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const num = () => getRandomInt(1, 100);
const isEven = n => ((n % 2 === 0) ? 'yes' : 'no');
const answer = () => readlineSync.question('Your answer: ');

const getNum = () => getRandomInt(1, 100);

const func = () => {
  greeting();
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}! \n`);
  let i = 0;
  while (i < 3) {
    let num = getNum();
    console.log(`Question: ${num}`);
    let answer = readlineSync.question('Your answer: ');
    if (isEven(num) === answer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer \n Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

func();

