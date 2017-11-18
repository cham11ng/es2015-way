class Person {
  constructor(firstName, surName) {
    this.firstName = firstName;
    this.surName = surName;
    this.emails = [];
  }

  static register(...args) {
    return new Person(...args);
  }

  get fullName() {
    return `${this.firstName} ${this.surName}`;
  }

  set email(email) {
    this.emails.push(email);
  }

  get allEmails() {
    return this.emails.join(', ');
  }
}

let person = Person.register('Sagar', 'Chamling');

person.email = 'sagar@unknown.com';
person.email = 'sgr.raee@gmail.com';
console.dir(person);
console.log(person.fullName);
console.log(person.allEmails);