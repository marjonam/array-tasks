//SINIF MASHQLARI
/*
function isOdd(n) {
  if (n % 2 != 0) {
    return true;
  }
  return false;
}

console.log(isOdd(10));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let counter = 0;

for (let i = 0; i < numbers.length; i++) {
  if (isOdd(numbers[i])) counter++;
}
console.log(counter);
*/
//masala-1  n natural soni berilgan. Dastlabki n ta toq sondan tashkil topgan massiv qaytaruvchi getInitialOdds(n) nomli funksiya tuzing.
/*
function getInitialOdds(n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    answer.length == 0 ? answer.push(1) : answer.push(answer.at(-1) + 2);
  }
  return answer;
}
console.log(getInitialOdds(5));
*/

//masala-2  arr nomli massiv berilgan. Massiv elementlari orasidan juftlarini indekslari kamayish tartibidan hosil bo’lgan massivni qaytaruvchi getEvenReverse(arr) programma tuzilsin.
/*
let arr = [4, 5, 7, 8, 6, 9];

function getEvenReverse(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) answer.push(arr[i]);
  }
  return answer.reverse();
}

console.log(getEvenReverse(arr));
*/

//masala-3  n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin.
/*
const array = [4, 5, 7, 8, 6, 9];
let text = "";

for (let i = 0; i < array.length - 1; i++) {
  console.log(array[i], array[array.length - (i + 1)]);
}

*/

//masala-4  N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlari yig'indisini chiqaruvchi rangeSum(arr, K, L) programma tuzilsin.

/*
let arr = [1, 6, 9, 5, 8, 10, 15];

function rangeSum(arr, K, L) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i >= K && i <= L) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(rangeSum(arr, 2, 5));
*/

//masala-5  n ta elementdan tashkil topgan massiv berilgan. Massivda qatnashgan sonlardan faqat bittadan chiqaruvchi getSingleArr(arr) tuzilsin.

/*
let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];

function getSingleArr(arr) {
  let answer = [];

  arr.forEach((element) => {
    if (!answer.includes(element)) {
      answer.push(element);
    }
  });
  return answer;
}
console.log(getSingleArr(arr));
*/

//masala-6  n ta elementdan iborat massiv berilgan. Massivning eng kichik va eng katta elementlari topilsin va o'rni almashtirilsin.
/*
let arr = [7, 4, 9, 2, 3, 1, 5];
let min;
let max = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];

  if (min == undefined || min > arr[i]) min = arr[i];
}

console.log(max);
console.log(min);
*/

//masala-7  n ta elementdan tashkil topgan berilgan. Massiv elementlarini 1 ta o'rin ongga siklik siljituvchi programma tuzilsin. a[0] element qiymati a[1] ga o'tadi, a[1] esa a[2] ga, ..., a[n – 1] qiymati a[0] ga o'tadi.
/*
let arr = [1, 5, 8, 9, 10];
let newArr = [];

function moveArr(arr) {
  for (i = 0; i < arr.length; i++) {
    if (i == arr.length - 1) {
      newArr.push(arr[0]);
    } else {
      let n = arr[i + 1];
      newArr.push(n);
    }
  }
  return newArr;
}
console.log(moveArr(arr));
*/

//uy ishi

//masala-1 . n natural soni berilgan. 2 sonining dastlabki n ta darajasidan tashkil topgan massivni qaytaruvchi getLevel2(n) nomli funksiya tuzing.

// let input = 5;

// function getLevel2(n) {
//   let output = [];
//   for (let i = 1; i <= n; i++) {
//     output.push(2 ** i);
//   }
//   return output;
// }
// console.log(getLevel2(input));

//masala-2  n natural soni va A, B butun sonlari berilgan (n > 2). a[0] = A; a[1] = B; boshqa elementlari o'zidan oldingi barcha elementlari yig'indisiga teng bo'lgan massivni hosil qiling va elementlarini chiqaring

//masala-3  n ta elementdan tashkil topgan massiv berilgan. Uning elementlarini teskari tartibda chiqaruvchi programma tuzilsin.
// let arr = [1, 2, 3, 4];
// console.log(arr.reverse());

//masala-4  n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan toqlarini indekslari o'sish tartibida chiqaruvchi va ularning sonini chiqaruvchi programma tuzilsin.

//let numbers = [4, 5, 7, 8, 6, 9];
//let newNumbers = [];

//for (let i = 0; i < numbers.length; i++) {
//  if (numbers[i] % 2 !== 0) {
//    newNumbers.push(numbers[i]);
//  }
//}

//console.log(
//  ` toqlar soni  ${newNumbers.length} ta, toq sonlar: ${newNumbers.join(" ")}`
//);

//masala-5 n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juftlarini indekslari o'sish tartibida chiqaruvchi, keyin massiv elementlari orasidan toqlarini indekslari kamayish tartibida chiqaruvchi programma tuzilsin.

// let arr = [4, 5, 7, 8, 6, 9];

//let arr = [4, 5, 7, 8, 6, 9];
//let evenNum = [];
//let oddNum = [];
//
//for (let i = 0; i < arr.length; i++) {
//  if (arr[i] % 2 === 0) {
//    evenNum.push(i);
//  }
//}
//for (let i = 0; i < arr.length; i++) {
//  if (arr[i] % 2 !== 0) {
//    oddNum.push(i);
//  }
//}

//console.log("juft soning osish tartbi:", evenNum.join(" "));
//console.log("toq soning kamayish tartibi:", oddNum.reverse().join(" "));

//masala-6  n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[0], A[2], A[4], ... Shart operatori ishlatilmasin.

// let arr = ["p", "y", "t", "h", "o", "n"];
// for (let i = 0; i < arr.length; i += 2) {
//   console.log(arr[i]);
// }

//masala-7 n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[n-1], A[n-3], ... A[1]. Shart operatori ishlatilmasin.

// let arr = ["p", "y", "t", "h", "o", "n"];
// for (let i = 0; i < arr.length; i += 2) {
//   console.log(arr[arr.length - 1 - i]);
// }

//masala-8  n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juft indekslilarini keyin toq indekslilarini chiqaruvchi programma tuzilsin.A[0], A[2], A[4], ... A[1], A[3], A[5],.... Shart operatori ishlatilmasin.

// let arr = [0, 1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i += 2) {
//   console.log(`juft indexslar: ${arr[i]}`);
// }
// for (let i = 1; i < arr.length; i += 2) {
//   console.log(`toq indexslar: ${arr[i]}`);
// }

//masala-9  n ta elementdan tashkil topgan massiv berilgan (n juft son). Dastlab massiv elementlari orasidan toq indekslilarini o'shish tartibida keyin juft indekslilarini kamayish tartibida chiqaruvchi programma tuzilsin. A[1], A[3], A[5],.. A[6], A[4], A[2], A[0]. Shart operatori ishlatilmasin.

//masala-10 n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin. A[0], A[1], A[n-1], A[n-2], A[2], A[3], A[n-3], A[n-4], ..

//

//masala-11 N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlaridan tashqari elementlari yig'indisini qaytaruvchi rangeOutSum(arr) nomli funksiya tuzilsin.

// let inputArray = [5, 2, 3, 4, 5, 6, 7, 8];
// function sumCounter (arr, K, L) {
//   arr.splice(K, L - K);
//   return arr.reduce((acc, current) => acc + current, 0);
// };
// console.log(sumCounter(inputArray, 3, 6));

//masala-12  Massivga kiritilgan qiymatlardan truthy va falsy elementlaridan iborat alohida 2 ta massiv hosil qiling.

// const input = [10, false, "", "Abdulaziz", null, true];
// let thruty = input.filter((arr) => Boolean(arr) == true);
// let falcy = input.filter((arr) => Boolean(arr) != true);
// console.log(thruty);
// console.log(falcy);

//masala-13  n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv juft indeksli elementlari orasidan kichigini aniqlovchi getOddMin(arr) nomli funksiya tuzilsin.

// let inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
// const getOddMin = (arr) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i += 2) {
//     newArr.push(arr[i]);
//   }
//   return Math.min(...newArr);
// };
// console.log(getOddMin(inputArray));

//masala-14  n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv toq indeksli elementlari orasidan kattasini aniqlovchi getEvenMax(arr) tuzilsin.

// let inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
// const getOddMin = (arr) => {
//   let newArr = [];
//   for (let i = 1; i < arr.length; i += 2) {
//     newArr.push(arr[i]);
//   }
//   return Math.max(...newArr);
// };
// console.log(getOddMin(inputArray));

//masala-15  n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan oxirgi lokal maksimum elementi indeksini chiqaruvchi programma tuzilsin. Lokal maksimum - o'ng va chap qo'shinisidan katta bo'lgan element.

//masala-16 Array16. n ta elementdan tashkil topgan massiv va R butun soni berilgan. Massiv elementlari orasidan R soniga eng yaqin sonni topuvchi programma tuzilsin

//let numbers = [5, 11, 15, 19, 2, 30];
//let R = 4;

//17-masala  n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan yig'indisi eng katta bo'ladigan 2 ta qo'shni elementni chiqaruvchi programma tuzilsin.
/*
let numbers = [1, 2, 3, 4, 5, 6, 7];
let max = numbers[0] + numbers[1];
let yegindi = [numbers[0], numbers[1]];

for (let i = 1; i < numbers.length - 1; i++) {
  let summa = numbers[i] + numbers[i + 1];
  
  if (summa > max) {
    max = summa;
    yegindi = [numbers[i], numbers[i + 1]];
  }
}

console.log(yegindi);
*/
