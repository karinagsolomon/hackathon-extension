// New
// Open a new tab whenever the extension is clicked:
// chrome.browserAction.onClicked.addListener(function(){
//   chrome.tabs.create({'url': "chrome://newtab"})
// })


// creating and showing the timer

// Timer Header
const body = document.body;
const timerHeader = document.createElement("h1");
timerHeader.innerHTML = 'Pomodoro Timer';
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
// document.getElementById("pause").addEventListener("click", timer);

// dropdown -> to select type of timer
 // 1. focus 2. hydration check 3. nap
const dropdown = document.createElement("dropdown");
body.appendChild("dropdown");
const dropbtn = document.createElement("dropbtn");
dropdown.appendChild("dropbtn");
dropbtn.innerHTML = `Select your leisure break`;
const dropdowncontent = document.createElement("dropdown-content");
dropbtn.appendChild("dropdown-content");
const a = document.createElement("a");
dropdowncontent.appendChild("a");
dropdowncontent.innerHTML = "1. Focus";
dropdowncontent.appendChild("a");
dropdowncontent.innerHTML = "1. Hydration Check";
dropdowncontent.appendChild("a");
dropdowncontent.innerHTML = "1. Nap";

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
  body.appendChild(dropdown);
  

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
  body.appendChild(dropdown);
  //adding barking dogs as alarm
  document.getElementById("dogs").onplay()
}
}, 1000)


}




// First time working with timer
// creating and showing the timer
// document.getElementById("timer").innerHTML = seconds + 's';
// let seconds = 30;
// let running = true;

// decrement timer 
// function updateTimer(seconds) {
//   while (seconds > 0) {
//     seconds--;
//   }
// }

// make sure that seconds decrement each for each second that passes
// function start(func) {
//   setInterval(updateTimer,1000);
// }

// starting code from https://www.w3schools.com/howto/howto_js_countdown.asp

//   let countDownTime = new Date("00:00:00").getTime();

//   // Make sure the count updates each second
//   let countUpdate = setInterval(function() {

//   // Starting point -> 30secs for demo
//   let start = new Date("0:00:30");

//   // Find the difference between the countDownTime and start
//   let timeDifference = countDownTime - start;

//   // Calculating minutes and seconds
//   let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//   let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

//   // Showing the timer
//   document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";

//   // What to show when the timeDifference hits 0
//   if (timeDifference < 0) {
//     clearInterval(countUpdate);
//     // Maybe play some audio of dog barking here:
//     document.getElementById("timer").innerHTML = "Ruh Roh, your timer has expired!";
//   }
// }, 1000);

// from https://webcrunch.com/posts/javascript-countdown
