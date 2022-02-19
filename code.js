////////////////////////////////////////////////////////////////////////////
//  _                    _   __
// | |                  | | /_ |
// | |     _____   _____| |  | |
// | |    / _ \ \ / / _ \ |  | |
// | |___|  __/\ V /  __/ |  | |
// |______\___| \_/ \___|_|  |_|
//
// CONCEPT:                  DOCUMENTATION:
// data types           ---> https://www.w3schools.com/js/js_datatypes.asp
// if, else, & else if  ---> https://www.w3schools.com/js/js_if_else.asp
// loops                ---> https://www.w3schools.com/js/js_loop_for.asp
// functions            ---> https://www.w3schools.com/js/js_functions.asp
////////////////////////////////////////////////////////////////////////////

// DATA TYPES
let myString = "hello world";
let myNumber = 6;
let myBoolean = true;
let myArray = ["hi", "hola", "bonjour"];
let myObject = { city: "New York City", state: "New York", population: 8419000 };

// IF, ELSE, ELSE IF
if (myNumber < 5) {
  console.log("myNumber is smaller than 5");
} else if (myNumber > 5) {
  console.log("myNumber is bigger than 5");
} else {
  console.log("myNumber is 5");
}

// alternative way to write an if
if (myNumber === 5) console.log("myNumber is 5");

// LOOPS
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// FUNCTIONS
function addNumbers(a, b) {
  return a + b;
}

let sum = addNumbers(3, 7);
console.log(sum);

function multiplyNumbers(a, b = 10) {
  return a * b;
}

let product = multiplyNumbers(5);
console.log(product);

///////////////////////////////////////////////////////////////////////////////////////////
//  _                    _   ___
// | |                  | | |__ \
// | |     _____   _____| |    ) |
// | |    / _ \ \ / / _ \ |   / /
// | |___|  __/\ V /  __/ |  / /_
// |______\___| \_/ \___|_| |____|
//
// CONCEPT:                  DOCUMENTATION:
// createElement        ---> https://www.w3schools.com/jsref/met_document_createelement.asp
// querySelector        ---> https://www.w3schools.com/jsref/met_document_queryselector.asp
// append               ---> https://www.w3schools.com/jsref/met_node_appendchild.asp
// event listener       ---> https://www.w3schools.com/js/js_htmldom_eventlistener.asp
///////////////////////////////////////////////////////////////////////////////////////////

// CREATE ELEMENT
let myDiv = document.createElement("div"); // <div></div>
myDiv.classList.add("quotes");
myDiv.setAttribute("id", "AvatarQuote");
myDiv.textContent = "Zhu Li, do the thing!";

// QUERY SELECTOR
let rootDiv = document.querySelector("#root");

// APPEND
rootDiv.append(myDiv);

// EVENT LISTENER
function doTheThing() {
  console.log("Zhu Li, do the thing!");
}

myDiv.addEventListener("click", doTheThing);

// bonus example
let colorDiv = document.querySelector("#color");

function changeTheColor() {
  if (colorDiv.style.backgroundColor === "green") colorDiv.style.backgroundColor = "lightblue";
  else colorDiv.style.backgroundColor = "green";
}

colorDiv.addEventListener("mouseover", changeTheColor);

///////////////////////////////////////////////////////////////////////////////////////////
//  _                    _   ____
// | |                  | | |___ \
// | |     _____   _____| |   __) |
// | |    / _ \ \ / / _ \ |  |__ <
// | |___|  __/\ V /  __/ |  ___) |
// |______\___| \_/ \___|_| |____/
//
// CONCEPT:                  DOCUMENTATION:
// arrow functions      ---> https://www.w3schools.com/js/js_arrow_function.asp
// callback function    ---> https://www.w3schools.com/js/js_callback.asp
// anonymous function   ---> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions *
// set timeout          ---> https://www.w3schools.com/jsref/met_win_settimeout.asp
///////////////////////////////////////////////////////////////////////////////////////////

// ARROW FUNCTIONS - option 1
let answer2 = (a, b) => {
  return a * b;
};

// ARROW FUNCTIONS - option 2
let answer3 = (a, b) => a * b;

// CALLBACK FUNCTION
// A callback function is a function passed into another function as an argument,
// which is then invoked inside the outer function to complete some kind of routine or action

// ANONYMOUS FUNCTION
// runs as soon as it is defined
() => console.log("run this code immediately");

// SET TIMEOUT
// setTimeout() method sets a timer which executes a function or specified piece of code
// once the timer expires.

// setTimeOut says:  run this code after this amount of time (in milliseconds)
setTimeout(
  () => console.log("run this code immediately, but setTimeout makes it wait 2 seconds first"),
  2000
);

///////////////////////////////////////////////////////////////////////////////////////////
//  _                    _   _  _
// | |                  | | | || |
// | |     _____   _____| | | || |_
// | |    / _ \ \ / / _ \ | |__   _|
// | |___|  __/\ V /  __/ |    | |
// |______\___| \_/ \___|_|    |_|
//
// CONCEPT:                  DOCUMENTATION:
// filter method        ---> https://www.w3schools.com/jsref/jsref_filter.asp
// forEach method       ---> https://www.w3schools.com/jsref/jsref_foreach.asp
// map method           ---> https://www.w3schools.com/jsref/jsref_map.asp
///////////////////////////////////////////////////////////////////////////////////////////

// ARRAY HIGHER ORDER FUNCTIONS
// let myArray = ["hi", "hola", "bonjour"];

// FILTER
let spanishWords = myArray.filter((word) => {
  return word === "hola";
});
console.log(spanishWords); // expected return: ["hola"]

let notSpanishWords = myArray.filter((word) => {
  return word !== "hola";
});
console.log(notSpanishWords); // expected return: ["hi", "bonjour"]

// FOR EACH
let consoleLogNames = myArray.forEach((word) => console.log(word));

// MAP
let addName = myArray.map((greeting) => `${greeting} Paul`);
console.log(addName);

///////////////////////////////////////////////////////////////////////////////////////////
//  _                    _   _____
// | |                  | | | ____|
// | |     _____   _____| | | |__
// | |    / _ \ \ / / _ \ | |___ \
// | |___|  __/\ V /  __/ |  ___) |
// |______\___| \_/ \___|_| |____/
//
// CONCEPT:                  DOCUMENTATION:
// fetch API            ---> https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// fetch, get method    ---> read data
// fetch, post method   ---> create data
// fetch, put method    ---> edit data (update/replace entire thing)
// fetch, patch method  ---> edit data (update/replace specific thing)
// fetch, delete method ---> deletes data
///////////////////////////////////////////////////////////////////////////////////////////

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
  let count = 10;
  let response = await fetch(`https://random-word-api.herokuapp.com/word?number=${count}`);
  let data = await response.json();
  console.log(data);
}
getRandomWords1();

// POST EXAMPLE
const data = { superhero: "Batman" };

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
//
// CONCEPT:                  DOCUMENTATION:
// ternary              ---> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
// spread operator      ---> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// rest operator        ---> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
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

let bio = myBio("Bruce", "Wayne", "Gotham", "Bat Cave", "batmobile", "robin", "alfred");
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
