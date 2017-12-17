import { flowGame, getRandomInt } from '..';

const task = 'What number is missing in this progression?\n';
const mechanics = () => {
  const length = 10;
  const startofArr = getRandomInt(1, 100);
  const step = getRandomInt(2, 10);
  const indexOfsecretNum = getRandomInt(0, length - 1);
  let answer = null;
  const getArr = () => {
    const arr = [];
    for (let index = 1; index < length + 1; index += 1) {
      if (index === indexOfsecretNum) {
        arr.push('..');
        answer = startofArr + (step * index);
      } else {
        arr.push(startofArr + (step * index));
      }
    }
    return arr;
  };
  const question = getArr();
  return { question, answer: `${answer}` };
};

const startGame = () => flowGame({ task, mechanics });
export default startGame;

