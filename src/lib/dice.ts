import MersenneTwister from 'mersenne-twister';

const generator = new MersenneTwister();

export function throwDice(n: number, ub: number): number {
  let result = 0;
  for ( let i = 0; i < n; i++ ) {
    result += getRandomInt(1, ub);
  }
  return result;
}

function getRandomInt(lb: number, ub: number) {
  return generator.random_int() % (ub - lb + 1) + lb;
}
