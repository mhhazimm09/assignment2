var hasWon = false;

window.rollDice = () => {
  if (hasWon) {
    return;
  }

  const max = 5;
  const roll = Math.ceil(Math.random() * max) + 1;

  console.log("You rolled ", roll);
  let currPlayer = players[currPlayerPos];
  currPlayer.position += roll;
  console.log(currPlayer);

  ladders.forEach(ladder =>{
    if (ladder.startLad === currPlayer.position){
      console.log("You get a ladder! Go to position ", ladder.endLad);
      currPlayer.position = ladder.endLad;
    }
  });

  snakes.forEach(snake =>{
    if (snake.startSnake === currPlayer.position){
      console.log("You get snake! Go to position ", snake.endSnake);
      currPlayer.position = snake.endSnake;
    }
  });

  if (currPlayer.position >= 25) {
    console.log("You rolled ", roll, "The Player has won!");
    hasWon = true;
  }

  currPlayerPos++;
  if (currPlayerPos >= players.length) {
    currPlayerPos = 0;
  }
}

const players = [{
  name : "Player 1",
  position : 0
},{
  name : "Player 2",
  position : 0
}];

const ladders = [{
  startLad : 8,
  endLad : 15
},{
  startLad : 19,
  endLad : 24
}];

const snakes = [{
  startSnake : 15,
  endSnake : 5
},{
  startSnake : 23,
  endSnake : 16
}]

let currPlayerPos = 0;

const width = 5;
const length = 5;
const board = [ ];

for (var y = 0; y < length; y++){
  let row = [ ];
  let position = 0;
  board.push(row);

  for(var x = 0; x < width; x++){
    row.push({x,y, occupied: null, position});
    position++;
  }
}

console.log(board);

ladders.forEach(ladder =>{

  let startPos = {x:0, y:0};
  let endPos = {x:0, y:0};
})
