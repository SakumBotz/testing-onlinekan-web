const nomorHours = document.querySelector('.angka-jam');
const barDetik = document.querySelector('.bar-detik');

const nomorElement = [];
const barElement = [];


for (let i = 1; i <= 12; i++) {
    nomorElement.push(
        `<span style="--index:${i}";><p>${i}</p></span>`
    );
}
nomorHours.insertAdjacentHTML("afterbegin", nomorElement.join(""));
console.log(nomorElement)

for (let i = 1; i <= 60; i++) {
    barElement.push(
        `<span style="--index:${i}";><p></p></span>`
    );
}
barDetik.insertAdjacentHTML("afterbegin", barElement.join(""));
console.log(nomorElement)
const bagianJam = document.querySelector('.bagian.jam');
const bagianMenit = document.querySelector('.bagian.menit');
const bagianDetik = document.querySelector('.bagian.detik');
function getCurrentTime() {
    let date = new Date();
    let currentJam = date.getHours();
    let currentMenit = date.getMinutes();
    let currentDetik = date.getSeconds();
    bagianJam.style.transform = `rotate(${currentJam * 30 + currentMenit / 2}deg)`;
    bagianMenit.style.transform = `rotate(${currentMenit * 6}deg)`;
    bagianDetik.style.transform = `rotate(${currentDetik * 6}deg)`;
}
getCurrentTime();
setInterval(getCurrentTime, 1000);