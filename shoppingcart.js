const myShoppingList = [
  { name: "Dano Milk", price: 500 },
  { name: "Taaza Tea", price: 200 },
  { name: "Fresh Sugar", price: 300 },
  { name: "Alu" , price: 20}
];
function totalCost(items) {
  let cost = 0;
  for (let i = 0; i < items.length; i++) {
    const element = items[i];
    const prices = element.price;
    cost = cost + prices;
  }
  return cost;
}
const items = totalCost(myShoppingList);
console.log(items);
