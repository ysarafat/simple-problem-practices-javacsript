function volume(ml) {
  const calculation = ml / 1000;
  const convart = calculation.toFixed(2);
  return parseFloat(convart);
}
const water = 541275;
const totalWater = volume(water);
console.log(totalWater, "Liter");
