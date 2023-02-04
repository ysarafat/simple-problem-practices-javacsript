function reverseMaker(word) {
  let str = word.split("").reverse().join("");
  return str;
}
const name = reverseMaker("All the best my frieds");
console.log(name);
