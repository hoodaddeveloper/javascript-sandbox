/* Arrays */

let array1 = ["Hoodad", 100, true]
console.log(array1, array1[1])

/* Change an index of the array */
array1[0] = "Wesker"
console.log(array1)

/* Show the length of the array */
console.log(array1.length)

/* Add empty item into the array */
array1.length = 4
console.log(array1)

console.log("--------------------")

let array2 = ["Ali", "Ahmad", "Hoodad", "Hossein", "Hasan", "Sadegh", "Hoodad", "Javad", "Hoodad"]

for (let q = 0; q <= 8; q++) {
  if (array2[q] === "Hoodad") {
    console.log("Found Hoodad at the index " + q)
  }
}


console.log("--------------------")

let grade1 = 10;
let grade2 = 12;
let grade3 = 15.5;
let grade4 = 19;
let grade5 = 17.75;
let grade6 = 20;
let grade7 = 18.25;
let grade8 = 16;
let grade9 = 14.5;
let grade10 = 11;

let sum = grade1 + grade2 + grade3 + grade4 + grade5 + grade6 + grade7 + grade8 + grade9 + grade10
let average = sum / 10

console.log(average)

console.log("--------------------")

let grades = [10, 12, 15.5, 19, 17.75, 20, 18.25, 16, 14.5, 11]
let sum2 = grades[0] + grades[1] + grades[2] + grades[3] + grades[4] + grades[5] + grades[6] + grades[7] + grades[8] + grades[9]
let average2 = sum2 / grades.length

console.log(average2)

console.log("--------------------")

let sum3 = 0;

for (let i = 0; i <= 9; i++) {
  sum3 += grades[i]
}

let average3 = sum3 / grades.length
console.log(average3)

console.log("--------------------")