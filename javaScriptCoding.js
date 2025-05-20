/* fibonacci series */
const fibonacci = (n) => {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

console.log(fibonacci(5));
console.log(fibonacci(10));

/* factorial */

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));
console.log(factorial(10));

/*check prime number */

function prime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(prime(5));
console.log(prime(10));
console.log(prime(13));

/* check number is power of two */

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(10));
console.log(isPowerOfTwo(16));

/*check number isPowerOfTwo */

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(10));
console.log(isPowerOfTwo(16));

// Recursion - function calls itself

/* Linear Search */

function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) return i;
  }
  return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5], 3));
console.log(linearSearch([1, 2, 3, 4, 5], 6));

/* Binary Search 
1, arr should be sorted
2, compare x with the middle element
3, if x === middle element return middle index
4, if x < middle element search left side
5, if x > middle element search right side
6, repeat the process
7, return -1 if x not found
*/

function binarySearch(arr, x) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[middleIndex] === x) {
      return middleIndex;
    }
    if (x < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5], 6));
console.log(binarySearch([1, 2, 3, 4, 5], 4));

/* Bubble Sort */

// function bubbleSort(a) {
//   let swapped = false;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] > a[i + 1]) {
//       let temp = a[i];
//       a[i] = a[i + 1];
//       a[i + 1] = temp;
//       swapped = true;
//     }
//   }
//   if (!swapped) return a;
//   return bubbleSort(a);
// }

function bubbleSort(a) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i + 1]) {
        let temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return a;
  // if (!swapped) return a;
  // return bubbleSort(a);
}

console.log(bubbleSort([5, 3, 8, 2, 1, 4]));

console.log(bubbleSort([1, 2, 12, 3, 10, 4, 5]));
console.log(bubbleSort([8, 20, -2, 4, -6]));

/* insertion sort :
1. iterate through the array starting from the second element
2. for each element, compare it with the elements before it
3. shift the elements that are greater than the current element to the right
4. insert the current element in its correct position
5. repeat the process for all elements
6. return the sorted array
7. time complexity: O(n^2) in the worst case, O(n) in the best case
8. space complexity: O(1)
9. stable sorting algorithm
10. in-place sorting algorithm
11. efficient for small datasets or partially sorted arrays
 */

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (arr[j] > numberToInsert && j >= 0) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }

  return arr;
};

console.log(insertionSort([2, -4, 1, 5, 3, 9]));

/* quick sort :
1. pick a pivot element
2. partition the array into two sub-arrays
3. elements less than pivot go to left
4. elements greater than pivot go to right
5. repeat the process for left and right sub-arrays
6. combine the sorted left, pivot, and sorted right sub-arrays
7. return the combined array
8. base case: if the array has less than 2 elements, return the array
9. time complexity: O(n^2) in the worst case, O(n log n) on average
10. space complexity: O(log n) due to recursion stack
11. not stable
12. in-place sorting algorithm
13. commonly used for large datasets
14. can be implemented using different pivot selection strategies (first element, last element, random element, median)
15. can be optimized with techniques like tail call optimization
16. can be used for sorting linked lists with some modifications
*/

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort([2, -4, 1, 5, 3, 9]));

/* merge sort :
1. divide the array into two halves
2. recursively sort each half
3. merge the sorted halves
4. return the merged array
5. base case: if the array has less than 2 elements, return the array
6. time complexity: O(n log n) in all cases
7. space complexity: O(n) due to temporary arrays
8. stable sorting algorithm
*/

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middle);
  const rightArray = arr.slice(middle);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

const merge = (leftArray, rightArray) => {
  const sortedArray = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }
  return [...sortedArray, ...leftArray, ...rightArray];
};

console.log(mergeSort([2, -4, 1, 5, 3, 9]));

/* Cartesian Product */

const cartesianProduct = (arr1, arr2) => {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
};

console.log(cartesianProduct([1, 2, 3], [4, 5, 6]));

/* Algorithms

1. Find the GCD using Euclidean algorithm
2. Find the LCM of two numbers
3. Find the Permutations and combinations of a list of numbers
4. Find the longest common substring in a given string
5. Knapsack problem
*/

/* Time complexity types:
1. constant time: O(1)
2. logarithmic time: O(log n)
3. linear time: O(n)
4. linearithmic time: O(n log n)
5. quadratic time: O(n^2)
6. cubic time: O(n^3)
7. exponential time: O(2^n)
8. factorial time: O(n!)
*/

/*set*/

const setExample = () => {
  const set = new Set([1, 2, 4, 5, 6, 7, 8, 9, 10]);
  console.log(set.has(5));
  set.add(11);
  console.log(set);
  set.delete(10);
  console.log(set);
};

console.log(setExample());

/*map:
1. key-value pairs
2. keys can be any data type
3. values can be any data type
4. keys are unique
5. methods: set, get, has, delete, clear, size

*/

const mapExample = () => {
  const map = new Map([
    ["name", "John"],
    ["age", 30],
  ]);
  console.log(map.get("name"));
  map.set("name", "Jane");
  console.log(map);
  map.delete("name");
  console.log(map);
};

console.log(mapExample());

/* 1. find the missing number in a given integer array input
 let arr = [1, 2, 3, 4, 6, 7, 8];
 count=10;
 output : MissingArray: [5, 9, 10]
*/

const missingNumber = (arr, count) => {
  const missingArray = [];
  for (let i = 1; i <= count; i++) {
    if (!arr.includes(i)) {
      missingArray.push(i);
    }
  }
  return missingArray;
};

console.log(missingNumber([1, 2, 3, 4, 6, 7, 8], 10));

/* Replace underScore with spaces and capitalize the words
eg: "hello_world" => "Hello World"
*/
const replaceUnderScore = (str) => {
  return str
    .split("_")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");
};

console.log(replaceUnderScore("hello_world"));

/* find the occurrence of elements in the array */

const findOccurrence = (data) => {
  const res = {};
  for (let i of data) {
    res[i] = res[i] ? res[i] + 1 : 1;
  }
  return res;
};

console.log(findOccurrence([2, 4, 1, 3, 2, 5, 2, 5, 3, 3, 4, 7]));

/* sort the array based on age and return age*/

const sortArray = (data) => {
  return data.map((item) => item.age).sort((a, b) => a - b);
};

console.log(
  sortArray([
    {
      age: 28,
      name: "santosh",
    },
    {
      age: 21,
      name: "jaanu",
    },
    {
      age: 25,
      name: "Ramya",
    },
  ])
);

/*polyfills*/

/* find the max number of the string in the array */

const findMaxLength = (data) => {
  return data.map((item) => {
    const words = item.split("-");
    return Math.max(...words);
  });
};

console.log(findMaxLength(["22-35-18", "2-6-22", "17-11-04"]));

/* find the max length of the string in the array */

const findMaxStringLength = (data) => {
  const splitData = data.split(" ");
  // let maxString = splitData[0];
  // for (let item of splitData) {
  //   if (maxString.length < item.length) {
  //     maxString = item;
  //   }
  // }
  // return maxString;
  return splitData.reduce((max, item) => {
    return max.length < item.length ? item : max;
  }, "");
};

console.log(findMaxStringLength("hello jaanu what are you doing"));

/* Remove the duplicate elements from the array */

const removeDuplicate = (data) => {
  return data.filter((item, index) => data.indexOf(item) === index);
};

console.log(
  removeDuplicate([
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "mango",
    "kiwi",
  ])
);

/* diamond shape pattern */

function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
}

x();

/* fixed above code using closure */
function x() {
  for (var i = 1; i <= 5; i++) {
    (function (i) {
      setTimeout(function () {
        console.log(i);
      }, 1000);
    })(i);
  }
}
x();

/* fixed above code using let */
function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
}

/* function statement*/

function x() {
  console.log("hello..");
}

/* function expression*/
/*--> throws x is not a function-- error --> because of hosting x 
is undefined initially and while calling it throws not a function */
x();
var x = function () {
  console.log("hi...");
};

console.log(".....", this);

/* string methods

Here is a list of commonly used JavaScript string methods along with examples:

1. charAt(index)
Returns the character at the specified index.

"
2. charCodeAt(index)
Returns the Unicode of the character at the specified index.

72
3. concat()
Joins two or more strings.

"
4. includes()
Checks if a string contains a specified value.

true
5. endsWith()
Checks if a string ends with a specified value.

true
6. indexOf()
Returns the index of the first occurrence of a specified value.

4
7. lastIndexOf()
Returns the index of the last occurrence of a specified value.

7
8. match()
Searches a string for a match against a regular expression.

]
9. replace()
Replaces a specified value with another value.

"
10. split()
Splits a string into an array of substrings.

]
11. slice()
Extracts a part of a string.

"
12. startsWith()
Checks if a string starts with a specified value.

true
13. substring()
Extracts characters between two indices.

"
14. toLowerCase()
Converts a string to lowercase.

"
15. toUpperCase()
Converts a string to uppercase.

"
16. trim()
Removes whitespace from both ends of a string.

"
17. trimStart() / trimEnd()
Removes whitespace from the start or end of a string.

"
18. repeat()
Repeats a string a specified number of times.

"
19. padStart() / padEnd()
Pads the string with another string until it reaches the given length.

20. toString()
Returns the string representation of an object.

21. valueOf()
Returns the primitive value of a string object.

22. localeCompare()
Compares two strings in the current locale.

23. search()
Searches for a match between a regular expression and a string.

6
24. fromCharCode()
Returns a string created from the specified sequence of Unicode values.

25. normalize()
Returns the Unicode Normalization Form of a string.

These methods are powerful tools for manipulating and working with strings in JavaScript.
*/

/*

1. Reverse a String
2. Longest word in given sentence
3. Palindrome 
4. Remove duplicates from array



*/


1. Reverse a string

Method:1
const reverseString = (str) => {
  let revString = ''
  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }
  return revString;
}

Method:2

const reverseString = (str) => {
return str.split('').reverse().join('')
}


const str = reverseString("jaanu")
console.log(str)


	2. parlindrom


const parlindrom = str => {
  let revstr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    revstr += str[i];
  }
  return str === revstr ? `${str} is parlindrom` : `${str} is not parlindom`;
};
const str = parlindrom('jaanu');
console.log(str);



3.largestNumber


const largestNumber = (arr) => {
  let large = arr[0]
  for (let i = 1; i <= arr.length-1; i++) {
    if (large < arr[i]) {
      large = arr[i]
    }
  }
  return large
}
const arr = largestNumber([1, 5, 3, 9, 44, 33, 55])
console.log(arr)


4.removeDuplicate

Method:1

const removeDuplicate=(data)=>{
  let dup=[];
  count=0
  for(let i=0;i<data.length;i++){
      if(!dup.includes(data[i])){
          dup.push(data[i])
      }
  }
return dup
}

Method:2
const removeDuplicate=(data)=>{
    return data.filter((item,index)=>data.indexOf(item)===index)
}
const data=removeDup([2,4,6,4,6,7])
console.log(data)


	5. Largest word :

Method:1

const largestWord=(sentence)=>{
  const words=sentence.split(' ')
  let maxWord=words[0]
  for(let i=1;i<words.length;i++){
      if(maxWord.length<words[i].length){
          maxWord=words[i]
      }
  }
return maxWord
}
const data=largestWord("hello jaanu whatsss how are you")
console.log(data)

Method:2

const largestWord=(sentence)=>{
  const words=sentence.split(' ')
  let maxWord=''
  for(let word of words){
      if(maxWord.length<word.length){
          maxWord=word
      }
  }
return maxWord
}

6.Factorial:

const fact=(n)=>{
    if(n===0){
        return 1;
    }
    return n*fact(n-1)
}
const data=fact(5);
console.log("data...",data)


	7. Given number is Prime
	const isPrime=(number)=>{
	  if(number===1) return false;
	  for(let i=2;i<=Math.sqrt(number);i++){
	    if(number%i===0) return false
	  }
	  return true;
	}
	console.log(isPrime(7))
	
	
	const generatePrime=(n)=>{
	    const data=[]
	    for(i=2;i<n;i++){
	        if(isPrime(i)){
	            data.push(i)
	        }
	    }
	    return data
	}
	console.log(generatePrime(100))

8.flatten Array
	
	


	9. Array Number sorting

[1,4,2,6,3,7,8].sort((a,b)=>a-b)

	10. String Sort

['apple', 'dog','cow','van','sun','son'].sort().reverse()

	11. Object sorting based on string


[
  { name: 'santosh', age: '29', },
  { name: 'jaanu', age: 21 }
].sort((item1,item2)=>{
  const a=item1.name.toLowerCase();
  const b=item2.name.toLowerCase()
  if(a>b) return 1;
  if(a<b) return -1;
  return 0;
  
  })

	12. Object sorting based on number

 
	
	[
	  { name: 'santosh', age: '29', },
	  { name: 'jaanu', age: 21 }
	].sort((item1, item2) =>
	  item1.age - item2.age
	)
	13. Sum of numbers

[1,2,3,4,5,6].reduce((sum,num)=>sum+num,0)

	14. Bubble sorting

const bubbleSort=(arr)=>{
  let n=arr.length;
  let swap
  do{
      swap=false
      for(i=0;i<n-1;i++){
          if(arr[i]>arr[i+1]){
              [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
              swap=true
          }
      }
      n--;
  }while(swap)
  
  return arr
}
console.log(bubbleSort([5,4,2,6,3]))






	

