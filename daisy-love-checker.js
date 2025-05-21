class DaisyLoveChecker extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.phrases = ['loves me', 'does not love me'];
    this.init();
  }

  init() {
    this.currentIndex = 0;
    this.totalPetals = Math.floor(Math.random() * (15 - 4 + 1)) + 4;
    this.remainingPetals = this.totalPetals;

    this.shadowRoot.innerHTML = `
      <style>
        .wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: sans-serif;
        }

        .daisy {
          position: relative;
          width: 200px;
          height: 200px;
          margin: 30px 0;
        }

        .petal {
          position: absolute;
          width: 20px;
          height: 60px;
          background: #fff;
          border-radius: 50% 50% 0 0;
          transform-origin: bottom center;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          transition: transform 0.6s ease, opacity 0.6s ease;
        }

        .petal.fallen {
          transform: translateY(60px) rotate(90deg);
          opacity: 0;
        }


        button {
          padding: 10px 20px;
          font-size: 16px;
          background: #8b5cf6;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          margin-top: 10px;
          transition: background 0.3s;
        }

        button:hover {
          background: #7c3aed;
        }

        .message {
          margin-top: 20px;
          font-weight: bold;
          font-size: 18px;
        }

        .hidden {
          display: none;
        }
      </style>

      <div class="wrapper">
        <div class="daisy" id="daisy">
          <div class="center"></div>
        </div>
        <button id="pickBtn">Loves me</button>
        <button id="restartBtn" class="hidden">Restart 🌼</button>
        <div class="message" id="message"></div>
      </div>
    `;

    this.daisy = this.shadowRoot.getElementById('daisy');
    this.button = this.shadowRoot.getElementById('pickBtn');
    this.restartButton = this.shadowRoot.getElementById('restartBtn');
    this.message = this.shadowRoot.getElementById('message');

    this.createPetals();
    this.button.onclick = () => this.pickPetal();
    this.restartButton.onclick = () => this.init();
  }

  createPetals() {
    this.daisy.innerHTML = '<div class="center"></div>'; // clear previous petals
    const angleStep = 360 / this.totalPetals;
    for (let i = 0; i < this.totalPetals; i++) {
      const petal = document.createElement('div');
      petal.className = 'petal';
      petal.style.transform = `rotate(${i * angleStep}deg) translateY(-80px)`;
      this.daisy.appendChild(petal);
    }
  }

  pickPetal() {
    if (this.remainingPetals <= 0) return;

    const petals = this.shadowRoot.querySelectorAll('.petal:not(.fallen)');
    const petal = petals[0];
    if (petal) petal.classList.add('fallen');

    this.button.textContent = this.phrases[this.currentIndex];
    this.currentIndex = 1 - this.currentIndex;
    this.remainingPetals--;

    if (this.remainingPetals === 0) {
      const finalText = this.button.textContent;
      this.message.textContent = `Final answer: He "${finalText}".`;

      // Hide pick button, show restart button
      this.button.classList.add('hidden');
      this.restartButton.classList.remove('hidden');
    }
  }
}

customElements.define('daisy-love-checker', DaisyLoveChecker);
