//Variables
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

//Executable of code contained in functions

init();

resetButton.addEventListener("click", function(){
	reset();
})

colorDisplay.textContent = pickedColor;


//Functions

//Game logic: Difficulty settings square numbers easy (3), hard (6). Logic that decides if clickedColor is equal === to pickedColor.
function init(){
	//mode button event listeners
	setupModeButtons();
	setupSquares();
	reset();
}

//Function within init game logic broken up into components
function setupModeButtons(){
		for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
		});
	}
}

//Function within init game logic broken up into components
function setupSquares(){
		for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.background;
		//compare color to pickedColor
		console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
		});
	}
}

//Game Logic: Reset game.
function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	//resets to saying "New Colors" when you click on play again?
	resetButton.textContent = "New Colors"
	//"Correct!" Disappears when you click play again?
	messageDisplay.textContent = "";
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
	if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.background = colors[i];
	} else {
		squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

//Change all colors to winning color
function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
	//change each color to match given color
		squares[i].style.background = color;
	}
}

//Picking color
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//Generate random color
function generateRandomColors(num){
	//make an array
	var arr = []
	//add num random colors to array
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

//Random color generation function
function randomColor(){
	//pick a "red" from 0 -255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 -255
	var b = Math.floor(Math.random() * 256);
	//tricky bug space after comma needed for it to work ", "
	return "rgb(" + r + ", " + g + ", " + b + ")";
}




