import { flowGame, getRandomInt } from '..';

const task = 'Find the greatest common divisor of given numbers.';
const mechanics = () => {
  const getNode = (num1, num2) => {
    if (num2 === 0) {
      return num1;
    }
    const remainderOfDivizion = num1 % num2;
    return getNode(num2, remainderOfDivizion);
  };


  const n1 = getRandomInt(1, 100);
  const n2 = getRandomInt(1, 100);
  const question = `${n1} ${n2}`;
  const answer = String(getNode(n1, n2));

  return { question, answer };
};

const startGame = () => flowGame({ task, mechanics });
export default startGame;

