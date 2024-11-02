/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/

type Gender = "male" | "female";

let myGender: Gender;

myGender = "male";   // Валідне значення
// myGender = "other"; // Помилка: Type '"other"' is not assignable to type 'Gender'
