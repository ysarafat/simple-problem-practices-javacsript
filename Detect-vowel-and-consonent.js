function solution(letter) {
  let result = "";
  const vowel = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < vowel.length; i++) {
    if (letter === vowel[i]) {
      const vowel = "VOWEL";
      result = vowel;
      return vowel;
    } else if (letter !== vowel[i]) {
      const consonant = "CONSONANT";
      result = consonant;
      continue;
    }
  }
  return result;
}
const letter = "i";
const result = solution(letter);
console.log(result);
