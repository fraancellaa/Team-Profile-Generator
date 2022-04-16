const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const fs = require('fs');

// create array of questions for user input
function questionsManager() {
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

questionsManager();