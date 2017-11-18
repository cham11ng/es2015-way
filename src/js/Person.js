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

export default Person;