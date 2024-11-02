/*
  У вас є тип Form, який містить інформацію про форму, включаючи поле errors. 
  Ви хочете створити новий тип Params, який включає всі поля з Form, крім errors.
*/
type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Виключення поля 'errors' з типу Form
type Params = Omit<Form, 'errors'>;

// Приклад використання:
const formParams: Params = {
  email: 'user@mail.com',
  firstName: 'John',
  lastName: 'Doe',
  phone: '1234567890',
};

