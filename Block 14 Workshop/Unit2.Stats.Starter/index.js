// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

/* Step 1 */
// Prompt the user for a list of integers separated by commas.
//"Please enter some integers separated by commas.", "1,2,3,4,5"

const userInputString = prompt("Please enter some integers separated by commas:");
console.log(userInputString);


/* Step 2 */ 
// Split the string of numbers into an array of strings.

//The .split(",") method breaks the string into an array wherever it sees a comma.
const stringArray = userInputString.split(","); 
console.log("Splitting the string of numbers into an array of strings: ", stringArray);


/* Step 3 */
// Convert the array of strings into an array of numbers.

const numbers = [];  //empty array helps store the results as the new array is being built below

for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];   //It gets one string from the stringArray at position i and stores it in a variable called str.
  const number = parseInt(str);       //Uses parseInt() to convert each string to a number, parseInt() is a built in JavaScript funciton
  numbers.push(number);               //Pushes the number into a new array called numbers
}

console.log("Convert the array of strings into an array of numbers: ", numbers);


/* Step 4 */
// Peform some calculations on the numbers. I am going to use three different functions for this section

/* Step 4, Function calculation No. 1 */
// Define the getLength function to return the length of the numbers array
// arr is used as a parameter
function getLength(arr) {
  return arr.length;          // Returns the length of the array
}

console.log(`You have given ${getLength(numbers)} numbers.`);


/* Step 4, Funciton calculation No. 2 */
function getSum(arr) {
  let sum = 0;                              // Start with a sum of 0
  for (let i = 0; i < arr.length; i++) {    // Loop through each number in the array
    sum += arr[i];                          // Add each number to the sum. It is shorthand for sum = sum + arr[i]
  }
  return sum;                               // Return the final sum
}

console.log(`The sum of your numbers is ${getSum(numbers)}.`);

/* Example of how this funciton getSum(arr) works
If the numbers array is [1, 2, 3, 4, 5], here's how the function would work:
Initial sum: 0
First iteration: sum = 0 + 1 → sum = 1
Second iteration: sum = 1 + 2 → sum = 3
Third iteration: sum = 3 + 3 → sum = 6
Fourth iteration: sum = 6 + 4 → sum = 10
Fifth iteration: sum = 10 + 5 → sum = 15 */

/* Step 4, Function calculation No. 3 */
// arr is the parameter
function getEvens(arr) {
  let evens = [];      // Use of an empty array, be used to store all the even numbers found in the input array.

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {    // This checks if the number at index i in the array is even
      evens.push(arr[i]);     //if the number is even, it's added to the evens array using .push().
    }
  }

  return evens;    //After the loop finishes, the function returns the array evens, which contains only the even numbers from the input
}

console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
