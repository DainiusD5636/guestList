let addToEnd = document.querySelector("#addToEnd");
let addToStart = document.querySelector("#addToStart");
let removeFirst = document.querySelector("#removeFirst");
let removeLast = document.querySelector("#removeLast");
let reverseList = document.querySelector("#reverseList");
let removeFromTo = document.querySelector("#removeFromTo");

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
  if (document.querySelector(".new")) {
    document.querySelector(".new").remove();
  }
  let newList = document.createElement("div");
  for (let i = 0; i < guestList.length; i++) {
    newList.className = "new";
    let newName = document.createElement("p");
    newList.append(newName);

    newName.textContent = guestList[i];

    document.body.append(newList);
  }
}
