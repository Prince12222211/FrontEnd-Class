// let a=Number(prompt("Enter the value of the a"));
// let b=Number(prompt("Enter the value of the b"));
// let c=Number(prompt("Enter the value of the c"));
// console.log(a+b+c);

// const arrowsum=(a,b,c)=>{
//     console.log(a+b+c);
// }
// arrowsum(4,5,6);
// const mul=(a,b,c)=>{
//     console.log(a*b*c);
// }
// mul(3,2,3);o

const a = prompt("Enter a first number");
const b = prompt("Enter a second  number");
const c = prompt("Enter a third number");
if (a > b && a > c) {
  console.log("a is greater than b and c");
} else if (b > a && b > c) {
  console.log(" b is greater than a and c");
} else {
  console.log("c is greater than a and c");
}
