/* CAROUSEL */
let currentIndex = 0;

function showSlide() {
const slides = document.getElementById("slides");
if (!slides) return;
const total = slides.children.length;
slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
const slides = document.getElementById("slides");
if (!slides) return;
const total = slides.children.length;
currentIndex = (currentIndex + 1) % total;
showSlide();
}

function prevSlide() {
const slides = document.getElementById("slides");
if (!slides) return;
const total = slides.children.length;
currentIndex = (currentIndex - 1 + total) % total;
showSlide();
}

setInterval(nextSlide,3000);

/* TODO LIST */
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks(){
const list = document.getElementById("taskList");
if(!list) return;
list.innerHTML="";
tasks.forEach((task,index)=>{
list.innerHTML += `
<li>
${task}
<button onclick="deleteTask(${index})">X</button>
</li>`;
});
localStorage.setItem("tasks",JSON.stringify(tasks));
}

function addTask(){
const input = document.getElementById("taskInput");
if(!input || input.value==="") return;
tasks.push(input.value);
input.value="";
renderTasks();
}

function deleteTask(index){
tasks.splice(index,1);
renderTasks();
}

renderTasks();

/* GAME */
let randomNumber = Math.floor(Math.random()*100)+1;
let attempt = 0;

function checkGuess(){
const input = document.getElementById("guessInput");
const result = document.getElementById("result");
const tries = document.getElementById("tries");
if(!input) return;

let value = parseInt(input.value);
attempt++;

if(value > randomNumber){
result.textContent="Quá cao!";
}
else if(value < randomNumber){
result.textContent="Quá thấp!";
}
else{
result.textContent="🎆 Đúng rồi!";
}

tries.textContent="Số lần thử: " + attempt;
}
