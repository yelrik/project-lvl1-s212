import { flowGame, getRandomInt } from '..';

const task = 'Answer "yes" if number even otherwise answer "no".\n';
const mechanics = () => {
  const isEven = n => ((n % 2 === 0) ? 'yes' : 'no');
  const randomNum = getRandomInt(1, 100);
  const question = String(randomNum);
  const answer = isEven(randomNum);

  return { question, answer };
};

const startGame = () => flowGame({ task, mechanics });
export default startGame;

