const countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

const x = setInterval(() => {

const now = new Date().getTime();

const distance = countDownDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("demo").innerHTML = `${days}D - ${hours}H - ${minutes}M - ${seconds}S`;

if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
}
}, 1000);