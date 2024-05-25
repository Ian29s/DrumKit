function scaleButton(button) {
    button.classList.add('clicked');
    setTimeout(function() {
        button.classList.remove('clicked');
    }, 50); // Adjust the delay (in milliseconds) as needed
}

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {
  var lowercaseKey = key.toLowerCase();

  buttonAnimation(lowercaseKey);
  
  switch (lowercaseKey) {
    case "w":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "q":
      var crashRClose = new Audio("sounds/splash_short.mp3");
      crashRClose.play();
      break;

    case "e":
      var crashROpen = new Audio('sounds/splash.mp3');
      crashROpen.play();
      break;
      
    case "s":
      var tom = new Audio('sounds/tom-1.mp3');
      tom.play();
      break;

    case "d":
      var tom1 = new Audio('sounds/tom-2.mp3');
      tom1.play();
      break;

    case "a":
    var tom2 = new Audio('sounds/tom-3.mp3');
    tom2.play();
    break;

    case "u":
    case "U":
      var crashBig = new Audio('sounds/crash_big.mp3');
      crashBig.play();
      break;

    case "i":
      var crashMedium = new Audio('sounds/crash_medium.mp3');
      crashMedium.play();
      break;

    case "j":
      var kickl = new Audio('sounds/kick-bass.mp3');
      kickl.play();
      break;

    case "k":
      var kickr = new Audio('sounds/kick-bass.mp3');
      kickr.play();
      break;


    default: console.log(key);
  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

