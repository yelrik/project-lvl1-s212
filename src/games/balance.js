import { flowGame, getRandomInt } from '..';

const task = 'Balance the given number.';
const mechanics = () => {
  const numbers = num => num.split('').map(arg => Number(arg));
  const balance = (arr) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    while ((max - min) > 1) {
      const minIndex = arr.indexOf(min);
      const maxIndex = arr.indexOf(max);
      const newArr = arr;
      newArr[minIndex] += 1;
      newArr[maxIndex] -= 1;
      return balance(newArr);
    }
    return String(arr.sort().join(''));
  };
  const question = String(getRandomInt(1, 1000));
  const answer = balance(numbers(question));
  return { question, answer };
};

const startGame = () => flowGame({ task, mechanics });
export default startGame;

