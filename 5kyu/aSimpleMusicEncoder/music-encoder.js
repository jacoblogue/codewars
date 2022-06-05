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
