//TODO: ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

//TODO: Some and Every Checks
//TODO: Array.prototype.some()
//TODO: is at least one person 19 or older?
const date = new Date();

const boolNineteen = people.some(person => {
  return date.getFullYear() - person.year >= 19 ? true : false;
});

console.log('is one person at least 19?', boolNineteen);

//TODO: Array.prototype.every()
//TODO: is everyone 19 or older?

const allAdults = people.every(person =>
  date.getFullYear() - person.year >= 19 ? true : false
);

console.log(`Is everyone 19 or older?`, allAdults);

//TODO: Array.prototype.find()
//TODO: Find is like filter, but instead returns just the one you are looking for
//TODO: find the comment with the ID of 823423

const commentFound = comments.find(comment => comment.id === 823423);

console.log('commentFound', commentFound);

//TODO: Array.prototype.findIndex()
//TODO: Find the comment with this ID
//TODO: delete the comment with the ID of 823423

const findIndex = comments.findIndex(comment => comment.id === 823423);

console.log(`Index of comment.id=823423 ${findIndex}`);

const filteredComments = comments.filter((comment, index) => {
  return index !== findIndex ? true : false;
});

console.table(filteredComments);
