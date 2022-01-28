const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const index = require('../index');

const teamBuild = team => {
   const managerHTML = manager => {
     return `
    <div class="card col-sm-12 col-md-6 col-lg-3">
            <div class="card-body">
              <h5 class="card-title">${manager.getName()}</h5>
              <h5 class="card-title bi bi-people-fill"> ${manager.getRole()}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${manager.getID()}</li>
              <li class="list-group-item">Email: <a href = "mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
              <li class="list-group-item">Office Number: ${manager.getOffice()}</li>
            </ul>
          </div>
          `
    }

   const engineerHTML = engineer => {
     return `
    <div class="card col-sm-12 col-md-6 col-lg-3">
            <div class="card-body">
              <h5 class="card-title">${engineer.getName()}</h5>
              <h5 class="card-title bi bi-laptop-fill"> ${engineer.getRole()}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${engineer.getID()}</li>
              <li class="list-group-item">Email: <a href = "mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
              <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
            </ul>
          </div>
          `
   }

   const internHTML = intern => {
     return `
    <div class="card col-sm-12 col-md-6 col-lg-3">
            <div class="card-body">
              <h5 class="card-title">${intern.getName()}</h5>
              <h5 class="card-title bi bi-book"> ${intern.getRole()}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${intern.getID()}</li>
              <li class="list-group-item">Email: <a href = "mailto: ${intern.getEmail()}">${intern.getEmail()}</a></li>
              <li class="list-group-item">School Name: ${intern.getSchool()}</li>
            </ul>
          </div>
          `
   }

   const html = [];
   html.push(team
    .filter(employee => employee.getRole() === "Manager")
   .map(manager => managerHTML(manager)));

   html.push(team
    .filter(employee => employee.getRole() === "Engineer")
   .map(engineer => engineerHTML(engineer))
   .join(''));

   html.push(team
    .filter(employee => employee.getRole() === "Intern")
   .map(intern => internHTML(intern))
   .join(''));
   return html.join('');
}

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Project</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
        <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
    <header>
    <p>My team profile</p>
    </header>
    <div class="container">
    <div class="row justify-content-center">
    ${teamBuild(team)}
    </div>
    </div>
    </body>
    </html>
    `
}