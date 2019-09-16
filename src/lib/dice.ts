import MersenneTwister from 'mersenne-twister';

const generator = new MersenneTwister();

export function throwDice(nDice: number, maxNumber: number): number {
    if (maxNumber === 100) {
        return nDice * getRandomInt(1, 99);
    }
    return nDice * getRandomInt(1, maxNumber);
}

function getRandomInt(min: number, max: number) {
  return generator.random_int() % (max - min) + min + 1;
}
