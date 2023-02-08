const Employee = require("./Employee");
// created a class called Engineer that extends the Employee class and passes in the name, id, and email parameters.
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
// created methods that returns the this.github and this.role values
    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;