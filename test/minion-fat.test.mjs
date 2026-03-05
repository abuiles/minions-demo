import test from 'node:test';
import assert from 'node:assert';
import { addFoodFat, resetFat, FOOD_FAT_GAIN } from '../public/minion-fat.mjs';

test('banana increases fat proportionally', () => {
  let fat = 0;
  fat = addFoodFat(fat, 'banana');
  fat = addFoodFat(fat, 'banana', 2);
  assert.equal(fat, FOOD_FAT_GAIN.banana * 3);
});

test('unknown food does not change fat', () => {
  const fat = addFoodFat(2.4, 'mystery');
  assert.equal(fat, 2.4);
});

test('resetFat always returns zero', () => {
  assert.equal(resetFat(), 0);
});

test('negative quantity does not reduce fat', () => {
  const fat = addFoodFat(5, 'banana', -3);
  assert.equal(fat, 5);
});
