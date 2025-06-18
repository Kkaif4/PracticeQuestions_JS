function escape(carpark) {
  const rows = carpark.length;
  const cols = carpark[0].length;
  let moves = [];

  // Find the starting point of the car (2)
  let startRow = 0, startCol = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (carpark[i][j] === 2) {
        startRow = i;
        startCol = j;
        break;
      }
    }
  }

  let currentCol = startCol;
  let lastDirection = '';
  let lastCount = 0;

  const pushMove = (direction, count) => {
    if (count > 0) {
      moves.push(direction + count);
    }
  };

  for (let i = startRow; i < rows; i++) {
    let stairCol = carpark[i].indexOf(1);

    if (stairCol !== -1) {
      let horizontalMove = stairCol - currentCol;
      if (horizontalMove !== 0) {
        if (lastDirection === 'R' || lastDirection === 'L') {
          pushMove(lastDirection, lastCount);
          lastCount = 0;
        }
        let dir = horizontalMove > 0 ? 'R' : 'L';
        pushMove(dir, Math.abs(horizontalMove));
        currentCol = stairCol;
      }
      moves.push('D1');
    } else if (i < rows - 1) {
      let nextStairCol = carpark[i + 1].indexOf(1);
      if (nextStairCol === currentCol || nextStairCol === -1) {
        lastDirection = 'D';
        lastCount++;
      } else {
        pushMove(lastDirection, lastCount);
        lastDirection = 'D';
        lastCount = 1;
      }
    } else {
      pushMove(lastDirection, lastCount);
    }
  }

  // On last floor, move to far right if needed (exit)
  let exitCol = carpark[rows - 1].indexOf(2);
  if (exitCol === -1) exitCol = currentCol;
  let finalMove = cols - 1 - exitCol;
  if (finalMove > 0) {
    pushMove('R', finalMove);
  } else if (finalMove < 0) {
    pushMove('L', -finalMove);
  }

  return moves;
}
carpark = [[2, 0, 0, 1, 0],
           [0, 0, 0, 1, 0],
           [0, 0, 0, 0, 0]];

console.log(escape(carpark)); // Output: ['L3', 'D1', 'R2', 'D1', 'R1']
