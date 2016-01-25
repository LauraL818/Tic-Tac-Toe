//Variable Declarations
var boxOne = document.getElementById("x1")
var boxTwo = document.getElementById("x2")
var boxThree = document.getElementById("x3")
var boxFour = document.getElementById("y1")
var boxFive = document.getElementById("y2")
var boxSix = document.getElementById("y3")
var boxSeven = document.getElementById("z1")
var boxEight = document.getElementById("z2")
var boxNine = document.getElementById("z3")
var array = [boxOne,boxTwo,boxThree,boxFour,boxFive,boxSix,boxSeven,boxEight,boxNine]
var turnCount = 0
var resetButton = document.getElementById('resetButton')


//Goes through array and switches players on click
for(i = 0; i < array.length; i += 1) {
    array[i].addEventListener('click', function () {
      if (turnCount % 2 === 0) {
        this.innerText = 'X'
      } else {
        this.innerText = 'O'
      }
      turnCount += 1
    })
  }

//Changes color of each box individually
  boxOne.addEventListener('click', function() {
    boxOne.style.backgroundColor = '#2506ee'
  })

  boxTwo.addEventListener('click', function() {
    boxTwo.style.backgroundColor = '#ee9e06'
  })

  boxThree.addEventListener('click', function() {
    boxThree.style.backgroundColor = '#2506ee'
  })

  boxFour.addEventListener('click', function() {
    boxFour.style.backgroundColor = '#ee9e06'
  })

  boxFive.addEventListener('click', function() {
    boxFive.style.backgroundColor = '#2506ee'
  })

  boxSix.addEventListener('click', function() {
    boxSix.style.backgroundColor = '#ee9e06'
  })

  boxSeven.addEventListener('click', function() {
    boxSeven.style.backgroundColor = '#2506ee'
  })

  boxEight.addEventListener('click', function() {
    boxEight.style.backgroundColor = '#ee9e06'
  })

  boxNine.addEventListener('click', function() {
    boxNine.style.backgroundColor = '#2506ee'
  })

//Clears board to start new game
resetButton.addEventListener('click', function() {
  for (i = 0; i < array.length; i += 1) {
    array[i].innerText = ""
    array[i].style.backgroundColor = 'white'
  }
})
