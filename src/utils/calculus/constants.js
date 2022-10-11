const ADDER_SYMBOLS = ["+", "-"];
const MULTIPLIER_SYMBOLS = ["*", "/"];
const NUMBER_SEPARATOR_SYMBOLS = [",", ".", "e"];
const DIGITS_SYMBOLS = [...Array(10).keys()].map(number => number.toLocaleString());
const MATH_SYMBOLS = [
    ...ADDER_SYMBOLS,
    ...MULTIPLIER_SYMBOLS,
    ...NUMBER_SEPARATOR_SYMBOLS,
    ...DIGITS_SYMBOLS,

]; 

export {
  ADDER_SYMBOLS,
  MULTIPLIER_SYMBOLS,
  NUMBER_SEPARATOR_SYMBOLS,
  DIGITS_SYMBOLS,
  MATH_SYMBOLS
}