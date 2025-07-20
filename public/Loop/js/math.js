function sum() {

   const num = document.getElementById("number").value;

   const display = document.getElementById('display');

   let sum = 0;
   let answer = "";

   for (let a = 1; a <= num; a++) {
      answer += a + "<br/>";
      sum += a;
   }
   answer += "The sum is: " + sum;
   display.innerHTML = answer;
}
/* let sum = 0;
   
 for(let a=1; a<=20; a++) {
     console.log(a);
     sum += a;
 }
 console.log("The sum is",sum);*/


function factorial() {
   const number = document.getElementById("number").value;

   const display = document.getElementById('display');

   let answer = '';
   let product = number;
   let num = number;

   while (num > 1) {
      answer += num + "<br/>";
      product *= (num - 1);
      num--;

   }
   answer += num + "<br/>"
   answer += "The factorial is: " + number + "is" + product;
   document.getElementById('display').innerHTML = answer;
}

function Odd() {
   const num = parseInt(document.getElementById("number").value); 
   const display = document.getElementById('display');
   display.innerHTML = ""; 

   for (let a = 1; a <= num; a += 2) { 
       display.innerHTML += a + "<br/>";
   }
}

function Even() {
   const num = parseInt(document.getElementById("number").value); 
   const display = document.getElementById('display');
   display.innerHTML = ""; 

   for (let a = 2; a <= num; a += 2) {
       display.innerHTML += a + "<br/>";
   }
}