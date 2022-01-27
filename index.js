const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const path = require('path');
const render = require('./src/draft');

const result = path.resolve(__dirname, 'result');
const resultPath = path.join(result, 'index.html');

// Add empty array for team members
const teamMembers = [];
// Add empty array for ids

// inqurer prompt
// Start questions function, and inside add another function to build the manager
startQuestion => {
  buildManager => {
inquirer
.prompt([
    {
        type: 'confirm',
        name: 'title',
        message: 'Do you want to create a Team Profile? If yes please provide the follwing information.',
    },
    {
        type: 'input',
        name: 'mgrName',
        message: 'Full name:',
    },
    {
        type: 'input',
        name: 'mgrId',
        message: 'Employee ID:',
    },
    {
        type: 'input',
        name: 'mgrEmail',
        message: 'Email:',
    },
    {
        type: 'input',
        name: 'mgrOffice',
        message: 'Office Number:',
    },
    {
        type: 'list',
        name: 'role',
        message: 'Do you want to add another member?',
        choices: ['Engineer', 'Intern', 'Finish']
    }
  ])}
  // Add function to build team
  // First question should be the role
// Function for the team, which role do you want to add?
// Depending on the selection make a switch to run the inquirer for engineer or intern.

// Depending on the role the function should be run.
// If the user select finish, run the function to generate the file
  // Generate html file
  .then((data) => {
    fs.writeFile(`./dist/Index.html`, generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log('Your HTML file was created successfully!')
    );
  });
   
  const makeTeam = () => {
    if (!fs.existsSync(result)) {
      fs.mkdirSync(result)
    }
    fs.writeFileSync(resultPath, render(teamMembers), 'utf-8')
  }
  buildManager();
}
startQuestion();
