class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.title = "Employee";
        this.email = email;
    };
    getName() {
        return this.name;
    };
    getId() {
        return this.id;

    };
    getEmail() {
        return this.email;

    };
    getRole() {
        return this.title;

    };
}
module.exports = Employee;
const Employee = require("./employee")

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
        this.title = "Engineer"
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return this.title;
    }
}

module.exports = Engineer
const Employee = require("./employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
        this.title = "Intern";
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.title;
    }
}

module.exports = Intern
const Employee = require("./employee")


class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
        this.title = "Manager"
    }

    getRole() {
        return this.title;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

}

module.exports = Manager