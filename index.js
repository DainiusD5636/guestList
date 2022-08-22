let addToEnd = document.querySelector("#addToEnd");
let addToStart = document.querySelector("#addToStart");
let removeFirst = document.querySelector("#removeFirst");
let removeLast = document.querySelector("#removeLast");
let reverseList = document.querySelector("#reverseList");

let guestList = [];

addToEnd.addEventListener("click", (event) => {
  let fullName = document.querySelector("#fullName").value;
  guestList.push(fullName);
  console.log(guestList);
  listOfNames();
});

addToStart.addEventListener("click", (event) => {
  let fullName = document.querySelector("#fullName").value;
  guestList.unshift(fullName);
  console.log(guestList);
  listOfNames();
});

removeFirst.addEventListener("click", (event) => {
  let fullName = document.querySelector("#fullName").value;
  guestList.shift(fullName);
  console.log(guestList);
  listOfNames();
});

removeLast.addEventListener("click", (event) => {
  let fullName = document.querySelector("#fullName").value;
  guestList.pop(fullName);
  console.log(guestList);
  listOfNames();
});

reverseList.addEventListener("click", (event) => {
  let fullName = document.querySelector("#fullName").value;
  guestList.reverse(fullName);
  console.log(guestList);
  listOfNames();
});
function listOfNames() {
  let newName = document.createElement("p");
  newName.textContent = guestList;
  document.getElementById("names").append(newName);
}
