/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

// Приклад використання:
const pair1: KeyValuePair<string, number> = {
  key: 'age',
  value: 30
};

const pair2: KeyValuePair<number, boolean> = {
  key: 1,
  value: true
};

console.log(pair1); // { key: 'age', value: 30 }
console.log(pair2); // { key: 1, value: true }
