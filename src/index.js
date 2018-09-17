import Person from './js/Person.js';
import TaskCollection from './js/TaskCollection.js';

new TaskCollection([
  'Go to the store',
  'Finish screencast',
  'Buy a ticket',
  'Buy popcorn',
  'Watch movie',
  'Meet friend'
]).dump();

const person = Person.register('Sagar', 'Chamling');
person.email = 'sagar@unknown.com';
person.email = 'sgr.raee@gmail.com';
console.dir(person);
console.group('Person Info');
console.log(person.fullName);
console.log(person.allEmails);
console.groupEnd
