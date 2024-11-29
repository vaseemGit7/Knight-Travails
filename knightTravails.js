const knightRules = [
  [+1, +2],
  [-1, +2],
  [+1, -2],
  [-1, -2],
  [+2, +1],
  [+2, -1],
  [-2, +1],
  [-2, -1],
];

function getValidMoves(current) {
  let validMoves = [];
  for (let i = 0; i < knightRules.length; i++) {
    let x = current[0] + knightRules[i][0];
    let y = current[1] + knightRules[i][1];
    if (x >= 0 && y >= 0 && x <= 7 && y <= 7) {
      validMoves.push([x, y]);
    }
  }

  return validMoves;
}

function backtrackPath(target, parentMap) {
  let path = [];
  let current = JSON.stringify(target);

  while (current !== null) {
    path.unshift(JSON.parse(current));
    current = parentMap.get(current);
  }

  console.log(`You made it in ${path.length} moves!, Here's your path:`, path);
  return;
}

function knightMoves(source, target) {
  let visited = new Set();
  let pathmap = new Map();
  let queue = [];

  queue.push(source);
  pathmap.set(JSON.stringify(source), null);

  while (queue.length > 0) {
    const boardSquare = queue.shift();

    if (JSON.stringify(boardSquare) === JSON.stringify(target)) {
      break;
    }

    let children = getValidMoves(boardSquare);

    if (!visited.has(JSON.stringify(boardSquare))) {
      visited.add(JSON.stringify(boardSquare));

      for (let child of children) {
        if (
          !visited.has(JSON.stringify(child)) &&
          !pathmap.has(JSON.stringify(child))
        ) {
          pathmap.set(JSON.stringify(child), JSON.stringify(boardSquare));
          queue.push(child);
        }
      }
    }
  }

  backtrackPath(target, pathmap);
}

export default knightMoves;
