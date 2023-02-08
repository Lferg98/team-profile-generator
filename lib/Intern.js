const Employee = require("./Employee");
// created a class called Intern that extends the Employee class and passes in the name, id, email and school parameters.
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
// created methods that returns the this.school and this.role values
    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;