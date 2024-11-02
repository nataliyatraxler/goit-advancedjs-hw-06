/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function isWeekend(day: Weekday): boolean {
  return day === Weekday.Saturday || day === Weekday.Sunday;
}

// Приклади використання
console.log(isWeekend(Weekday.Monday));   // false
console.log(isWeekend(Weekday.Saturday)); // true
console.log(isWeekend(Weekday.Sunday));   // true
