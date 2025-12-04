import fs from 'node:fs/promises';

async function readFile() {
  try {
    const data = await fs.readFile('input2', { encoding: 'utf8' });
    return data;
  } catch (err) {
      console.error(err);
  }
}

function isRepeatedSubstring(str: string): boolean {
    for (let len = 1; len <= str.length / 2; len++) {
      // check if the substring length divides the string length evenly
      if (str.length % len === 0) {
        const substring = str.slice(0, len);
        const repeated = substring.repeat(str.length / len);

        if (repeated === str) {
          return true;
        }
      }
    }

    return false;
  }


function isInvalid(id: string): boolean {
  if (String(id).startsWith('0')) { 
    return true;
  }

  return isRepeatedSubstring(id);
}

async function main() {
  let result = 0;

  // read file
  const data = await readFile();
  if (!data) {
    console.error('Invalid input.')
    return 0;
  }

  // split the ranges
  const ranges = data.split(',');

  // loop through the ranges
  ranges.forEach((range) => {
    const [start, end] = range.split('-');
    for (let i=Number(start); i<=Number(end); i++) {
      if (isInvalid(String(i))) {
        result += i;
      }
    }
  })

  return result;
}

main().then((result) => {console.log(result)})
