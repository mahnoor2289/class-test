// question no 1

function reverseArray(arr) {
    // Create a new array to store the reversed elements
    let reversedArray = [];
    
    // Iterate over the original array from end to beginning
    for (let i = arr.length - 1; i >= 0; i--) {
        
        reversedArray.push(arr[i]);
    }
    
    // Return the reversed array
    return reversedArray;
}

// Example usage:
let arraySmall = [1, 2, 3, 4, 5];
console.log('Original array:', arraySmall);
console.log('Reversed array:', reverseArray(arraySmall));

let arrayLarge = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log('\nOriginal array:', arrayLarge);
console.log('Reversed array:', reverseArray(arrayLarge));



// question no 2
// function negativeArray(arrays){

// let reverseArray=[]


// }
//     let negativeArray=[-1,-2,-3];
//     console.log('Original array:', negativeArray);
// console.log('reverseArray:',negativeArray(reverseArray));



   

// question no 3

    function countVowels(s) {
        // Define a string containing all vowels (both lowercase and uppercase)
        let vowels = "aeiouAEIOU";
        let count = 0;
        
        // Loop through each character in the string
        for (let i = 0; i < s.length; i++) {
            // Check if the current character is a vowel
            if (vowels.includes(s[i])) {
                count++;
            }
        }
        
        return count;
    }
    
    // Example usage:
    console.log(countVowels("Hello, World!")); // Output: 3 (e, o, o)
    console.log(countVowels("JavaScript is amazing")); // Output: 7 (a, a, i, i, a, a, i)
    console.log(countVowels("Try this sentence")); // Output: 3 (i, e, e)

// question no 6
function getMinMappedValue(arr, mapFunc) {
    // Map each element of the array using the provided mapping function
    let mappedArray = arr.map(mapFunc);
    
    // Find the minimum value in the mapped array
    let minValue = Math.min(...mappedArray);
    
    return minValue;
}

// Example usage:
let array = [1, 2, 3, 4, 5];

// Mapping function (example: squaring each element)
let mapFunction = (x) => x * x;

// Get the minimum value after mapping each element using the mapFunction
let minValue = getMinMappedValue(array, mapFunction);
console.log("Minimum value after mapping:", minValue);  



    


    // question no 7
    function createUpdatedString(inputString) {
        // Check if the input string has length 3 or more
        if (inputString.length < 3) {
            return "String length must be 3 and above.";
        }
        
        // Extract the last 3 characters of the input string
        let lastThreeChars = inputString.slice(-3);
        
        // Create a new string by repeating the last 3 characters 4 times
        let updatedString = lastThreeChars.repeat(4);
        
        return updatedString;
    }
    
    // Example usage:
    let originalString = "Hellomahnoor";
    let updatedString = createUpdatedString(originalString);
    console.log(updatedString);  
    