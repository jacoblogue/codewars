// # You have been hired by a major MP3 player manufacturer to implement a new music compression standard. In this kata you will implement the ENCODER, and its companion kata deals with the DECODER. It can be considered a harder version of Range Extraction.

// # Specification
// # The input signal is represented as an array of integers. Several cases of regularities can be shortened.

// # A sequence of 2 or more identical numbers is shortened as number*count
// # A sequence of 3 or more consecutive numbers is shortened as first-last. This is true for both ascending and descending order
// # A sequence of 3 or more numbers with the same interval is shortened as first-last/interval. Note that the interval does NOT need a sign
// # Compression happens left to right
// # Examples
// # [1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20] is compressed to "1,3-5,7-11,14,15,17-20"
// # [0, 2, 4, 5, 7, 8, 9] is compressed to "0-4/2,5,7-9"
// # [0, 2, 4, 5, 7, 6, 5] is compressed to "0-4/2,5,7-5"
// # [0, 2, 4, 5, 7, 6, 5, 5, 5, 5, 5] is compressed to "0-4/2,5,7-5,5*4"
// # Input
// # A non-empty array of integers

// # Output
// # A string of comma-separated integers and sequence descriptors

function checkDuplicate(raw) {
  let cache = [];

  if (raw.length > 1) {
    cache = [raw[0]];
  } else {
    return false;
  }

  let count = 1;
  let lastIndex = 1;
  let isDuplicate = false;

  for (let i = 1; i < raw.length; i++) {
    if (raw[i] == cache[cache.length - 1]) {
      isDuplicate = true;
      count++;
      lastIndex = i + 1;
      cache.push(raw[i]);
    } else {
      break;
    }
  }

  if (isDuplicate) {
    let outputString = `${cache[0]}*${count}`;
    raw = raw.slice(lastIndex);
    return [raw, outputString];
  }
}

function checkSequence(raw) {
  if (raw.length < 3) {
    return false;
  }

  let interval = raw[1] - raw[0];

  if (interval == 0) {
    return false;
  }

  let lastNumChecked = raw[0];
  let cache = [lastNumChecked];
  let lastIndex = 0;
  for (let i = 1; i < raw.length; i++) {
    if (raw[i] - lastNumChecked != interval) {
      break;
    } else {
      lastNumChecked = raw[i];
      cache.push(lastNumChecked);
      lastIndex = i + 1;
    }
  }

  if (cache.length >= 3 && Math.abs(interval) == 1) {
    let outputString = `${cache[0]}-${cache[cache.length - 1]}`;
    return [raw.slice(lastIndex), outputString];
  } else if (cache.length > 2) {
    let outputString = `${cache[0]}-${cache[cache.length - 1]}/${Math.abs(
      interval
    )}`;
    return [raw.slice(lastIndex), outputString];
  } else {
    return false;
  }
}

function compress(raw) {
  let output = "";
  while (raw.length > 0) {
    let sequence = checkSequence(raw);
    let duplicate = checkDuplicate(raw);

    if (duplicate) {
      raw = duplicate[0];
      output += duplicate[1];
      output += ",";
    } else if (sequence) {
      raw = sequence[0];
      output += sequence[1];
      output += ",";
    } else {
      output += `${raw[0].toString()},`;
      raw = raw.slice(1);
    }
  }
  return output.slice(0, -1);
}

console.log(compress([1, 2, 2, 5]));
console.log(compress([0, 2, 4, 5, 7, 8, 9]));
console.log(compress([0, 2, 4, 5, 7, 6, 5, 5, 5, 5, 5]));
