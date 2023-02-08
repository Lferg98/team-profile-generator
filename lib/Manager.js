const Employee = require("./Employee");
// created a class called Manager that extends the Employee class and passes in the name, id, email and officeNumber parameters.
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
// created a method that returns the role value
        getRole() {
        return "Manager";
    }
}