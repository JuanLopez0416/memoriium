import ModalView from './views/modalView.js';
import NumbersView from './views/numbersView.js';
import * as model from './model.js';
import numbersView from './views/numbersView.js';

const controllerModal = function () {
  // toggleView
  ModalView.toggleModal();
  // Generate round numbers
  model.newRound();
  // Display Numbers
  numbersView.updateData(model.state);
  numbersView.render();
  //  Hide nums
  toggleNums();
};

const toggleNums = function () {
  // hide numbers
  setTimeout(function () {
    model.state.numsVisible = false;
    numbersView.updateData(model.state);
    numbersView.hideNumbers();
    numbersView.showMainNumber();
  }, model.state.seconds * 1000);
};

const controllerNums = function (numElm) {
  if (model.state.numsVisible) return;
  //   If answered wrong
  if (+numElm.dataset.index !== model.state.currentNumber) {
    model.state.lives--;
    if (model.state.lives === 0) {
      ModalView.toggleModal();
      ModalView.lostMessage();
      model.restart();
      numbersView.renderLives();
      numbersView.initMain();
      return;
    }
    numbersView.updateData(model.state);
    numbersView.renderLives();
  }
  //   If right
  if (+numElm.dataset.index === model.state.currentNumber) {
    numbersView.initMain();
    ModalView.nextMessage();
    ModalView.toggleModal();
    numbersView.renderScore(model.state.highscore);
  }
};

const init = function () {
  ModalView.addHandlerToggle(controllerModal);
  NumbersView.addHandlerNumbers(controllerNums);
  numbersView.renderScore(model.state.highscore);
};
init();
