// 21-3-2023
// create array[1,2,3,4,5] and assign the array in a variable is a second array,
//check if push the second array it will affect the first array or not
const first = [1,2,3,4,5];

let second = first;
second.push(6);
document.write("Frist Array=",first );
document.write("Second Array=",second );

second.pop();
document.write("Frist Array(pop)=",first );
document.write("Second Array(pop)=",second );