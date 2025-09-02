const { 
  filterEvenNumbers, 
  filterOddNumbers,
  filterAdults,
  filterByUserType,
  doubleNumbers,
  squareNumbers,
  formatUserNames
} = require('../index');

describe('Array Methods Tests', () => {
  describe('Filter Functions', () => {
    test('filterEvenNumbers should return only even numbers', () => {
      const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const expected = [2, 4, 6, 8, 10];
      const result = filterEvenNumbers(input);
      expect(result).toEqual(expected);
    });

    test('filterOddNumbers should return only odd numbers', () => {
      const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const expected = [1, 3, 5, 7, 9];
      const result = filterOddNumbers(input);
      expect(result).toEqual(expected);
    });

    test('filterAdults should return users aged 18 and above', () => {
      const users = [
        { name: 'Alice', age: 17 },
        { name: 'Bob', age: 18 },
        { name: 'Charlie', age: 25 },
        { name: 'Diana', age: 16 }
      ];
      const expected = [
        { name: 'Bob', age: 18 },
        { name: 'Charlie', age: 25 }
      ];
      const result = filterAdults(users);
      expect(result).toEqual(expected);
    });

    test('filterByUserType should filter users by type', () => {
      const users = [
        { name: 'Admin1', type: 'admin' },
        { name: 'User1', type: 'user' },
        { name: 'Admin2', type: 'admin' },
        { name: 'Moderator', type: 'moderator' }
      ];
      
      const adminUsers = filterByUserType(users, 'admin');
      expect(adminUsers).toEqual([
        { name: 'Admin1', type: 'admin' },
        { name: 'Admin2', type: 'admin' }
      ]);

      const userUsers = filterByUserType(users, 'user');
      expect(userUsers).toEqual([{ name: 'User1', type: 'user' }]);
    });

    test('filter functions should not modify original arrays', () => {
      const original = [1, 2, 3, 4, 5];
      const copy = [...original];
      
      filterEvenNumbers(original);
      expect(original).toEqual(copy);
    });
  });

  describe('Map Functions', () => {
    test('doubleNumbers should double each number', () => {
      const input = [1, 2, 3, 4, 5];
      const expected = [2, 4, 6, 8, 10];
      const result = doubleNumbers(input);
      expect(result).toEqual(expected);
    });

    test('squareNumbers should square each number', () => {
      const input = [1, 2, 3, 4, 5];
      const expected = [1, 4, 9, 16, 25];
      const result = squareNumbers(input);
      expect(result).toEqual(expected);
    });

    test('formatUserNames should format names to uppercase', () => {
      const users = [
        { name: 'alice', age: 25 },
        { name: 'bob', age: 30 },
        { name: 'charlie', age: 35 }
      ];
      const expected = ['ALICE', 'BOB', 'CHARLIE'];
      const result = formatUserNames(users);
      expect(result).toEqual(expected);
    });

    test('map functions should not modify original arrays', () => {
      const original = [1, 2, 3];
      const copy = [...original];
      
      doubleNumbers(original);
      expect(original).toEqual(copy);
    });
  });

  describe('Combined Operations', () => {
    test('should filter adults and then format their names', () => {
      const users = [
        { name: 'alice', age: 17 },
        { name: 'bob', age: 18 },
        { name: 'charlie', age: 25 },
        { name: 'diana', age: 16 }
      ];
      
      // First filter adults, then format names
      const adults = filterAdults(users);
      const formattedNames = formatUserNames(adults);
      
      expect(formattedNames).toEqual(['BOB', 'CHARLIE']);
    });

    test('should filter even numbers and then square them', () => {
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      
      const evens = filterEvenNumbers(numbers);
      const squaredEvens = squareNumbers(evens);
      
      expect(squaredEvens).toEqual([4, 16, 36, 64, 100]);
    });
  });
});