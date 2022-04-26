for (var n=1; n <= 20; n = n+1) {
  if ((n+1)%2==0){
    document.getElementById("evenodd").innerHTML = document.getElementById("evenodd").innerHTML + n + " is odd.</br> ";
  } else {
  document.getElementById("evenodd").innerHTML =
      document.getElementById("evenodd").innerHTML + n + " is even.</br> ";
}
};

var cars = ["Dog", "Cat", "Mouse"];
for ( var i = cars.length-1; i >= 0; i-- ) {
  console.log(cars[i]);
  console.log(i);
  document.getElementById("carsbackwards").innerHTML =
    document.getElementById("carsbackwards").innerHTML + " " + cars[i];
}


var numset1 = [2, 5, 6];
var numset2 = [4, 9, 3];
var numset3 = [];
console.log( numset1[0] + numset2[0] );
for ( y = 0; y < numset1.length; y++) {
  console.log( numset1[y] + numset2[y] );
  document.getElementById("numset").innerHTML = document.getElementById("numset").innerHTML +
    (numset1[y]+numset2[y]) + ", ";
  numset3[y] = numset1[y] + numset2[y];
}
console.log(numset3);


let str1 = "interactions";
var str2 = "";
console.log(str1);
console.log(str1.length);
for ( p = 0; p < str1.length; p++) {
  if (p%2==0){
    str2 += "Z";
} else {
 str2 += str1[p];
  }
};
console.log(str2);
