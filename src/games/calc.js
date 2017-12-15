import { flowGame, getRandomInt } from '..';

const task = 'What is the result of the expression?';
const mechanics = () => {
  const n1 = getRandomInt(1, 10);
  const n2 = getRandomInt(1, 10);
  const randomOperator = () => {
    const operators = '+-*';
    return operators[getRandomInt(0, 3)];
  };
  const stringToOperation = (num1, num2, str) => {
    if (str === '+') return n1 + n2;
    else if (str === '-') return n1 - n2;
    return n1 * n2;
  };
  const operator = randomOperator();
  const question = `${n1} ${operator} ${n2}`;
  const answer = String(stringToOperation(n1, n2, operator));

  return { question, answer };
};

const startGame = () => flowGame({ task, mechanics });
export default startGame;

