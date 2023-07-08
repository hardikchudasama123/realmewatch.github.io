const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const deg = 6;
setInterval(()=>{
let day = new Date();
// console.log(day);



let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;

hr.style.transform = `rotateZ(${hh +mm/12}deg)`;
min.style.transform = `rotateZ(${mm}deg)`;
sec.style.transform = `rotateZ(${ss}deg)`;

})




// let btn = document.getElementById("btn");
// console.log(btn);

// btn.style.transform = "rotate(30deg)";
