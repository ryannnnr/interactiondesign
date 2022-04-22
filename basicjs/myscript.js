
for (var n=0; n <= 20; n = n+1) {
  if ((n+1)%2==0){
    console.log(n + " is odd.");
  } else {
    console.log(n + " is even.");
  }
  document.getElementById("evenodd").innerHTML =
      document.getElementById("evenodd").innerHTML + [n] ;
}


var cars = ["Dog", "Cat", "Mouse"];
for ( var i = cars.length-1; i >= 0; i-- ) {
  // console.log(i);
  console.log(cars[i]);
  console.log(i);
  // Below I output the data to the webpage. I take the innterHTML of "j0utput"
  //      and add a space and then the value of cars [i] with every interation of
  //      the loop.
  document.getElementById("carsbackwards").innerHTML =
    document.getElementById("carsbackwards").innerHTML + " " + cars[i];
}


var numset1 = [2, 5, 6];
var numset2 = [4, 9, 3];
var numset3 = [6, 14, 9];
console.log( numset[0] + numset[0] );
for ( y = 0; y < numset1.length; y++) {
  console.log( numset1[y] + numset[y] );
  numset3[y] = numset[y] + numset[y];

console.log(numset3);

document.getElementById("numset").innerHTML =
    document.getElementById("numset").innerHTML + [y] ;
}


let str = "interactions";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
  for (let char of "interactions") {
  console.log(char)
}
  document.getElementById("string").innerHTML =
      document.getElementById("string").innerHTML + (str[i]) + (n);
  }
