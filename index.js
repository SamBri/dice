var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

//get dice img element
var dice1 = document.firstElementChild.lastElementChild.firstElementChild.querySelector("div.dice");
dice1 = dice1.querySelector("img");

var dice2 = document.firstElementChild.lastElementChild.firstElementChild.lastElementChild;
dice2 = dice2.querySelector("img");

//change dice 1
  switch(randomNumber1)
  {
    case 1:
     dice1.setAttribute("src","images/dice1.png");
     break;

     case 2:
     dice1.setAttribute("src","images/dice2.png");
    break;

    case 3:
    dice1.setAttribute("src","images/dice3.png");
    break;

    case 4:
    dice1.setAttribute("src","images/dice4.png");
    break;

    case 5:
    dice1.setAttribute("src","images/dice5.png");
    break;

    case 6:
    dice1.setAttribute("src","images/dice6.png");
    break;
}

//change dice 2
switch(randomNumber2)
{
  case 1:
   dice2.setAttribute("src","images/dice1.png");
   break;

   case 2:
   dice2.setAttribute("src","images/dice2.png");
  break;

  case 3:
  dice2.setAttribute("src","images/dice3.png");
  break;

  case 4:
  dice2.setAttribute("src","images/dice4.png");
  break;

  case 5:
  dice2.setAttribute("src","images/dice5.png");
  break;

  case 6:
  dice2.setAttribute("src","images/dice6.png");
  break;
}

//decide victory status
if(randomNumber1 === randomNumber2 )
{
  //change h1 text
  document.firstElementChild.lastElementChild.firstElementChild.querySelector("h1").innerHTML = "Draw <br> 😣";
  //change color for draw
  document.firstElementChild.lastElementChild.firstElementChild.querySelector("h1").style.color = "yellow";
} else if(randomNumber1 > randomNumber2)
{
  document.firstElementChild.lastElementChild.firstElementChild.querySelector("h1").innerHTML = "Player 1 Wins 🎉";
  //change color for p1 win
  document.firstElementChild.lastElementChild.firstElementChild.querySelector("h1").style.color = "#baf1a1";
}
else{
  document.firstElementChild.lastElementChild.firstElementChild.querySelector("h1").innerHTML = "Player 2 Wins 🎉"
  //change color for p2 win
  document.firstElementChild.lastElementChild.firstElementChild.querySelector("h1").style.color = "#baf1a1";
}
