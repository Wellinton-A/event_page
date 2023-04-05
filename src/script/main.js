const countdown = setInterval(function () {
    const eventDate = new Date('sep 06, 2023 14:00:00')
    const now = new Date()

    const totalSeconds = (eventDate - now) / 1000;
    const seconds = Math.floor(totalSeconds) % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24 % 60;
    const days = Math.floor(totalSeconds / 86400);

    document.getElementById('countdown').innerHTML = `${format(days)}D ${format(hours)}h ${format(minutes)}m ${format(seconds)}s`;

    if (totalSeconds < 0) {
        document.getElementById('countdown').innerHTML = 'Event has already happened';
    }
}, 1000)

function format(time) {
    return time < 10 ? `0${time}` : time;
}