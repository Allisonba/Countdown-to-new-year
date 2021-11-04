let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let days =document.querySelector("#days");
let year = document.querySelector("#year");
let countdown = document.querySelector("#countdown");

let date = new Date().getFullYear();

let newYearTime = new Date(`January 01 ${date + 1} 00:00:00`);


year.textContent = date + 1;


function countDown(){
        const datee = new Date();
        const diff = newYearTime - datee;

        const d = Math.floor(diff / 1000 / 60 / 60 / 24);
        const h = Math.floor(diff / 1000 / 60 / 60) % 24;
        const m = Math.floor(diff / 1000 / 60) % 60;
        const s = Math.floor(diff / 1000) % 60;

        
        days.textContent = d;
        hours.textContent = h < 10 ? '0' + h : h;
        minutes.textContent = m < 10 ? '0' + m : m;
        seconds.textContent = s < 10 ? '0' + s : s;
      
}
  setInterval(countDown, 1000);
