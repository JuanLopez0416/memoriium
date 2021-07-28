import View from './view.js';

class ModalView extends View {
  parentElement = document.querySelector(`.game-modal`);
  title = 'Reglas del juego';
  message =
    'Por unos pocos segundos aparecerán una serie de números en la pantalla. Trata de recordar donde están. Los números se esconderan y se te preguntara la posición de alguno de ellos. Oprime la posición donde crees que está el número indicado.';

  constructor() {
    super();
    this.render();
  }

  addHandlerToggle(handler) {
    this.parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.game-modal-btn');
      if (!btn) return;
      handler();
    });
  }

  lostMessage() {
    const newMarkup = this._generateMarkup(
      'Perdiste',
      'Mala memoria',
      'Intentar de nuevo'
    );
    this.render(newMarkup);
  }

  nextMessage() {
    const newMarkup = this._generateMarkup(
      'Bien Hecho',
      'Muy bien pre se le felicita',
      'Siguiente'
    );
    this.render(newMarkup);
  }

  _generateMarkup(
    title = this.title,
    message = this.message,
    btn = 'Iniciar Juego'
  ) {
    return `
        <div class="title">
                <h2 class="game-modal-title">${title}</h2>
            </div>
            <p>${message}</p>
                <button class="game-modal-btn">${btn}</button>
        `;
  }
}

export default new ModalView();
