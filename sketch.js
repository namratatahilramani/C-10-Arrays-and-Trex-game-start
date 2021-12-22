var friends=['Amitish','Varun','Vaibhav','Prakhar','Yugraja'];

var marks=[80,75,68,90,83];
var sum=marks[0]+marks[1]+marks[2]+marks[3]+marks[4];
console.log("the sum of marks are: "+sum);
var average=sum/5;
console.log("the average of marks is: "+average);

console.log(friends[4]);
console.log("The size of array is "+friends.length);

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("red");
}