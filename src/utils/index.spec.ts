import { isDue, sortElements } from '.';
import { ToDoElement } from '../types';
import {
  expectedSortedList1,
  expectedSortedList2,
  list1,
  list2,
} from '../__mocks__/todoList';

describe('Utils', () => {
  describe('isDue', () => {
    const today = new Date();
    it('should be false if the date is null', () => {
      const result = isDue(null);
      expect(result).toBeFalsy();
    });

    it('should be false if date is tomorrow', () => {
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const result = isDue(tomorrow);
      expect(result).toBeFalsy();
    });

    it('should be true if date is yesterday', () => {
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      const result = isDue(yesterday);
      expect(result).toBeTruthy();
    });

    it('should be true if date is two minutes ago', () => {
      const now = new Date();
      const date = new Date(now.getTime() - 2 * 60000);
      const result = isDue(date);
      expect(result).toBeTruthy();
    });

    it('should be false if date is two minutes ahead from now', () => {
      const now = new Date();
      const date = new Date(now.getTime() + 2 * 60000);
      const result = isDue(date);
      expect(result).toBeFalsy();
    });

    it('should be false if date is current date', () => {
      const now = new Date();
      const result = isDue(now);
      expect(result).toBeFalsy();
    });
  });

  describe('sortElements', () => {
    it('should return empty array if empty array given', () => {
      const result = sortElements([]);
      expect(result).toHaveLength(0);
    });

    describe('items should be sorted by due and completion - set1', () => {
      let sorted1: ToDoElement[];
      let dueDate1: ToDoElement[];
      let notDueDate1: ToDoElement[];
      let completed1: ToDoElement[];
      let notCompleted1: ToDoElement[];
      beforeEach(() => {
        sorted1 = sortElements(list1);
        dueDate1 = list1.filter((element) =>
          !element.isComplete && isDue(element.dueDate ? new Date(element.dueDate) : null),
        );

        notDueDate1 = list1.filter(
          (element) =>
            !isDue(element.dueDate ? new Date(element.dueDate) : null),
        );
        completed1 = list1.filter((element) => element.isComplete);
        notCompleted1 = list1.filter((element) => !element.isComplete);
      });

      it('overdue items should be on top', () => {
        dueDate1.forEach((elem) => {
          const dueIndex = sorted1.findIndex(
            (findElem) => findElem.id === elem.id,
          );
          notDueDate1.forEach((notDueElem) => {
            const notDueIndex = sorted1.findIndex(
              (findElem) => findElem.id === notDueElem.id,
            );
            expect(notDueIndex).toBeGreaterThan(dueIndex);
          });
        });
      });

      it('completed items should be at the bottom', () => {
        completed1.forEach((elem) => {
          const completedIndex = sorted1.findIndex(
            (findElem) => findElem.id === elem.id,
          );
          notCompleted1.forEach((notCompletedElem) => {
            const notCompletedIndex = sorted1.findIndex(
              (findElem) => findElem.id === notCompletedElem.id,
            );
            expect(notCompletedIndex).toBeLessThan(completedIndex);
          });
        });
      });
    });

    describe('items should be sorted by due and completion - set2', () => {
      let sorted2: ToDoElement[];
      let dueDate2: ToDoElement[];
      let notDueDate2: ToDoElement[];
      let completed2: ToDoElement[];
      let notCompleted2: ToDoElement[];
      beforeEach(() => {
        sorted2 = sortElements(list2);
        dueDate2 = list2.filter((element) =>
          !element.isComplete && isDue(element.dueDate ? new Date(element.dueDate) : null),
        );

        notDueDate2 = list2.filter(
          (element) =>
            !isDue(element.dueDate ? new Date(element.dueDate) : null),
        );
        completed2 = list2.filter((element) => element.isComplete);
        notCompleted2 = list2.filter((element) => !element.isComplete);
      });

      it('overdue items should be on top', () => {
        dueDate2.forEach((elem) => {
          const dueIndex = sorted2.findIndex(
            (findElem) => findElem.id === elem.id,
          );
          notDueDate2.forEach((notDueElem) => {
            const notDueIndex = sorted2.findIndex(
              (findElem) => findElem.id === notDueElem.id,
            );
            expect(notDueIndex).toBeGreaterThan(dueIndex);
          });
        });
      });

      it('completed items should be at the bottom', () => {
        completed2.forEach((elem) => {
          const completedIndex = sorted2.findIndex(
            (findElem) => findElem.id === elem.id,
          );
          notCompleted2.forEach((notCompletedElem) => {
            const notCompletedIndex = sorted2.findIndex(
              (findElem) => findElem.id === notCompletedElem.id,
            );
            expect(notCompletedIndex).toBeLessThan(completedIndex);
          });
        });
      });
    });

    describe('completed items should be at the bottom', () => {
      let sorted1: ToDoElement[];
      let completed1: ToDoElement[];
      let notCompleted1: ToDoElement[];
      beforeEach(() => {
        sorted1 = sortElements(list1);
        completed1 = list1.filter((element) => element.isComplete);
        notCompleted1 = list1.filter((element) => !element.isComplete);
      });

      it('should be on bottom', () => {
        completed1.every((elem) => {
          const completedIndex = sorted1.findIndex(
            (findElem) => findElem.id === elem.id,
          );
          notCompleted1.forEach((notCompletedElem) => {
            const notCompletedIndex = sorted1.findIndex(
              (findElem) => findElem.id === notCompletedElem.id,
            );
            expect(notCompletedIndex).toBeLessThan(completedIndex);
          });
        });
      });
    });

    describe('items should be on the right order', () => {
      it('should order right - test set 1', () => {
        const sorted = sortElements(list1);
        sorted.forEach((element, index) =>
          expect(element.id).toEqual(expectedSortedList1[index].id),
        );
      });

      it('should order right - test set 2', () => {
        const sorted = sortElements(list2);
        sorted.forEach((element, index) =>
          expect(element.id).toEqual(expectedSortedList2[index].id),
        );
      });
    });
  });
});
