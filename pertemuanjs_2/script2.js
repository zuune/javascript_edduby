// Modul: Dasar - dasar pemrograman dengan Javascript

// 1. Pengkondisian (Conditional Statements)

// a. IF Statement
let num = 10;
if (num > 0) {
  console.log("Angka positif");
} else if (num < 0) {
  console.log("Angka negatif");
} else {
  console.log("Angka nol");
}

// b. Switch Statement
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Hari Senin");
    break;
  case "Tuesday":
    console.log("Hari Selasa");
    break;
  default:
    console.log("Hari lainnya");
}

// 2. Operator Perbandingan & Logika

// a. Operator Perbandingan
// - `==` : Equal to
// - `===` : Strict equal to (value and type)
// - `!=` : Not equal to
// - `!==` : Strict not equal to
// - `>` : Greater than
// - `<` : Less than
// - `>=` : Greater than or equal to
// - `<=` : Less than or equal to

let x = 5;
let y = "5";
if (x == y) {
  console.log("Nilai dan tipe sama");
} else {
  console.log("Nilai atau tipe berbeda");
}

// b. Operator Logika
// - `&&` : Logical AND
// - `||` : Logical OR
// - `!` : Logical NOT

let age = 25;
if (age >= 18 && age <= 30) {
  console.log("Dewasa muda");
}

// 3. Perulangan (Looping)

// Perulangan For
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Total: " + sum);

// Perulangan While
let i = 0;
while (i < 5) {
  console.log("Iterasi ke-" + i);
  i++;
}

// 4. Kasus Penggunaan

// a. Menghitung Nilai Rata-rata
let grades = [85, 90, 78, 92, 88];
let total = 0;

for (let i = 0; i < grades.length; i++) {
  total += grades[i];
}

let average = total / grades.length;
console.log('Rata-rata nilai: ' + average);

// b. Menentukan Bilangan Prima
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
}

console.log(isPrime(17)); // Output: true
console.log(isPrime(27)); // Output: false

// c. Mencari Faktorial
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  console.log(factorial(5)); // Output: 120

  // d. Validasi Input Angka
let userInput = prompt('Masukkan angka:');

if (!isNaN(userInput)) {
  console.log('Input valid: ' + userInput);
} else {
  console.log('Input tidak valid. Masukkan angka.');
}