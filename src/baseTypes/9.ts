/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/

type CustomPage = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};
