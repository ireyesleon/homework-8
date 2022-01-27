const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const path = require('path');
const render = require('./src/draft.js');

const result = path.resolve(__dirname, 'dist');
const resultPath = path.join(result, 'index.html');


const teamMembers = [];


// inqurer prompt
// Start questions function, and inside add another function to build the manager
const buildManager = () => {
return inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Manager name:',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Employee ID:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email:',
    },
    {
        type: 'input',
        name: 'office',
        message: 'Office Number:',
    }
  ])
  .then(data => {
    const manager = new Manager(data.name, data.id, data.email, data.office);
    teamMembers.push(manager);
    startQuestions();
  })
};

const startQuestions = () => {
  return inquirer
  .prompt([
    {
      type: 'list',
      name: 'role',
      message: 'Do you want to add another member?',
      choices: ['Engineer', 'Intern', 'Finish building my team']
  }])
  .then(employeeSelection => {
    switch (employeeSelection.role) {
      case "Engineer": engineerQuestions();
      break;
      case "Intern": internQuestions();
      break;
      default:
        makeTeam();
    }
  });
};

const engineerQuestions = () =>{
  return inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Full name:',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Employee ID:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github Username:',
    }
  ])
  .then(data => {
    const engineer = new Engineer(data.name, data.id, data.email, data.github);
    teamMembers.push(engineer);
    startQuestions();
  })
};

const internQuestions = () => {
  return inquirer
  .prompt([
      {
          type: 'input',
          name: 'name',
          message: 'Full name:',
      },
      {
          type: 'input',
          name: 'id',
          message: 'Employee ID:',
      },
      {
          type: 'input',
          name: 'email',
          message: 'Email:',
      },
      {
          type: 'input',
          name: 'school',
          message: 'School:',
      }
    ])
    .then(data => {
      const intern = new Intern(data.name, data.id, data.email, data.school);
      teamMembers.push(intern);
      startQuestions();
    })
  };

 const makeTeam = () => {
    if (!fs.existsSync(result)) {
      fs.mkdirSync(result)
    }
    fs.writeFileSync(resultPath, render(teamMembers), 'utf-8');
  }

buildManager();
