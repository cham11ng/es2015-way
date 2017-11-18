import TaskCollection from './TaskCollection.js';
import Person from './Person.js';

new TaskCollection([
  'Go to the store',
  'Finish screencast',
  'Buy a ticket'
]).dump();

let person = Person.register('Sagar', 'Chamling');
person.email = 'sagar@unknown.com';
person.email = 'sgr.raee@gmail.com';
console.dir(person);
console.log(person.fullName);
console.log(person.allEmails);