import { ToDoElement } from '../types';

const BASE_URL = 'https://944ba3c5-94c3-4369-a9e6-a509d65912e2.mock.pstmn.io';

const X_Api_Key =
  'PMAK-5ef63db179d23c004de50751-10300736bc550d2a891dc4355aab8d7a5c';

export const getToDos = (): Promise<ToDoElement[]> => {
  const request = new Request(`${BASE_URL}/get`, {
    method: 'GET',
    headers: {
      'X-Api-Key': X_Api_Key,
    },
  });

  return fetch(request).then((response) => response.json());
  //.then((results) => console.log(xresults))
  //.catch((err) => console.error(err));
  return Promise.resolve([]);
};

export const updateTodo = (todo: ToDoElement): void => {};
