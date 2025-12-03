import fs from 'node:fs/promises';

async function readFile() {
  try {
    const data = await fs.readFile('input', { encoding: 'utf8' });
    return data;
  } catch (err) {
      console.error(err);
  }
}

function turnRight(currentPosition: number, distance: number) {
  // rotate toward higher numbers
  const newPosition = currentPosition + (distance%100);
  return newPosition%100;
}

function turnLeft(currentPosition: number, distance: number) {
  // rotate toward lower numbers
  const newPosition = currentPosition - (distance%100);
  if (newPosition < 0) {
    return newPosition + 100;
  } else {
    return newPosition;
  }
}


async function getPassword() {
  let result = 0;
  let currentPosition = 50;

  // read file
  const data = await readFile();
  if (!data) {
    console.error('Invalid input.')
    return 0;
  }
  
  // convert input to array
  const turns = data.split('\n');

  // turn the dial
  for (let i = 0; i < turns.length; i++) {
    const currentTurn = turns[i];
    const distance = Number(currentTurn.slice(1));

    if (currentTurn.startsWith('L')) {
      // turn left
      if (currentPosition - (distance % 100) <= 0 && currentPosition > 0) {
        result++;
      }
      currentPosition = turnLeft(currentPosition, distance)
    } else if (currentTurn.startsWith('R')) {
      // turn right
      if (currentPosition + (distance % 100) >= 100) {
        result++;
      }
      currentPosition = turnRight(currentPosition, distance)
    } else {
      console.log('invalid turn operation: ', currentTurn)
      continue;
    }

    result += Math.floor(distance / 100);
    // console.log(currentTurn, currentPosition, result)
  }

  return result;
}

getPassword().then((result) => {console.log(result)})
