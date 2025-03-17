const eventDate = new Date('April 12, 2025 16:00:00').getTime();

const countdownTimer = document.getElementById('countdown-timer');
const calendar = document.getElementById('calendar');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(x);
        countdownTimer.innerHTML = "¡Ya empezó!";
    }
}

updateCountdown();
const x = setInterval(updateCountdown, 1000);

// Calendario
const eventDateObj = new Date(eventDate);
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
calendar.innerHTML = `Fecha: ${eventDateObj.toLocaleDateString('es-ES', options)}`;
