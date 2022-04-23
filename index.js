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
    message: "What is the employee's email address?"
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

// inquirer prompt for adding a new engineer
function addingEngineer() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'engineername',
            message: "What is the engineer's name?"
        },
        {
            type: 'input',
            name: 'engineerid',
            message: "What is the engineer's id?"
        },
        {
            type: 'input',
            name: 'engineeremail',
            message: "What is the engineer's email address?"
        },
        {
            type: 'input',
            name: 'engineergithub',
            message: "What is the engineer's GitHub username?"
        }
    ])
    .then(answers => {
        const newEngineer = new Engineer(
            answers.engineername, answers.engineerid, answers.engineeremail, answers.engineergithub
        )
        console.log('Engineer added')
    })
};

// inquirer prompt for adding a new intern
function addingIntern() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'internname',
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: 'internid',
            message: "What is the intern's id?"
        },
        {
            type: 'input',
            name: 'internemail',
            message: "What is the intern's email address?"
        },
        {
            type: 'input',
            name: 'internschool',
            message: "What school does the intern attend?"
        }
    ])
    .then(answers => {
        const newIntern = new Intern(
            answers.internname, answers.internid, answers.internemail, answers.internschool
        )
        console.log('Intern added')
    })
};

newTeam();