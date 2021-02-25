const splitTheString = (value: string): string[] => {
  return value.split("");
};

const reverseTheString = (value: string[]): string[] => {
  return value.reverse();
};

const joinTheString = (value: string[]): string => {
  return value.join("");
};

const isPalindrome = (value: string): boolean => {
  const splitString = splitTheString(value);
  const reversedString = reverseTheString(splitString);
  const joinedString = joinTheString(reversedString);
  const result = joinedString === value;
  return result;
};

const isPalindromeSimple = (value: string): boolean =>
  value === value.split("").reverse().join("");

const result = isPalindrome("racecar");
const resultUsingSimpleFunction = isPalindromeSimple("boat");

console.log(result);
console.log(resultUsingSimpleFunction);
