const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const fs = require('fs');

function newTeam() {
    inquirer
    .prompt([
    {
        type:'list',
        message: 'What type of employee will you be adding to your team?',
        name: "addingEmployeePrompt",
        choices: ["Manager", "Engineer", "Intern"]
    }
    ]).then(function(userInput) {
        switch(userInput.addingEmployeePrompt) {
            case "Manager": addingManager();
            break;
            case "Engineer": addingEngineer();
            break;
            case "Intern": addingIntern();
            break;

            default:
                htmlBuilder();
        }
    });
};

// create array of questions for adding manager
function addingManager() {
    inquirer
    .prompt([
        {
    type: 'input',
    name: 'name',
    message: "What is the employee's full name?" 
    },
    {
    type: 'input',
    name: 'id',
    message: "What is the employee's id?"
    },
    {
    type: 'input',
    name: 'email',
    message: "What is the employee's email?"
    }, 
    {
    type: 'input',
    name: 'officeNumber',
    message: "What is the employee's office Number?",
    }
])
.then(answers => {
    const newEmployee = new Employee(
        answers.name, answers.id, answers.email, answers.officeNumber
    )
    console.log('Employee added');
})
};

newTeam();