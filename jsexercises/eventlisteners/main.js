var target = document.querySelector("body");
var link = document.createElement("a");
function clickMe() {
  console.log("i am clicked body");
}

function clickedLink() {
  console.log("The link is cliked");
}
target.addEventListener("click", clickMe);

//append i a new h2 object in the mix;

var h2 = document.createElement("h2");
h2.innerText = "This is my dynamically created h2 element";
h2.setAttribute("id", "secondheading");
h2.setAttribute("class", "primary");
link.setAttribute("href", "https://www.google.com");
link.innerText = "my google search";
document.body.appendChild(h2);
document.body.appendChild(link);

let answer = prompt("What is your name?");

var h1 = document.querySelector("h1");
undefined;
var arr = ["Example Domain", "First Click", "Second Click", "Third Click"];
undefined;
function handleClicks() {
  switch (h1.innerText) {
    case arr[0]:
      h1.innerText = arr[1];
      break;
    case arr[1]:
      h1.innerText = arr[2];
      break;
    case arr[2]:
      h1.innerText = arr[3];
      break;
    default:
      h1.innerText = arr[0];
  }
}
h1.addEventListener("click", handleClicks);
