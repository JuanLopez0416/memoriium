import View from './view.js';
// import heartsIcon from 'url:../../heart.png';
const heartsIcon = '../../heart.png';

class NumbersView extends View {
  parentElement = document.querySelector(`.card-container`);

  _generateMarkup() {
    let markup = '';
    this.data.gameNumbers.forEach(num => {
      markup += `
        <div class="game-card" data-index="${num.index}"><span class="game-card-content" >${num.value}</span></div>
        `;
    });

    return markup;
  }

  hideNumbers() {
    const numbers = [...this.parentElement.childNodes].filter(
      elm => elm.nodeName === 'DIV'
    );
    numbers.forEach(num => (num.firstChild.textContent = '?'));
  }

  initMain() {
    const main = document.querySelector(`#game-card-content-main`);
    main.textContent = '?';
  }

  showMainNumber() {
    const main = document.querySelector(`#game-card-content-main`);

    main.textContent = this.data.gameNumbers[this.data.currentNumber].value;
  }

  addHandlerNumbers(handler) {
    this.parentElement.addEventListener('click', function (e) {
      const numBtn = e.target.closest('.game-card');
      if (!numBtn) return;
      handler(numBtn);
    });
  }

  renderLives() {
    const hearts = document.querySelector(`.lives`);
    hearts.innerHTML = '';
    let html = '';
    for (let i = 1; i <= this.data.lives; i++) {
      html += `
      <img src="${heartsIcon}" alt="heart" />`;
    }
    hearts.insertAdjacentHTML('beforeend', html);
  }
}

export default new NumbersView();
