const FOOD_FAT_GAIN = {
  banana: 1,
};

export function fatGainForFood(foodType) {
  return FOOD_FAT_GAIN[foodType] ?? 0;
}

export function addFoodFat(currentFat, foodType, quantity = 1) {
  const gainPerItem = fatGainForFood(foodType);
  const items = Math.max(0, quantity);
  const nextFat = currentFat + gainPerItem * items;
  return Math.max(0, nextFat);
}

export function resetFat() {
  return 0;
}

export { FOOD_FAT_GAIN };
