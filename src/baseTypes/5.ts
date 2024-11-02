/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

let variable: string | number;
variable = 'Hello'; // Валідне значення
variable = 42;      // Валідне значення


let Status: 'enable' | 'disable';
Status = 'enable';  // Валідне значення
Status = 'disable'; // Валідне значення
// status = 'other'; // Помилка: Type '"other"' is not assignable to type '"enable" | "disable"'
