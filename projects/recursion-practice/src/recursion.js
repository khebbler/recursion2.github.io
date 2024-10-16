// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120

var factorial = function(n) {
  // base
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    return null;
  }
 
  // recursion
  return n * factorial(n - 1);


};

/*
var factorial2 = function(n, output=1) {
  // base
  if (n < 0) {
    return null;
  }
  if (n === 1) {
    return 1; 
  }
  if (n === 1) {
    return output;

  }

  // recursion
  // how to update default param?
  output *= n;

  return factorial2(n - 1, output);

}

// invoke factorial(4);
  // if () // false
    // return 4 * factorial(3) // master return statement

    // factorial(3)
      // if () // false
        // return 3 * factorial(2)

        */


// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  // base 
  if (array.length === 0) {
    return 0;
  }

  // recursion
  // returning the first element + the result of calling sum
  return array[0] + sum(array.slice(1))
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {

  // base
  if (n < 0) {
    return isEven(-n);
  }

  if (n === 0) {
    return true;
  }

  if (n === 1) {
    return false;
  }


  // recursion
  return isEven(n - 2)
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {

  // base 
  if (n === 0) {
    return 0;
  }

  // recursion
  // if n is positive
  if (n > 0) {
  return (n - 1) + sumBelow(n - 1);
  }

  // if n is negative
  if (n < 0) {
    return (n + 1) + sumBelow(n + 1);
  }

};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, output=[]) {
  // base
  if (x >= y - 1 && x <= y + 1) {
    return output;

  }

  // recursion
  if (x < y) {
  output.push(x + 1);
  
  return range(x + 1, y, output);
  }

  if (x > y) {
    output.push(x - 1);

  return range(x - 1, y, output);

  }
};

range(3, 6) // [3, 4, 5, 6]

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  // base
  if (exp === 0) {
    return 1;
  }

  // recursion
  // if exp is positive
  // multiply base by iteslf
  if (exp > 0) {
    return base * exponent(base, exp - 1)
  }
  // if exp is negative
  // making exp positive
  // returning reciprocal 
  if ( exp < 0) {
    return 1 / exponent(base, -exp)
  }


};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // base
  if (n === 1) {
    return true;
  }
  if (n < 1) {
    return false;
  }

  // recursion
  if (n % 2 !== 0) {
    return false;
  }

  return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  // base
  // if string in empty
  if (string.length === 0) {
    return string;
  }

  // recursion
  // last char of string + recursive call on string minus last char
  return string[string.length - 1] + reverse(string.slice(0, string.length - 1)); 


};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // removing spaces and capital letters
  string = string.toLowerCase().replace(/[^a-z0-9]/g, '');

  // base
  if (string.length <= 1) {
    return true;
  }

  // recursion
  // if first char and last char are the same
  if (string[0] === string[string.length - 1]) {
    // removing first and last char and calling recursively 
    return palindrome(string.slice(1, -1));
  // if first and last char are different
  } else {
    // not a palindrome
    return false;
  }


  // recursion


};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y) {
  if (y === 0) {
    return 0;
  }
  if (y > 0) {
    return x + multiply(x, y - 1);
  }
  if (y < 0) {
    return -multiply(x, -y);
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(string1, string2) {
  // base 
  // if both strings are empty
  if (string1.length === 0 && string2.length === 0) {
    return true;
  }
  // if first chars are not the same
  if (string1[0] !== string2[0]) {
    return false;
  }
  // recursion
  // comparing next chars
  return compareStr(string1.slice(1), string2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(string){
  // base
  // if string is empty
  if (string.length === 0) {
    return [];
  }
  // recursion
  // concat first char with recursive call with rest of string
  return [string[0]].concat(createArray(string.slice(1)))
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  // base
  // if array is empty
  if (array.length === 0) {
    return [];
  }

  //recursion
  // addind first element to end of array
  return reverseArr(array.slice(1)).concat(array[0]);


};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  // base
  // if no value
  if (length === 0) {
    return [];
  }

  // recursion
  // returning array with first element as the value + rest of array  
  return [value].concat(buildList(value, length - 1));

};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  // base
  if (array.length === 0) {
    return 0;
  }
  // recursion
  // if first element matches value
  if (array[0] === value) {
    // adding 1 to count & calling func on rest of array
    return 1 + countOccurrence(array.slice(1), value);
  } else {
    return countOccurrence(array.slice(1), value);
  }

};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  // base
  // if array is empty
  if (array.length === 0) {
    return [];
  }

  // recursion
  // returning first element concatenated with rest of array
  // calling recursively 
  return [callback(array[0])].concat(rMap(array.slice(1), callback));


};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n, fib=[0, 1]) {
  // base 
  if (n < 0) {
    return null;
  }
  if (fib.length > n) {
    return fib[n];
  }
  // recursion
  // add to fib
  fib.push(fib[fib.length -1] + fib[fib.length - 2]);

  return nthFibo(n, fib);


};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
    // base
    if (input.length === 0) {
      return [];
    }
    // recursion 
    // capitalizing first word
    // recursively calling rest of array
    return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  // base
  // if array is empty
  if (array.length === 0) {
    return [];
  }
  // recursion 
  // capitalizing first letter of first word
  // 
  var capitalizedWord = array[0][0].toUpperCase() + array[0].slice(1);
  return [capitalizedWord].concat(capitalizeFirst(array.slice(1)));
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(string, object = {}) {
    // base
    // if string is empty
    if (string.length === 0) {
      return object;
    }
    // intializing storage variable for first letter of string
    var firstLetter = string[0];
  
    // if object has firstLetter property
    if (object[firstLetter]) {
      // incrementing count
      object[firstLetter]++;
      // 
    } else {
      object[firstLetter] = 1;
    }
  
    // recursion
    return letterTally(string.slice(1), object);


  };


// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
   // base
  // if list is empty or only has 1 element
  if (list.length <= 1) {
    return list;
  }

  // recursion
  // if first element is the same as the second
  if (list[0] === list[1]) {
    // recursive call 
    return compress(list.slice(1));
  } else {
    return [list[0]].concat(compress(list.slice(1)));
  }


};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
    // base 
  // if array is empty or has 1 element
  if (array <= 1) {
    return array;
  } 

  // recursion
  if (array[0] === 0 && array[1] === 0) {
    return minimizeZeroes(array.slice(1));
  } else {
    return [array[0]].concat(minimizeZeroes(array.slice(1)));
  }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, index = 0) {
  // base case
  if (index >= array.length) {
    return array;
  }

   if (index % 2 === 0) {
    // even
   array[index] = Math.abs(array[index]);
  } else {
    // odd
    array[index] = -Math.abs(array[index]);
  }

  // recursion
  return alternateSign(array, index + 1);


};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(string) {
  // Create a mapping of digits to their word equivalents
  var numWords = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine'
  };

  // base
  // if string is empty
  if (string.length === 0) {
    return '';
  }

  // getting first char of string
  var firstChar = string[0];

  // if first char is a digit 
  // replace with word
  if (numWords[firstChar]) {
    return numWords[firstChar] + numToText(string.slice(1));
  } else {
    // otherwise don't change
    return firstChar + numToText(string.slice(1));
  }
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
