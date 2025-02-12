// Write your code here
// QUIZZ
/*
1. array.push()
2.array.shift()
3. splice changes the original array, slice returns new.
4.array.length
5.array.includes()
6. messy
7.let array = [1,3,4] ,
  let array1 = [2,5,7]
  let array2 = array.concat(array2)
8.array.reverse()
9.?
10.?
*/


// assigments 
// task1 
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(array[2]);

array.splice(4, 1, 15);
console.log(array);

array.push(14);
console.log(array);
array.shift();
console.log(array);

// task2 

let array2 = ['strawberry', 'orange', 'blueberry', 'watermelon'];

array2.splice(1, 1, "pineapple");
array2.push("orange");
console.log(array2);

let fruit = array2.pop();
console.log(fruit);

array2 = ['orange', 'blueberry', 'pineapple'];
array2.unshift("strawberry");
console.log(array2);

let firstRemovedItem = array2.shift();
console.log(array2);
console.log(firstRemovedItem);

// task3 
console.log(`task 3 colours`);
let colours = ['Red', 'green', 'blue', 'yellow', 'cyan'];

for (let i = 0; i < 5; i++) {
    console.log(colours[i]);
}

// task4 
console.log(`task 4`);

let array3 = [1, 2, 3, 4, 5, 6, 7];

array3.splice(1, 1);

console.log(array3);
array3.splice(1, 1);
console.log(array3);

array3.splice(1, 0, 14, 15);
console.log(array3);

let newArray = array3.slice(4, 7);

console.log(newArray);

// task5 
let names = ['lukas', 'alex', 'ben', 'nick'];

names.sort();
console.log(names);
names.reverse();
console.log(names);

console.log('task6');
// task6 
let numbers = [1, 2, 3, 4, 5, 6, 7];


console.log(numbers.indexOf(4));
console.log(numbers.includes(8));

console.log("task9");
// task 9 
let nums = [1, 2, 3, 4];
let nums2 = [5, 6, 7, 8];
let nums1nums2 = nums.concat(nums2);
console.log(nums1nums2);

let numsPlusNums2 = [...nums, ...nums2];

console.log(numsPlusNums2);

// task10 

let theNumbers = [2, 4, 6, 8];
theNumbers.reverse();
console.log(theNumbers);


