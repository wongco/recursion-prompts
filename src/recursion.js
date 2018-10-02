/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
	// base case n negative, return null
	if(n < 0) {
		return null;
	}

	// base case n equals 0, returns 1
	if(n === 0) {
		return 1;
	}

	// recursive case n * (n-1);
	return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  // base case array.length is 0
  if(array.length === 0) {
  	return 0;
  }

  // recursive case add current element + sum of remaining element
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
	// base case: lenght of array  = 0, return 0
	if(array.length === 0) {
		return 0;
	}

	// recursive case 1: if first item in array is nested (array item is an array)
	// recrusively call arraySum on first element + arraySum on rest of array
	if(Array.isArray(array[0]) === true) {
		return arraySum(array[0]) + arraySum(array.slice(1));
	}

	// recursive case 2: first item is not an array, return first element + arraySum on rest of array
	return array[0] + arraySum(array.slice(1));
};

// 4. Check if a number is even.
var isEven = function(n) { // Test Cases, Positive, 0 , Negative
	// base case - its even n = 0
	if(n === 0) {
		return true;
	}

	// base case - its odd when n = 1
	if(Math.abs(n) === 1) {
		return false;
	}

	// recursive case - substract 2 until n is equal to 0 or 1
	return isEven(Math.abs(n) - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) { // Case 1 should be 0. 0 Should be 0. 2 Should be 1

	// base case: n is -1, 0 or 1
	if(n === -1 || n === -1 || n === 0) {
		return 0;
	}

  // recursive case 1: n is a positive integer larger than 1. return n-1 + recursively call sumBelow on n-1 numbers
	if(n > 0) {
	  return (n - 1) + sumBelow(n - 1);
	}

  // recursive case 2: n is a negative integer smaller than -1. return n-1 + recursively call sumBelow on n-1 numbers
	return (n + 1) + sumBelow(n + 1);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
	// base case: when absolute difference of y - x <= 1 returns empty array
	if(Math.abs(y - x) <= 1) {
		return [];
	}

	// recursive case 1: when range is increasing, return array with x + 1 and concats range(x + 1, y)
	if(y > x){
		return [x+1].concat(range(x+1, y));
	}

	// recursive case 2: when range is decreasing, return array with x - 1 and concats range(x - 1, y)
	return [x - 1].concat(range(x-1, y));
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
	// base case : exp is to 0 power equals 1
	if(exp === 0) {
		return 1;
	}

	// recursive case 1: when exp is positive, return base * exponent(base, exp - 1);
	if(exp > 0) {
		if(exp % 2 === 0) { // recursive case 1 subcase: when exp is positive and even, return base * base * exponent(base, exp - 2);
			return base * base * exponent(base, exp - 2);
		}
	  return base * exponent(base, exp - 1);
	}

	// recursive case 2: when exp is negative, return 1 / base * exponent(base, exp + 1);
	return 1 / exponent(base, -exp);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
	if(n <= 0) {
		return false;
	}

	if(n === 1) {
		return true;
	}

	return powerOfTwo(n / 2); 
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
	// base case
	if(string.length === 1) {
		return string;
	}

	// recursive case
	return string[string.length - 1] + reverse(string.slice(0,-1));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
	// base case - length of char = 0 or 1
	if(string.length <= 1) {
		return true;
	}

	var frontIndex = 0; // checks to ignore spaces from left to right
	if(string[frontIndex] === ' ') {
		return palindrome(string.slice(1));
	}

	var backIndex = string.length - 1; // checks to ignore spaces from to left
	if(string[backIndex] === ' ') {
		return palindrome(string.slice(0,-1));
	}

	// recursive case1 - check front and back. if true check return palindrome of inside
	if(string[frontIndex].toLowerCase() === string[backIndex].toLowerCase()){
		return palindrome(string.slice(1,-1));
	}

	return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
	if(y === 0) {
		return NaN;
	}

	if(y < 0 && x > 0) {
		return -modulo(x, -y);
	}

	if(y > 0 && x < 0) {
		return -modulo(-x, y);
	}

	if(y < 0 && x < 0) {
		return -modulo(-x, -y);
	}

	if(x < y) {
		return x;
	}

	if(x === y) {
		return 0;
	}

	return modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
	if(x === 0 || y === 0) {
		return 0;
	}

	if(y === 1) {
		return x;
	}

	if(x > 0 && y > 0) {
		return x + multiply(x, y - 1);
	}

	if(x < 0 && y > 0) {
		return -multiply(-x, y);
	}

	if(x > 0 && y < 0) {
		return -multiply(x, -y);
	}

	return multiply(-x, -y);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {

	if(y === 0) {
		return NaN;
	}

	if(x === 0) {
		return 0;
	}

	if(x < 0 && y < 0) {
		return divide(-x, -y);
	}

	if(x < 0 && y > 0) {
		return -divide(-x, y);
	}

	if(x > 0 && y < 0) {
		return -divide(x, -y);
	}

	if(x < y) {
		return 0; 
	}

	if(x > 0 && y > 0) {
		return 1 + divide(x - y, y);
	}
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
	// base case using ecluid's algorithm
  if(x < 0 || y < 0) {
  	return null;
  }

  if(y % x === 0) {
  	return x;
  }
	// recursive case
  return gcd(y, x % y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
	if(str1.length === 0 && str2.length === 0) {
		return true;
	}

	if(str1[0] === str2[0]) {
		return compareStr(str1.slice(1),str2.slice(1));
	}

	return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
	if(str.length === 0) {
		return [];
	}
	return [str[0]].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
	if(array.length === 0) {
		return [];
	}
	return [array[array.length-1]].concat(reverseArr(array.slice(0,-1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
	if(length === 0) {
		return [];
	}
	return [value].concat(buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
	if(n === 0) {
		return [];
	}

	if(n % 5 === 0 && n % 3 === 0) {
		return fizzBuzz(n - 1).concat(['FizzBuzz']);
	}

	if(n % 5 === 0) {
		return fizzBuzz(n - 1).concat(['Buzz']);
	}

	if(n % 3 === 0) {
		return fizzBuzz(n - 1).concat(['Fizz']);
	}

	return fizzBuzz(n - 1).concat([n.toString()]);
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
	if(array.length === 0) {
		return 0;
	}

	if(array[0] === value) {
		return 1 + countOccurrence(array.slice(1), value);
	}
	return countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
	if(array.length === 0) {
		return [];
	}
	return [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
	var result = 0;
	for(var keyRef in obj) {
		if(typeof obj[keyRef] === 'object') {
			result += countKeysInObj(obj[keyRef], key);
		}
	}
	if(key in obj) {
		result += 1;
	}
	return result;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
	var result = 0;
	for(var keyRef in obj) {
		if(typeof obj[keyRef] === 'object') {
			result += countValuesInObj(obj[keyRef], value);
		} else {
			if(obj[keyRef] === value) {
				result++;
			}
		}
	}
	return result;	
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
	for(var key in obj) {
		if(typeof obj[key] === 'object') {
			replaceKeysInObj(obj[key], oldKey, newKey);
		} else {
			if(oldKey in obj) {
				obj[newKey] = obj[oldKey];
				delete obj[oldKey];
			}
		}
	}
	return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
	if(n <= 0) {
		return null;
	}

	if(n === 1) {
		return [0,1];
	}

	if(n === 2) {
		return fibonacci(1).concat([1]);
	}
	var last = fibonacci(n - 1); // [0, 1, 1]
	return last.concat([last[last.length-2] + last[last.length-1]]);
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
	if(n < 0) {
		return null;
	}

	if(n === 0) {
		return 0;
	}

	if(n === 1 || n === 2) {
		return 1;
	}

	return nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
	if(array.length === 0) {
		return [];
	}
	return [array[0].toUpperCase()].concat(capitalizeWords(array.slice(1)));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
	if(array.length === 0) {
		return [];
	}
	var firstWordArray = array[0].split('');
	firstWordArray[0] = firstWordArray[0].toUpperCase();
	return [firstWordArray.join('')].concat(capitalizeFirst(array.slice(1)));
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
	var result = 0;
	for(var key in obj) {
		if(typeof obj[key] === 'object') {
			result += nestedEvenSum(obj[key]);
		}
		if(obj[key] % 2 === 0) {
			result += obj[key];
		}
	}
	return result;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
	if(array.length === 0) {
		return [];
	}

  var result = [];
	if(Array.isArray(array[0]) === true) {
		result = result.concat(flatten(array[0]));
	} else {
		result.push(array[0]);
	}
	return result.concat(flatten(array.slice(1)));
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
	if(str.length === 0) {
		return obj;
	}

  if(typeof obj === 'object') {
    if(obj.hasOwnProperty(str[0]) === false) {
      obj[str[0]] = 1;
    } else {
      obj[str[0]]++;
    }
    return letterTally(str.slice(1), obj);    
  }
  var newObj = {};
  newObj[str[0]] = 1;
  return letterTally(str.slice(1), newObj);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
	// base case length <= 1
	if(list.length <= 1) {
	  return list;
	}

	// 0 element and 1 element is not unique
	if(list[0] === list[1]) {
	  // ignore element 1
	  // return compression(list) minus 0 element
	  return compress(list.slice(1));
	} else {
	// else not equal, then element 0 is unique
	   var result = [];
	   result.push(list[0]);

	   result = result.concat(compress(list.slice(1)));
	   // take element 0 and store. cat to it compress of (list) minus 0 element.
	   return result;
	}

};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
	// base case list.length === 0
	if(array.length === 0) {
		return [];
	}

	// else list has items left
	var temp = array[0];
	temp.push(aug);
	var result = [temp];
	result = result.concat(augmentElements(array.slice(1), aug));
	return result;
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
