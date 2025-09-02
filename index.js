function filterEvenNumbers(numbers) {
  return numbers.filter(number => number % 2 === 0);
}

function filterOddNumbers(numbers) {
  return numbers.filter(number => number % 2 !== 0);
}

function filterAdults(users) {
  return users.filter(user => user.age >= 18);
}

function filterByUserType(users, type) {
  return users.filter(user => user.type === type);
}

function doubleNumbers(numbers) {
  return numbers.map(number => number * 2);
}

function squareNumbers(numbers) {
  return numbers.map(number => number * number);
}

function formatUserNames(users) {
  return users.map(user => user.name.toUpperCase());
}


module.exports = {
  filterEvenNumbers,
  filterOddNumbers,
  filterAdults,
  filterByUserType,
  doubleNumbers,
  squareNumbers,
  formatUserNames
};