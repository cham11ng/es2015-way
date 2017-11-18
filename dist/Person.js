'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  function Person(firstName, surName) {
    _classCallCheck(this, Person);

    this.firstName = firstName;
    this.surName = surName;
    this.emails = [];
  }

  _createClass(Person, [{
    key: 'fullName',
    get: function get() {
      return this.firstName + ' ' + this.surName;
    }
  }, {
    key: 'email',
    set: function set(email) {
      this.emails.push(email);
    }
  }, {
    key: 'allEmails',
    get: function get() {
      return this.emails.join(', ');
    }
  }], [{
    key: 'register',
    value: function register() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return new (Function.prototype.bind.apply(Person, [null].concat(args)))();
    }
  }]);

  return Person;
}();

var person = Person.register('Sagar', 'Chamling');

person.email = 'sagar@unknown.com';
person.email = 'sgr.raee@gmail.com';
console.dir(person);
console.log(person.fullName);
console.log(person.allEmails);