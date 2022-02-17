import { ToDoElement } from '../types';

export const list1: ToDoElement[] = [
  {
    id: '1',
    description: 'File 2020 Taxes',
    isComplete: true,
    dueDate: '2020-03-10T17:50:44.673Z',
  },
  {
    id: '2',
    description: 'Fold laundry',
    isComplete: true,
    dueDate: null,
  },
  {
    id: '3',
    description: 'Call Mom',
    isComplete: false,
    dueDate: '2020-06-26T19:00:00.000Z',
  },
  {
    id: '4',
    description: 'Walk the dog',
    isComplete: false,
    dueDate: null,
  },
  {
    id: '5',
    description: 'Feed the cat',
    isComplete: false,
    dueDate: '2020-06-24T15:45:00.000Z',
  },
  {
    id: '6',
    description: 'Run LA marathon',
    isComplete: false,
    dueDate: '2021-03-21T13:30:00.000Z',
  },
];

export const expectedSortedList1: ToDoElement[] = [
  {
    id: '5',
    description: 'Feed the cat',
    isComplete: false,
    dueDate: '2020-06-24T15:45:00.000Z',
  },
  {
    id: '3',
    description: 'Call Mom',
    isComplete: false,
    dueDate: '2020-06-26T19:00:00.000Z',
  },
  {
    id: '6',
    description: 'Run LA marathon',
    isComplete: false,
    dueDate: '2021-03-21T13:30:00.000Z',
  },
  {
    id: '4',
    description: 'Walk the dog',
    isComplete: false,
    dueDate: null,
  },
  {
    id: '1',
    description: 'File 2020 Taxes',
    isComplete: true,
    dueDate: '2020-03-10T17:50:44.673Z',
  },
  {
    id: '2',
    description: 'Fold laundry',
    isComplete: true,
    dueDate: null,
  },
];

const now = new Date();
const tomorrow = new Date(now.getDate() + 1);
const yesterday = new Date(now.getDate() - 1);

export const list2: ToDoElement[] = [
  {
    id: '1',
    description: 'File 2020 Taxes',
    isComplete: true,
    dueDate: tomorrow.toISOString(),
  },
  {
    id: '2',
    description: 'Fold laundry',
    isComplete: true,
    dueDate: null,
  },
  {
    id: '3',
    description: 'Call Mom',
    isComplete: false,
    dueDate: yesterday.toISOString(),
  },
  {
    id: '4',
    description: 'Walk the dog',
    isComplete: false,
    dueDate: null,
  },
  {
    id: '5',
    description: 'Feed the cat',
    isComplete: false,
    dueDate: now.toISOString(),
  },
  {
    id: '6',
    description: 'Run LA marathon',
    isComplete: false,
    dueDate: '2021-03-21T13:30:00.000Z',
  },
  {
    id: '7',
    description: 'Drink some water',
    isComplete: true,
    dueDate: tomorrow.toISOString(),
  },
  {
    id: '8',
    description: 'Take a break',
    isComplete: true,
    dueDate: null,
  },
  {
    id: '9',
    description: 'Visit the museum',
    isComplete: false,
    dueDate: null,
  },
];

export const expectedSortedList2: ToDoElement[] = [
  {
    id: '3',
    description: 'Call Mom',
    isComplete: false,
    dueDate: yesterday.toISOString(),
  },
  {
    id: '6',
    description: 'Run LA marathon',
    isComplete: false,
    dueDate: '2021-03-21T13:30:00.000Z',
  },
  {
    id: '5',
    description: 'Feed the cat',
    isComplete: false,
    dueDate: now.toISOString(),
  },
  {
    id: '4',
    description: 'Walk the dog',
    isComplete: false,
    dueDate: null,
  },
  {
    id: '9',
    description: 'Visit the museum',
    isComplete: false,
    dueDate: null,
  },
  {
    id: '1',
    description: 'File 2020 Taxes',
    isComplete: true,
    dueDate: tomorrow.toISOString(),
  },
  {
    id: '7',
    description: 'Drink some water',
    isComplete: true,
    dueDate: tomorrow.toISOString(),
  },
  {
    id: '2',
    description: 'Fold laundry',
    isComplete: true,
    dueDate: null,
  },
  {
    id: '8',
    description: 'Take a break',
    isComplete: true,
    dueDate: null,
  },
];
