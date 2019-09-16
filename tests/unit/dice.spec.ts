import {throwDice} from '@/lib/dice.ts';

describe('Dice', () => {
  it('returns random int nDice x maxNumber', () => {
    for (let i = 0; i < 100; i++) {
      const res = throwDice(3, 10);
      expect(res).toBeGreaterThanOrEqual(3);
      expect(res).toBeLessThanOrEqual(30);
    }
  });
  it('returns random int 1-99 if maxNumber=100', () => {
    for (let i = 0; i < 100; i++) {
      const res = throwDice(1, 100);
      expect(res).toBeGreaterThanOrEqual(1);
      expect(res).toBeLessThanOrEqual(99);
    }
  });
});
