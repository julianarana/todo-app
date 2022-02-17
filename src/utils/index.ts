import { ToDoElement } from '../types';

export const isDue = (date: Date | null) => {
  if (date) {
    return date.getTime() < (new Date()).getTime();
  }
  return false;
};

const getDateDifference = (date1: Date | null, date2: Date | null): number => {
  if (date1) {
    if (date2) {
      return date1.getTime() - date2.getTime();
    }
    return -1;
  }
  if (date2) {
    return 1;
  }
  return 0;
};

export const sortElements = (list: ToDoElement[]): ToDoElement[] => {
  return list.sort((a, b) => {
    const aDate = a.dueDate ? new Date(a.dueDate) : null;
    const bDate = b.dueDate ? new Date(b.dueDate) : null;

    const aIsDue = isDue(aDate);
    const bIsDue = isDue(bDate);

    // Compare if any of the elements is complete
    if (a.isComplete) {
      if (b.isComplete) {
        return getDateDifference(aDate, bDate);
      }
      return 1;
    }

    if (b.isComplete) {
      return -1;
    }

    // If none has a complete, let's check which are due
    if (aIsDue) {
      if (bIsDue) {
        return getDateDifference(aDate, bDate);
      }
      return -1;
    }

    if (bIsDue) {
      return 1;
    }

    // If none ar due just sort by the difference
    return getDateDifference(aDate, bDate);
  });
};

export const formatDate = (date: Date): string => {
  return (
    (date.getMonth() > 8 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)) +
    '/' +
    (date.getDate() > 9 ? date.getDate() : '0' + date.getDate()) +
    '/' +
    date.getFullYear()
  );
};
