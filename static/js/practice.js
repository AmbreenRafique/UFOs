// import the data from data.js
console.log('my test')

//const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  }
  console.log(addition(4, 5));

    // Functions can call other functions
    function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }
  console.log(doubleAddition(65,34));

  doubleAddition = (c, d)=>addition(c, d) * 2;
  console.log(doubleAddition(33,25));

let printHello = () => "Hello there!";
console.log(printHello)

let userList = ["Sarah", "Greg", "Cindy", "Jeff"];
function listLoop(userList) {
  for (var i = 0; i < userList.length; i++) {
    console.log(userList[i])
  }
}

var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}

for (var i = 0; i < 5; i++) {
  console.log("I am " + i);
}