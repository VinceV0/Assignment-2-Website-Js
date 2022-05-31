
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const tbtn = document.getElementById("tbtn");
const color = document.querySelector(".color");

tbtn.addEventListener("click", function () {
    var e = document.querySelector(".screen");
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  e.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}


/*
function somethingHappens() {
    var e = document.querySelector(".screen");
    // Returns a random integer from 0 to 10:
    i = Math.floor(Math.random() * 4);
    
    e.style.backgroundColor = colorArray[i];
}


const MyColors = ["green", "red", "blue", "pink", "yellow", "orange", "purple"]; 

function ChangeColor(){
var e = document.querySelector(".screen");
i = Math.floor(Math.random() * MyColors.length);

e.style.backgroundColor = MyColors[i];
} */



function superheroname() {
    var input1 = document.getElementById("firstInput").value;
    var input2 = document.getElementById("secondInput").value;

  

    var output = input1 + input2;

    
  document.getElementById("heroname").innerHTML = output;


}