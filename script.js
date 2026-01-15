function opposite(booleen){

   return !opposite
}

opposite(true)
opposite(false)

function greaterthan5(num1, num2) {
  if (num1 > 5 && num2 > 5) {
    return true;
  } else {
    return false;
  }
}
greaterthan5(1,6);true
greaterthan5(5,5);false
greaterthan5(1,4);false



function allgreaterthan5(num1, num2) {
  if (num1 > 5 && num2 > 5) {
    return true;
  } else {
    return false;
  }
}
allgreaterthan5(6,7);true
allgreaterthan5(2,7);false

function largerthan5Andlessthan20(number) {
  if (number > 5 && number < 20) {
    return true;
  } else {
    return false;
  }
}
largerthan5Andlessthan20(12);true
largerthan5Andlessthan20(21);false
largerthan5Andlessthan20(5);false


function not6andlessthan10(number){

if(number!==6 && number<10){
return true;
} else {

    return false
}

}
not6andlessthan10(10);false
not6andlessthan10(7);true
not6andlessthan10(10);false

function largerthan3andlessthan18(num1, num2, num3) {
  if (num1 > 3 && num1 < 18 &&
      num2 > 3 && num2 < 18 &&
      num3 > 3 && num3 < 18) {
    return true;
  } else {
    return false;
  }
}

// Tests
console.log(largerthan3andlessthan18(2, 4, 20)); // false
console.log(largerthan3andlessthan18(5, 6, 7));  // true
console.log(largerthan3andlessthan18(3, 6, 18)); // false

function cloudyandrainy(string1, string2) {

return string1 === "cloudy" && string2 === "rainy";

}
function weatherActivities(weather) {
  if (weather === "sunny") {
    return "course à pied";
  } else if (weather === "rainy") {
    return "chocolat chaud";
  } else if (weather === "cloudy") {
    return "chocolat chaud";
  } else {
    return "se reposer";
  }
}


console.log(weatherActivities("rainy"));  // "chocolat chaud"
console.log(weatherActivities("sunny"));  // "course à pied"


function evenandgreaterthan7(number){
if (number % 2===0 && number>7){
  
   return true

} else {

  return false
}

}
 evenandgreaterthan7(6);false
 evenandgreaterthan7(8);true
 evenandgreaterthan7(9);false

 function arevalidcredentials(name,password){
   return name.length>3 && password.length>=8

 }

function guessmynumber(number) {

  let randomnumber = Math.floor(Math.random() * 6); // nombre entre 0 et 5
  
  if (number === randomnumber) {
    return "Bravo, tu as deviné le bon nombre";
  } else {
    return "Raté ! Le nombre était " + randomnumber;
  }
}
function or(statement1,statement2){
  return !(!statement1 && !statement2)
}
 

or(true,true);true
or(true,false);true
or(false,true)


function and(statement1,statement2){

  return !(!statement1||!!statement2)
}
  
  and(true,true);true
  and(true,false);false
  and(false,false);false
  and(1<3,5>7);true 

  function shirtWidth(width) {
  if (width >= 20 && width < 30) {
    return "You should select a size S";
  } else if (width >= 30 && width < 40) {
    return "You should select a size M";
  } else if (width >= 40 && width < 50) {
    return "You should select a size L";
  } else {
    return "You should select a different shirt";
  }
}
shirtWidth(25); "you should select a size s"
shirtWidth(35);"you should select a size m"
shirtWidth(45);"you should select a size l"
shirtWidth(100);"you should select a different shirt"

function player1echoice(choice){

if(choice==="pierre"){

  return "player1 chose paper"

} else if (choice==="papier"){
  return "player chose ciseaux"
}else {
  return "player has chosen poorly";
}
}

player1echoice("rock");"player 1 chose rock"
player1echoice("paper");"player1echoice chose paper"
player1echoice("scissors");"player 1 chose scissors"
player1echoice("gun");"player 1 has chosen poorly"

function isItTruthy(value) {
  if (value) {
    return "Input is truthy";
  } else {
    return "Input is falsy";
  }
}

// Tests
console.log(isItTruthy("anything")); // "Input is truthy"
console.log(isItTruthy());           // "Input is falsy" (undefined est falsy)
console.log(isItTruthy(0));          // "Input is falsy"
console.log(isItTruthy(""));         // "Input is falsy"
console.log(isItTruthy(false));      // "Input is falsy"
console.log(isItTruthy(42));         // "Input is truthy"


function checkarea(area){

if(area>48 && area<100){

  return "true"
} else{

  return "false"
}
}
checkarea(50);true
checkarea(100);false

function checkmultiply(num1,num2){

if(num1>50 &&num1<150){
if(num2>50 && num2<150)
  return true
}else {

  return false
}

}

checkmultiply(10,6);true
checkmultiply(7,7);false
