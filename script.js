// problem 1: print all even and odd number between 0-10

// for(let i = 0; i<=11; i++){
//     if (i%2==0) {
//         console.log(i + " is even")
//     } else {
//         console.log(i + " is odd")
//     }
// }

// question 2: take a number from the user and print the multiplication table of the number given

// let num = prompt("enter a num")
// for(let i = 1; i<=12;i++){
//     console.log(num + " x " + i + " = " + i*num)
// }

// question 3: create a arrray and iterate into the array through a loop and find weather thre is mango in the array or not if yess console mango found if no console mango not found

// let fruits_arr = ["mango", "peach", "banana"];
// for (let i = 0; i < 1; i++) {
//   if (fruits_arr[i] === "mango") {
//     console.log("mango found");
//   } else {
//     console.log("mango not found");
//   }
// }

//question 4: conversion from kilometers to miles

// const kmToMile = () => {
//   var inputKm = parseInt(prompt("Enter Kilometer value"));
//   var outputMi = inputKm / 1.60934;
//   document.getElementById("input").innerHTML = `INPUT: ${inputKm} km`;
//   //in a set interval
//   setTimeout(() => {
//     document.getElementById("output").innerHTML = `OUTPUT: ${outputMi}m`;
//   }, 2000);
// };

// kmToMile();

//promblem 5: Calculate the sum of numbers within an array

// const arrSum = [28, 58, 569, 5454, 56546, 6449];
// document.getElementById("input").innerHTML = `ARRAY: ${arrSum}`;
// let sum = 0;
// const sumResult = () => {
//   for (const i in arrSum) {
//     sum += arrSum[i];
//   }
//   document.getElementById("input").innerHTML = `SUM OF THE ARRAY IS: ${sum}`;
// };
// sumResult();

// problem 6: Create a function that reverses an array

// const arr = [28, 58, 569, 5454, 56546, 6449];
// let reversing = ()=>{
// document.getElementById('input').innerHTML=` Orignal Array is:    ${arr}` ;
// arr.reverse()
// document.getElementById("output").innerHTML = `Reversed Array is: ${arr}`;
// };
// reversing ();

//problem: 7 : create a function that sorts array from lowest to highest

// const num = [40, -100, 1, 0, 2.5, -10];
// let sorter = ()=>{
//     document.getElementById('input').innerHTML=`The Orignal Array is: ${num}`;
//     num.sort()
//     document.getElementById("output").innerHTML= `The Array in Lowest to Heighest order: ${num}.`
// }
// sorter()

// problem 8: filter negative numbers from an array

// function isBigEnough(value) {
//     return value >= 0;
//     }

//     const num = [40, -100, 1, 0, 2.5, -10]
//     document.getElementById('input').innerHTML=`The Orignal Array is: ${num}`;

//     document.getElementById("output").innerHTML= `The Filtered Array is: ${num.filter(isBigEnough)}.`

//problem 9: Return a Boolean if a number is divisible by 10

// let input = prompt("Enter a Num: ")

// if (input%10==0) {
//     console.log(true)
// } else {
//     console.log(false)
// }


// problem 10:Return the Sum of Two Numbers
// const sum = (a, b)=>{
//    return a + b;
// }
// console.log(sum(5,4))

// problem 11:Convert Age to Days
// const agetodays = (age)=>{
//     return age*365;
// }
// console.log(agetodays(15))

//problem 12: hours into seconds

// function howManySeconds(hours) {
// 	return hours*3600
// }
// console.log(howManySeconds(24))

//problem 13: Return the first element of the array
// function getFirstValue(arr) {
// 	return arr[0]
// }
// getFirstValue(["ovais", "raza", "obaid", "raza"])

//problem 14: Return the Remainder from Two Numbers

// function remainder(x, y) {
// 	return x%y
// }

// remainder(4,5)

//problem 15:Add up the Numbers from a Single Number
// function addUpToNum(n){
//     let totalSum = n*(n+1)/2
//     }
//     console.log(addUpToNum(7));


//problem 16: calculate the third edge of the triangle
// function TriangleEdge(side1, side2){
//     return side1+ side2 - 1
//     }
// console.log(TriangleEdge(12,16))


