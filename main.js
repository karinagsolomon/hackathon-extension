
// creating and showing the timer

// Timer Header
const body = document.body;
const timerHeader = document.createElement("h1");
timerHeader.innerHTML = 'Start your pomodoro timer';
body.appendChild(timerHeader);

// Timer - user functionality
// allow the user to start and stop the timer with a click of a button
// start button
const startButton = document.createElement("BUTTON");
startButton.innerHTML = `Start`;
body.appendChild(startButton);
startButton.id = "start";
document.getElementById("start").addEventListener("click", timer);

// pause / pawwwws button
const pauseButton = document.createElement("BUTTON");
pauseButton.innerHTML = `Pawwws`;
body.appendChild(pauseButton);
pauseButton.id = "pause";

// pill nav

const nav = document.createElement("h3");
nav.innerHTML = 'What are you in the mood for?';
body.appendChild(nav);

const pillNav = document.createElement("div");
document.body.appendChild(pillNav);
pillNav.className = "pillNav";

const a1 = document.createElement("a");
pillNav.appendChild(a1);
a1.href = "#";
a1.id = "a1";
a1.textContent = "1. Focus";



const a2 = document.createElement("a");
pillNav.appendChild(a2);
a2.href = "#";
a2.id = "a2";
a2.textContent = "2. Hydration check";

const a3 = document.createElement("a");
pillNav.appendChild(a3);
a3.href = "#";
a3.id = "a3";
a3.textContent = "3. Nap";

// build out changing bground image based on leisure choice
function focusBground() {
  document.body.style.backgroundColor = '#1de7c5ff';
  document.body.style.backgroundImage = "url('https://images.pexels.com/photos/5255277/pexels-photo-5255277.jpeg')";
  document.body.style.backgroundSize = "cover";
}

function hydrationBground() {
  document.body.style.backgroundColor = '#eede29ff';
  document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1044056/pexels-photo-1044056.jpeg')";
  document.body.style.backgroundSize = "cover";
  document.body.style.color = "#fffffff7";
}

function napBground() {
  document.body.style.backgroundColor = '#ee5d29ff';
  document.body.style.backgroundImage = "url('https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg')";
  document.body.style.color = "#ee5d29ff";
}
document.getElementById("a1").addEventListener("click", focusBground);
document.getElementById("a2").addEventListener("click", hydrationBground);
document.getElementById("a3").addEventListener("click", napBground);

// Build out timer countdown 
function timer() {

// Come back and give user more control over the timer
let hours = 0o0;
let minutes = 0o0;
let seconds = 4;

// timer
const timerCount = document.createElement("p1");
timerCount.innerHTML = `${hours}:${minutes}:${seconds} left until your next scheduled break.`;
body.appendChild(timerCount);



// decrement timer
let decrement = setInterval(() => {
  // if seconds gets to 0 and there are minutes to decrement from, decrement a minute and then seconds
  timerCount.innerHTML = `${hours}:${minutes}:${seconds--} left until your next scheduled break. <br />`;
  // body.appendChild(timerCount);
  body.appendChild(startButton);
  body.appendChild(pauseButton);
  // body.appendChild(dropdown);
  

  // if user pauses timer
  document.getElementById("pause").addEventListener("click", () => {clearInterval(decrement)});
  // clearInterval(decrement);
  // body.appendChild(timerCount);
  // body.appendChild(expired);
  // body.appendChild(startButton);
  // body.appendChild(pauseButton);

  // can build out additional functionality for minutes and hours here
if (seconds < 0) {
  const expired = document.createElement('p2')
  clearInterval(decrement);
  expired.innerHTML = `Ruh Roh your timer has expired! <br />`;
  body.appendChild(timerCount);
  body.appendChild(expired);
  body.appendChild(startButton);
  body.appendChild(pauseButton);
  // body.appendChild(dropdown);
  //adding barking dogs as alarm
  document.getElementById("dogs").play()
}
}, 1000)

}
