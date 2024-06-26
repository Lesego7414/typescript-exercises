var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var Person2 = /** @class */ (function () {
    function Person2(name, age, ssn) {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = ssn;
    }
    Person2.prototype.getName = function () {
        return this.name;
    };
    Person2.prototype.getAge = function () {
        return this.age;
    };
    return Person2;
}());
