// data types

// primitive data types

//number ->
console.log(typeof 5);
// string ->
console.log(typeof "5");
//boolean ->
console.log(typeof true);

// non primitive datatypes
let arr = [1,2,3,4,5];
console.log(typeof arr, arr);
let obj = { 1:"1"};
console.log(typeof obj, obj);

let a = 10;
let b = a;
console.log(a);
console.log(b);
b = 15;
console.log(a);
console.log(b);

let sam_arr = [1,2,3];
let sam_arr2 = sam_arr;
console.log(sam_arr);
console.log(sam_arr2);
sam_arr2[1] = 4;
console.log(sam_arr);
console.log(sam_arr2);

let ano_arr = [5,6,7];
let ano_arr2 = Object.assign([], ano_arr);
console.log(ano_arr);
console.log(ano_arr2);
ano_arr2[1] = 8;
console.log(ano_arr);
console.log(ano_arr2);
