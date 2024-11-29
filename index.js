import knightMoves from "./knightTravails.js";

knightMoves([0, 0], [1, 2]);
//You made it in 2 moves!, Here's your path: [ [ 0, 0 ], [ 1, 2 ] ]

knightMoves([3, 3], [0, 0]);
//You made it in 3 moves!, Here's your path: [ [ 3, 3 ], [ 2, 1 ], [ 0, 0 ] ]

knightMoves([0, 0], [7, 7]);
// You made it in 7 moves!, Here's your path: [ [ 0, 0 ], [ 1, 2 ], [ 2, 4 ], [ 3, 6 ], [ 4, 4 ], [ 5, 6 ], [ 7, 7 ] ]
