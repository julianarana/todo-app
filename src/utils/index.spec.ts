import { isDue, sortElements } from '.';
import { testResultsProcessor } from '../../jest.config';
import { ToDoElement } from '../types';
import { list1 } from '../__mocks__/todoList';

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

    describe('overdue items should be on top', () => {
      let sorted1: ToDoElement[];
      let dueDate1: ToDoElement[];
      let notDueDate1: ToDoElement[];
      beforeEach(() => {
        sorted1 = sortElements(list1);
        dueDate1 = list1.filter((element) =>
          isDue(element.dueDate ? new Date(element.dueDate) : null),
        );

        notDueDate1 = list1.filter(
          (element) =>
            !isDue(element.dueDate ? new Date(element.dueDate) : null),
        );
      });

      it('should be on top', () => {
        dueDate1.every((elem) => {
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
    });

    describe('completed items should be on bottom', () => {
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
    /*
    it('should be sorted by due date, not due date and completion', () => {
      const sorted = sortElements(list1);
      const dueDate = sorted.filter(
        (element) =>
          !element.isComplete &&
          isDue(element.dueDate ? new Date(element.dueDate) : null),
      );

      const notDueDate = sorted.filter(
        (element) =>
          !element.isComplete &&
          !isDue(element.dueDate ? new Date(element.dueDate) : null),
      );

      const completed = sorted.filter((element) => element.isComplete);

      dueDate.every((elem) => {
        const dueIndex = sorted.findIndex(
          (findElem) => findElem.id === elem.id,
        );
        notDueDate.forEach((notDueElem) => {
          const notDueIndex = sorted.findIndex(
            (findElem) => findElem.id === notDueElem.id,
          );
          expect(notDueIndex).toBeGreaterThan(dueIndex);
        });
        /*completed.forEach((elem) => {
          const completedIndex = sorted.findIndex(
            (findElem) => findElem.id === elem.id,
          );
          expect(completedIndex).toBeGreaterThan(dueIndex);
        });
      });
      notDueDate.every((elem) => {
        const notDeIndex = sorted.findIndex(
          (findElem) => findElem.id === elem.id,
        );

        completed.forEach((completedElem) => {
          const completedIndex = sorted.findIndex(
            (findElem) => findElem.id === elem.id,
          );
          expect(completedIndex).toBeGreaterThan(notDeIndex);
        });
      });

      /*notDueDate.every((elem) => {
        completed.forEach((elem) => {
          const completedIndex = sorted.findIndex(
            (findElem) => findElem.id === elem.id,
          );
          expect(completedIndex).toBeGreaterThan(dueIndex);
        });
      });*/
    /*sorted1.every((element, index) => element.dueDate);
      expect(sorted1).toHaveLength(list1.length);*/
  });
});
