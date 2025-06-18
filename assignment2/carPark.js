function indexFind(carpark) {
  let index = {};
  let stairCase = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (carpark[i][j] === 2) {
        index.floor = i;
        index.car = j;
      }
      if (carpark[i][j] === 1) {
        stairCase.push(j);
      }
    }
    if (i === rows - 1) {
      stairCase.push('jeje');
    }
  }
  return { index, stairCase };
}

function findLeftRight(index, stairCase, cols) {
  let copy = { ...index };
  let moves = [];
  for (let i = index.floor; i < stairCase.length; i++) {
    if (stairCase[i] === 'jeje') {
      stairCase[i] = cols - 1;
      //console.log('Reached the last stair case');
      if (Math.abs(stairCase[i] - copy.car) === 0) {
        return moves;
      }
      let move = 'R' + Math.abs(stairCase[i] - copy.car);
      //console.log('Final move:', move);
      moves.push(move);
      return moves;
    }
    if (copy.car - stairCase[i] === 0) {
      if (moves[moves.length - 1].includes('D')) {
        let popped = moves.pop();
        let num = parseInt(popped.replace('D', '')) + 1;
        moves.push('D' + num);
      } else {
        moves.push('D' + 1);
      }
      continue;
    }
    if (copy.car - stairCase[i] < 0) {
      //console.log('Moving right');
      let move = 'R' + Math.abs(copy.car - stairCase[i]);
      moves.push(move);
    }
    //console.log('Current car position:', copy.car, stairCase[i]);
    if (copy.car - stairCase[i] > 0) {
      //console.log('Moving left');
      let move = 'L' + Math.abs(copy.car - stairCase[i]);
      moves.push(move);
    }

    copy.car = stairCase[i];
    if (moves[moves.length - 1].includes('D')) {
      let popped = moves.pop();
      let num = parseInt(popped.replace('D', '')) + 1;
      moves.push('D' + num);
    } else {
      moves.push('D' + 1);
    }
    copy.floor++;
  }
  return moves;
}

const rows = carpark.length;
const cols = carpark[0].length;
let { index, stairCase } = indexFind(carpark);
console.log(index, stairCase);
const idx = findLeftRight(index, stairCase, cols);
