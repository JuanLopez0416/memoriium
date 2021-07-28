export default class View {
  overlay = document.querySelector(`.overlay`);

  updateData(data) {
    this.data = data;
  }

  toggleModal() {
    this.parentElement.classList.toggle('hidden');
    this.overlay.classList.toggle('hidden');
  }

  render(markup = this._generateMarkup()) {
    this.clear();
    this.parentElement.insertAdjacentHTML('beforeend', markup);
  }

  clear() {
    this.parentElement.innerHTML = '';
  }

  renderScore(score) {
    const scoreElm = document.querySelector(`#highscore`);
    scoreElm.textContent = score;
  }
}
