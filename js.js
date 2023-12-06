const calendarContainer = document.getElementById('calendar');
const modalMessageElement = document.getElementById('modal-message');

const messages = [
    "Dzień 1:Niech Ci gwiazdka błyszczy jasno!",
    "Dzień 2:Wesołych Świąt i szczęśliwego Nowego Roku!",
    "Dzień 3:Zdrowia, miłości i radości w sercu! ",
    "Dzień 4:Niech Mikołaj spełni wszystkie marzenia! ",
    "Dzień 5:Świątecznego nastroju i ciepłej atmosfery! ",
    "Dzień 6:Niech Ci aniołki strzegą snu!s ",
    "Dzień 7:Spokojnych i rodzinnych Świąt Bożego Narodzenia! ",
    "Dzień 8:Niech Ci się dobrze wiedzie! ",
    "Dzień 9:Świątecznego uśmiechu i dobrego humoru! ",
    "Dzień 10:Niech Ci się śnią piękne sny! ",
    "Dzień 11:Niech Ci się darzy pomyślnie! ",
    "Dzień 12:Niech Ci się spełniają życzenia! ",
    "Dzień 13:Niech Ci się dobrze dzieje! ",
    "Dzień 14:Niech Ci się świeci słońce! ",
    "Dzień 15:Niech Ci się cieszy oko! ",
    "Dzień 16:Niech Ci się smakuje barszcz!",
    "Dzień 17:Niech Ci się śpiewa kolęda! ",
    "Dzień 18:Niech Ci się tańczy z choinką! ",
    "Dzień 19:Niech Ci się gra w kalambury! ",
    "Dzień 20:Niech Ci się czyta książka! ",
    "Dzień 21:Niech Ci się pije grzaniec! ",
    "Dzień 22:Niech Ci się piecze piernik! ",
    "Dzień 23:Niech Ci się maluje bombka!",
    "Dzień 24: Niech Ci się lepi bałwan!"
];

for (let i = 0; i < 24; i++) {
    const dayElement = document.createElement('div');
    dayElement.className = 'calendar-day';
    dayElement.textContent = i + 1;

    dayElement.addEventListener('click', () => showThanksModal(i));

    calendarContainer.appendChild(dayElement);
}

function showThanksModal(dayIndex) {
    const modal = document.getElementById('thanks-modal');
    modalMessageElement.textContent = messages[dayIndex];
    modal.style.display = 'flex';
}

function closeThanksModal() {
    const modal = document.getElementById('thanks-modal');
    modal.style.display = 'none';
}

const snowContainer = document.getElementById('snow');
for (let i = 0; i < 50; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.width = `${Math.random() * 10}px`;
    snowflake.style.height = `${Math.random() * 10}px`;
    snowflake.style.top = `${Math.random() * 100}vh`;
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;

    snowContainer.appendChild(snowflake);
}
