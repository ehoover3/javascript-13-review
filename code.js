////////////////////////////////////
//  _                    _   __
// | |                  | | /_ |
// | |     _____   _____| |  | |
// | |    / _ \ \ / / _ \ |  | |
// | |___|  __/\ V /  __/ |  | |
// |______\___| \_/ \___|_|  |_|
////////////////////////////////////

// LEVEL 1a: data types
let myString = "hello world";
let myNumber = 6;
let myBoolean = true;
let myArray = ["hi", "hola", "bonjour"];
let myObject = { city: "New York City", state: "New York", population: 8419000 };

// LEVEL 1b: if, else if, else
if (myNumber < 5) {
  console.log("myNumber is smaller than 5");
} else if (myNumber > 5) {
  console.log("myNumber is bigger than 5");
} else {
  console.log("myNumber is 5");
}

// LEVEL 1c: alternative way to write an if
if (myNumber === 5) console.log("myNumber is 5");
else console.log("other options");

// LEVEL 1d: loops
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// LEVEL 1e: functions
function addNumbers(a, b) {
  return a + b;
}

let sum = addNumbers(3, 7);
console.log(sum);

// LEVEL 1f: functions
function multiplyNumbers(a, b = 10) {
  return a * b;
}

let product = multiplyNumbers(5);
console.log(product);

////////////////////////////////////
//  _                    _   ___
// | |                  | | |__ \
// | |     _____   _____| |    ) |
// | |    / _ \ \ / / _ \ |   / /
// | |___|  __/\ V /  __/ |  / /_
// |______\___| \_/ \___|_| |____|
////////////////////////////////////

// LEVEL 2a: createElement
let myDiv = document.createElement("div");
myDiv.classList.add("quotes");
myDiv.setAttribute("id", "AvatarQuote");
myDiv.textContent = "Zhu Li, do the thing!";

// LEVEL 2b:  queryselector & appending divs
let rootDiv = document.querySelector("#root");
rootDiv.append(myDiv);

// LEVEL 2c: event listeners
function doTheThing() {
  console.log("Zhu Li, do the thing!");
}

myDiv.addEventListener("click", doTheThing);

// extra example
let colorDiv = document.querySelector("#color");

function changeTheColor() {
  if (colorDiv.style.backgroundColor === "green") colorDiv.style.backgroundColor = "lightblue";
  else colorDiv.style.backgroundColor = "green";
}

colorDiv.addEventListener("mouseover", changeTheColor);

////////////////////////////////////
//  _                    _   ____
// | |                  | | |___ \
// | |     _____   _____| |   __) |
// | |    / _ \ \ / / _ \ |  |__ <
// | |___|  __/\ V /  __/ |  ___) |
// |______\___| \_/ \___|_| |____/
////////////////////////////////////

// LEVEL 3a: anonymous functions & setTimeOut
// setTimeOut says:  run this code after this amount of time (in milliseconds)
setTimeout(function () {
  console.log("run this code immediately"); // anonymous functions says: run immediately
}, 2000);

// LEVEL 3b:  arrow functions - option 1
let answer2 = (a, b) => {
  return a * b;
};

// LEVEL 3c:  arrow functions - option 2
let answer3 = (a, b) => a * b;

////////////////////////////////////
//  _                    _   _  _
// | |                  | | | || |
// | |     _____   _____| | | || |_
// | |    / _ \ \ / / _ \ | |__   _|
// | |___|  __/\ V /  __/ |    | |
// |______\___| \_/ \___|_|    |_|
////////////////////////////////////

// ARRAY HIGHER ORDER FUNCTIONS
// LEVEL 4a: filter
let spanishWords = myArray.filter((element) => element === "hola");
let frenchWords = myArray.filter((element) => element === "bonjour");
console.log(spanishWords);

// LEVEL 4b: for each
let consoleLogNames = myArray.forEach((element) => console.log(element));

// LEVEL 4c: map
let addName = myArray.map((element) => `${element} Paul`);
console.log(addName);

////////////////////////////////////
//  _                    _   _____
// | |                  | | | ____|
// | |     _____   _____| | | |__
// | |    / _ \ \ / / _ \ | |___ \
// | |___|  __/\ V /  __/ |  ___) |
// |______\___| \_/ \___|_| |____/
////////////////////////////////////

// HTTP EXAMPLES + ASYNC/AWAIT
// get, post, put, patch, delete

// LEVEL 5a:  fetch request with a get method
const catDiv = document.querySelector("#catDiv");
const catImg = document.querySelector("#catImg");
const catBtn = document.querySelector("#catBtn");

async function getNewCatImg() {
  let response = await fetch("https://aws.random.cat/meow");
  let data = await response.json();
  console.log(data);
  catImg.src = data.file; // render cat image to the page
}

catBtn.addEventListener("click", () => {
  getNewCatImg();
});

// LEVEL 5b:  fetch request with get method & query parameters
// spread operator
async function getRandomWords1() {
  let count = 3;
  let response = await fetch(`https://random-word-api.herokuapp.com/word?number=${count}`);
  let data = await response.json();
  console.log(data);
}
getRandomWords1();

// POST EXAMPLE
const data = { username: "example" };

// fetch(`https://example.com/profile`, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(data),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Success:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// PUT/PATCH EXAMPLE
let id = 1;

// fetch(`https://example.com/profile/${id}`, {
//   method: "PUT", // or PUT // or PATCH
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(data),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Success:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// DELETE EXAMPLE
// fetch("https://example.com/delete-item/" + id, {
//   method: "DELETE",
// })
//   .then((res) => res.text()) // or res.json()
//   .then((res) => console.log(res));

//////////////////////////////////////////////////////////
//  ____                          _                    _
// |  _ \                        | |                  | |
// | |_) | ___  _ __  _   _ ___  | |     _____   _____| |
// |  _ < / _ \| '_ \| | | / __| | |    / _ \ \ / / _ \ |
// | |_) | (_) | | | | |_| \__ \ | |___|  __/\ V /  __/ |
// |____/ \___/|_| |_|\__,_|___/ |______\___| \_/ \___|_|
//////////////////////////////////////////////////////////

// BONUS STUFF
// ternary
if (myNumber < 5) {
  console.log("less than 5");
} else {
  console.log("not less than 5");
}

myNumber < 5 ? console.log("less than 5") : console.log("not less than 5");

// spread operator
let randomWords = [];
async function getRandomWords() {
  let response = await fetch("https://random-word-api.herokuapp.com/word?number=10");
  let data = await response.json();
  randomWords.push([...data]); // <--- spread operator
  console.log(randomWords);
}
getRandomWords();

// rest operator
function myBio(firstName, lastName, ...otherInfo) {
  return otherInfo;
}

let bio = myBio("Bruce", "Wayne", "Gotham", "Bat Cave");
console.log(bio);

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//  ______ _    _ _______ _    _ _____  ______   _      ______          _____  _   _ _____ _   _  _____
// |  ____| |  | |__   __| |  | |  __ \|  ____| | |    |  ____|   /\   |  __ \| \ | |_   _| \ | |/ ____|
// | |__  | |  | |  | |  | |  | | |__) | |__    | |    | |__     /  \  | |__) |  \| | | | |  \| | |  __
// |  __| | |  | |  | |  | |  | |  _  /|  __|   | |    |  __|   / /\ \ |  _  /| . ` | | | | . ` | | |_ |
// | |    | |__| |  | |  | |__| | | \ \| |____  | |____| |____ / ____ \| | \ \| |\  |_| |_| |\  | |__| |
// |_|     \____/   |_|   \____/|_|  \_\______| |______|______/_/    \_\_|  \_\_| \_|_____|_| \_|\_____|
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//  Other array higher order functions, such as:
// .find()
// .findIndex()
// .fill()
// .copyWithin()
// .some()
// .every()
// .reduce()

//  Unit Testing

//  Node Package Manager (npm)
//  package.json
//  package-lock.json

//  Node Express
//  Node:     to run Javascript outside of the browser
//  Express:  to build back-end servers (our front-end fetch requests connect into back-end servers)

//  React & Redux
//  React:  to build better performing front-end websites
//  Redux:  to make data within React

//  SQL:    a database to persist data
