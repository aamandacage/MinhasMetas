const goals = [
  {
    name: "Me formar no Ensino Médio",
    targetDate: "2026-12-20T00:00:00",
    image: "meta-1.webp"
  },
  {
    name: "Terminar meu Curso",
    targetDate: "2027-02-15T00:00:00",
    image: "meta-2.webp"
  },
  {
    name: "Começar um Cursinho Preparatório",
    targetDate: "2027-06-15T00:00:00",
    image: "meta-3.webp"
  },
  {
    name: "Começar a Trabalhar Fora",
    targetDate: "2027-01-10T00:00:00",
    image: "meta-4.webp"
  }
];

const container = document.getElementById("goalsContainer");

function createCards() {
  goals.forEach((goal, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="top-line"></div>
      <h2>${goal.name}</h2>
      <div class="date">Prazo final: ${new Date(goal.targetDate).toLocaleDateString('pt-BR')}</div>

      <div class="timer" id="timer-${index}"></div>

      <div class="goal-image">
        <img src="${goal.image}" alt="${goal.name}">
      </div>
    `;

    container.appendChild(card);
  });
}

function updateTimers() {
  const now = new Date().getTime();

  goals.forEach((goal, index) => {
    const target = new Date(goal.targetDate).getTime();
    const distance = target - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById(`timer-${index}`).innerHTML = `
      <div class="time-box">
        <strong>${days}</strong>
        <span>Dias</span>
      </div>

      <div class="time-box">
        <strong>${hours}</strong>
        <span>Horas</span>
      </div>

      <div class="time-box">
        <strong>${minutes}</strong>
        <span>Min</span>
      </div>

      <div class="time-box">
        <strong>${seconds}</strong>
        <span>Seg</span>
      </div>
    `;
  });
}

createCards();
updateTimers();
setInterval(updateTimers, 1000);
