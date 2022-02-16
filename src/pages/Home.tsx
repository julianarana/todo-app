import React, { ReactElement } from 'react';
import { ToDoList } from '../components/ToDo';
import { ToDoElement } from '../types';

const Home = (): ReactElement => {
  const list: ToDoElement[] = [
    {
      id: '1',
      description: 'Hola mundo',
      isComplete: true,
      dueData: '2020-03-10T17:50:44.673Z',
    },
    {
      id: '2',
      description: 'Hola mundo 2',
      isComplete: false,
      dueData: '2020-03-10T17:50:44.673Z',
    },
  ];
  return (
    <div>
      <ToDoList list={list} />
    </div>
  );
};

export default Home;
