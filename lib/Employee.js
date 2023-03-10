// create the Employee class and give it a constructor that takes in name, id, and email
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

// created  methods that returns the this.name, this.id, this.email, and this.role values
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }

}

module.exports = Employee;