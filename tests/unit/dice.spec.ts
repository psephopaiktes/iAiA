import {throwDice} from '@/lib/dice.ts';

describe('Dice', () => {
  it('returns random int nDice x maxNumber', () => {
    for (let i = 0; i < 100; i++) {
      const res = throwDice(3, 10);
      expect(res).toBeGreaterThanOrEqual(3);
      expect(res).toBeLessThanOrEqual(30);
    }
  });
});
