// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {
  y = x.split("");
  return y.map((num) => (num >= 5 ? (num = 1) : (num = 0))).join("");
}
