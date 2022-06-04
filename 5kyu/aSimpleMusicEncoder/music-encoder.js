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
    if (raw[i] == cache.at(-1)) {
      isDuplicate = true;
      count++;
      lastIndex = i + 1;
      cache.push(raw[i]);
    } else {
      break;
    }

    if (isDuplicate) {
      let outputString = `${cache[0]}*${count}`;
      console.log(lastIndex);
      raw = raw.slice(lastIndex);
      return [raw, outputString];
    }
  }
}

function compress(raw) {
  let output = "";
  while (raw.length > 0) {
    let duplicate = checkDuplicate(raw);

    if (duplicate) {
      raw = duplicate[0];
      output += duplicate[1];
      output += ",";
    } else {
      output += `${raw[0].toString()},`;
      raw = raw.slice(1);
    }
  }
  return output.slice(0, -1);
}

console.log(compress([1, 2, 2, 5]));
