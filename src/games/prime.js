import { flowGame, getRandomInt } from '..';

const task = 'Answer "yes" if number is prime otherwise answer "no".\n';
const mechanics = () => {
  const isPrime = (n) => {
    for (let index = 2; index <= Math.sqrt(n); index += 1) {
      if (n % index === 0) return false;
    }
    return true;
  };
  const question = getRandomInt(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return { question, answer };
};

const startGame = () => flowGame({ task, mechanics });
export default startGame;

