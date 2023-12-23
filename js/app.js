//exercice 1

/*

add7 = () => {
    let number = 7;
    let allnumber = parseInt(prompt());
    let add7 = alert(parseInt(number + allnumber));

}
add7();

*/

/*

// exercice 2

multiply = () => {

    let a = parseInt(prompt());
    let b = parseInt(prompt());

    return alert(a*b);

}
multiply();

*/

// exercice 3

/*
capitaliza = () => {
    let string = prompt();
    let uppString = string[0].toUpperCase();
    let resultString = alert(uppString + string.substring(1)) ;
}
capitaliza();

*/

//exercice 4


/*

lastLetter = () => {
    let string = prompt();
    return alert(string.slice(-1));
}
lastLetter();

*/

/*
function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
  }
 
  console.log(favoriteAnimal('Goat'))

  */





/*
function showMessage(from, text) {

    from = '*' + from + '*';

    alert(from + ': ' + text);
    
  }

  let from = "Ann";

  showMessage(from, "Hello!");

  alert(from);
*/


/*
function sum(a, b){
    return a + b;


}

let result = sum(1,2);
alert(result);
*/


/*

function checkAge(age) {
    if (age > 18) {
      return true;
    } 
      // ...
      return confirm('Did parents allow you?');
    
}

alert(checkAge(19));

*/

/*
function checkAge(age) {
    return(age > 18 ) ? true : confirm('Did parents allow you?');
    
    
  }
  checkAge(19);

  */

/*

min = (a, b) =>{

    if (a > b && b < a) {
        return alert(b);
        
    }else{
        return alert(a)
    }


}

min(2, 5)
min(3, -1) 
min(1, 1) 

*/

/*

pow = (x, n) =>{

    

    return parseInt(alert(x**n));

}
pow(3, 2) 
pow(3, 3) 
pow(1, 100);

*/

/*
function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }

  */

/*
ask = (question, yes, no) =>{
    if (confirm(question)) yes()
    
    else no();
}

showOk = () =>{
    alert("You agreed")
}


showCancel = () =>{
    alert("You canceled execution")
}

ask("do you agree?", showOk, showCancel);

*/

/*
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );
  */

  /*
  let sum = (a,b) => a + b;
  alert(sum(2,3));

  let double = n => n*2;

  alert(double(3))

  let sayHi = () => alert("Hello!");

sayHi();

*/

 /*
 ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => { alert("You agreed."); },
    () => { alert("You canceled the execution."); }
  );

  */

/*
function add(a, b) {
    return a + b;
}

function average(a, b) {
    return add(a, b) / 2;
}

let x = average(10, 20);

*/
