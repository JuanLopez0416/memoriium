export const state = {
  currentNumber: 0,
  totalNumbers: 2,
  gameNumbers: [],
  numsVisible: true,
  seconds: 2,
  lives: 3,
  score: 0,
  highscore: 0,
};

class gameNum {
  index;
  constructor(value) {
    this.value = value;
  }
}

const randomizeArray = function (arr) {
  return arr.sort(() => Math.random() - 0.5);
};

const updateIndex = function (arr) {
  arr.forEach((num, i) => (num.index = i));
};

const generateNumbers = function (totalNum) {
  const arr = [];
  for (let i = 1; i <= totalNum; i++) {
    arr.push(new gameNum(i));
  }
  // Randomize array
  randomizeArray(arr);
  // Set Indexes
  updateIndex(arr);

  return arr;
};

export const newRound = function () {
  // Add 1 number
  state.totalNumbers++;
  state.seconds++;
  state.score++;
  if (state.score > state.highscore) {
    state.highscore = state.score;
    updateScore();
  }
  // Generate array and update state
  state.gameNumbers = generateNumbers(state.totalNumbers);
  // Select number
  state.currentNumber =
    state.gameNumbers[Math.trunc(Math.random() * state.totalNumbers)].index;
};

export const restart = function () {
  state.currentNumber = 0;
  state.totalNumbers = 2;
  state.gameNumbers = [];
  state.numsVisible = true;
  state.seconds = 2;
  state.lives = 3;
};

const updateScore = function () {
  localStorage.setItem('highscore', JSON.stringify(state.highscore));
};

const getScore = function () {
  const data = JSON.parse(localStorage.getItem('highscore'));
  if (data) state.highscore = data;
};

getScore();
