// Dependencies: inquirer, fs
const inquirer = require('inquirer');
const fs = require('fs');
// Classes: Employee, Manager, Engineer, Intern
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// This array will hold the user-input responses
const team = [];
// This function will prompt the user for the manager's information as well as validate the input's
const managerPrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the team manager?',
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the team manager!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID of the team manager?',
            validate: (idInput) => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the employee ID of the team manager!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address of the team manager?',
            validate: (emailInput) => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email address of the team manager!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number of the team manager?',
            validate: (officeNumberInput) => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter the office number of the team manager!');
                    return false;
                }
            }
        },
    ])
    // This function will push the manager's information into the team array
        .then((response) => {
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
            team.push(manager);
            teamPrompt();
        });
};

// This function will prompt the user for the Engineer's information as well as validate the input's
const engineerPrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer?',
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the engineer!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID of the engineer?',
            validate: (idInput) => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the employee ID of the engineer!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address of the engineer?',
            validate: (emailInput) => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email address of the engineer!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the GitHub username of the engineer?',
            validate: (githubInput) => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter the GitHub username of the engineer!');
                    return false;
                }
            }
        },
    ])
//  this function will push the Engineer data to the team array
        .then((response) => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            team.push(engineer);
            teamPrompt();
        });
};
// this function will prompt the user for the Intern's information as well as validate the input's
const internPrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern?',
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the intern!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID of the intern?',
            validate: (idInput) => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the employee ID of the intern!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address of the intern?',
            validate: (emailInput) => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email address of the intern!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the school of the intern?',
            validate: (schoolInput) => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter the school of the intern!');
                    return false;
                }
            }
        },
    ]);

// this function will push the Intern data to the team array
then((response) => {
    const intern = new Intern(response.name, response.id, response.email, response.school);
    team.push(intern);
    teamPrompt();
});
};

// this function will prompt the user to add another team member or finish the team
const employeePrompt = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employee',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'I do not want to add any more team members']
        }       
    ])
    // this function will call the engineerPrompt or internPrompt functions based on the user's input
    .then((response) => {
        switch (response.employee) {
            case 'Engineer':
                engineerPrompt();
                break;
            case 'Intern':
                internPrompt();
                break;
            default:
                console.log('Your team has been created!');
                break;
        }
    });
};
    

    

