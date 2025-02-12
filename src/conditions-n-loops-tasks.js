/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number >= 0) return true;
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  )
    return true;
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) return true;
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let rez = '';
  const dec = Math.floor(num / 10);
  if (dec > 0) {
    for (let i = 0; i < dec; i += 1) {
      rez += 'X';
    }
  }
  const ost = num % 10;
  switch (ost) {
    case 1:
      rez += 'I';
      break;
    case 2:
      rez += 'II';
      break;
    case 3:
      rez += 'III';
      break;
    case 4:
      rez += 'IV';
      break;
    case 5:
      rez += 'V';
      break;
    case 6:
      rez += 'VI';
      break;
    case 7:
      rez += 'VII';
      break;
    case 8:
      rez += 'VIII';
      break;
    case 9:
      rez += 'IX';
      break;
    default:
      break;
  }

  return rez;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let str = '';
  const temp = `${numberStr}`;
  for (let i = 0; i < temp.length; i += 1) {
    if (str) str += ' ';
    switch (temp[i]) {
      case '1':
        str += 'one';
        break;
      case '2':
        str += 'two';
        break;
      case '3':
        str += 'three';
        break;
      case '4':
        str += 'four';
        break;
      case '5':
        str += 'five';
        break;
      case '6':
        str += 'six';
        break;
      case '7':
        str += 'seven';
        break;
      case '8':
        str += 'eight';
        break;
      case '9':
        str += 'nine';
        break;
      case '0':
        str += 'zero';
        break;
      case '.':
        str += 'point';
        break;
      case ',':
        str += 'point';
        break;
      case '-':
        str += 'minus';
        break;
      default:
        break;
    }
  }
  return str;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let p = '';
  for (let i = 0; i < str.length; i += 1) {
    p += str[str.length - i - 1];
  }
  if (p === str) return true;
  return false;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let indexOf = -1;
  let i = 0;
  while (i < str.length && indexOf === -1) {
    if (str[i] === letter) {
      indexOf = i;
    }
    i += 1;
  }
  return indexOf;
}
/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let include = false;
  let i = 0;
  const str = `${num}`;
  const letter = `${digit}`;
  while (i < str.length && !include) {
    if (str[i] === letter) {
      include = true;
    }
    i += 1;
  }
  return include;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let balance = -1;
  let i = 0;
  while (i < arr.length && balance === -1) {
    let sumL = 0;
    let sumR = 0;
    for (let j = 0; j < i; j += 1) {
      sumL += arr[j];
    }
    for (let j = i + 1; j < arr.length; j += 1) {
      sumR += arr[j];
    }
    if (sumL === sumR) balance = i;
    i += 1;
  }

  return balance;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  let k = 1;
  const arr = [];
  for (let i = 0; i < size; i += 1) {
    arr[i] = [];
  }

  for (let i = 0; i < size - 1; i += 1) {
    for (let j = i; j < size - i; j += 1) {
      arr[i][j] = k;
      k += 1;
    }
    for (let j = i + 1; j < size - i; j += 1) {
      arr[j][size - i - 1] = k;
      k += 1;
    }
    for (let j = size - i - 2; j >= i; j -= 1) {
      arr[size - i - 1][j] = k;
      k += 1;
    }
    for (let j = size - i - 2; j > i; j -= 1) {
      arr[j][i] = k;
      k += 1;
    }
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const a = matrix;

  let temp;
  for (let i = 0; i < n / 2; i += 1) {
    for (let j = i; j < m - i - 1; j += 1) {
      temp = matrix[i][j];
      a[i][j] = matrix[n - 1 - j][i];
      a[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
      a[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
      a[j][n - 1 - i] = temp;
    }
  }
  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */

const division = (arr, left, right) => {
  const items = arr;
  const pivot = items[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (items[i] < pivot) {
      i += 1;
    }
    while (items[j] > pivot) {
      j -= 1;
    }
    if (i <= j) {
      [items[i], items[j]] = [items[j], items[i]];
      i += 1;
      j -= 1;
    }
  }
  return i;
};

function sort(items, left, right) {
  let index;
  if (items.length > 1) {
    index = division(items, left, right);
    if (left < index - 1) {
      sort(items, left, index - 1);
    }
    if (index < right) {
      sort(items, index, right);
    }
  }
  return items;
}

function sortByAsc(arr) {
  return sort(arr, 0, arr.length - 1);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(/* str, iterations */) {
  throw new Error('Not implemented');
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const arr = `${number}`;
  let i = arr.length - 1;
  let left = 0;
  while (i > 0 && left === 0) {
    if (arr[i - 1] < arr[i]) {
      left = i - 1;
    }
    i -= 1;
  }

  const arrCut = [];
  for (i = left; i < arr.length; i += 1) {
    arrCut[i - left] = arr[i];
  }

  const leftCut = [];
  for (i = 0; i < left; i += 1) {
    leftCut[i] = arr[i];
  }

  const result = [];
  const getCombinations = (a, memo = []) => {
    let cur = [];
    for (let z = 0; z < a.length; z += 1) {
      cur = a.splice(z, 1);
      if (a.length === 0) {
        result.push([...memo, cur]);
      }
      getCombinations([...a], [...memo, cur]);
      a.splice(z, 0, cur[0]);
    }
    return result;
  };

  const sortMethod = (array) => {
    if (array.length <= 1) {
      return array;
    }
    let left1 = [];
    let right1 = [];
    const pivot = array[array.length - 1];

    for (let p = 0; p < array.length - 1; p += 1) {
      if (array[p] > pivot) {
        right1 = [...right1, array[p]];
      } else {
        left1 = [...left1, array[p]];
      }
    }
    return [...sortMethod(left1), pivot, ...sortMethod(right1)];
  };

  let comb = getCombinations(arrCut);
  comb = sortMethod(comb.map((item) => item.join('')));

  let k = 0;
  let num = 0;
  while (k < comb.length && num === 0) {
    if (
      Number(leftCut.join('') + comb[k]) >
      Number(leftCut.join('') + arrCut.join(''))
    ) {
      num = leftCut.join('') + comb[k];
    }

    k += 1;
  }

  return Number(num);
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
