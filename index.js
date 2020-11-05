const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/employee")
const Engineer = require("./lib/engineer")
const Manager = require("./lib/manager")
const Intern = require("./lib/intern")

let finalTeamArray = [];

function startingPrompt() {
    inquirer.prompt([
        {
            message: "What is your team manager's name?",
            name: "name"
        },
        {
            message: "What is your team manager's email address?",
            name: "email"
        },

        {
            type: "number",
            message: "What is your team manager's office number?",
            name: "officeNumber"
        },
    ])

        .then(function (data) {
            const name = data.name
            const id = 1
            const email = data.email
            const officeNumber = data.officeNumber
            const Raji = new Manager(name, id, email, officeNumber)
            console.log(Raji)

            addTeamMembers();
        });

}

function addTeamMembers() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: ["Yes, add an engineer", "Yes, add an intern", "No, my team is complete"],
            name: "addMemberData"
        }
    ])

        .then(function (data) {
            console.log(data.addMemberData)


            switch (data.addMemberData) {
                case "Yes, add an engineer":
                    addEngineer();
                    break;

                case "Yes, add an intern":
                    addIntern();
                    break;
                case "No, my team is complete":
                    compileTeam();
                    break;
            }
        });
}

function addEngineer() {
    inquirer.prompt([
        {
            message: "What is this engineer's name?",
            name: "name"
        },
        {
            message: "What is this engineer's email address?",
            name: "email"
        },
        {
            message: "What is this engineer's Github profile?",
            name: "github"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = 1
            const email = data.email
            const github = data.github
            const Breonna = new Engineer(name, id, email, github)
            console.log(Breonna)
            addTeamMembers()

        });

};

function addIntern() {
    inquirer.prompt([
        {
            message: "What is this intern's name?",
            name: "name"
        },
        {
            message: "What is this intern's email address?",
            name: "email"
        },
        {
            message: "What is this intern's school?",
            name: "school"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = 1
            const email = data.email
            const school = data.school
            const Derek = new Intern(name, id, email, school)
            console.log(Derek)
            addTeamMembers()

        });

};

function compileTeam() {
    console.log("complete!")
}
startingPrompt();

let html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <title>Document</title>
    <style>
        .row {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 20px;
            margin-bottom: 20px;
        }
        
        .card {
            padding: 20px;
            border-radius: 6px;
            background-color: white;
            color: powderblue;
            margin: 20px;
        }
        
        .text {
            padding: 20px;
            border-radius: 6px;
            background-color: white;
            color: black;
            margin: 20px;
        }
        
        .col {
            flex: 1;
            text-align: center;
        }
    </style>
</head>
<body>
    <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
        <span class="navbar-brand mb-0 h1"><h1>The Team</h1></span>
    </nav>
    <div class="row">
        <div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4>Raji</h4>
            </div>
            <div class="col card-header">
                <h4>Manager</h4>
            </div>
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID: 1</li>
                <li class="list-group-item">Email: Raji@gmail.com</li>
                <li class="list-group-item">Office Number: 1</li>
            </ul>
        </div>
        <div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4>Breonna</h4>
            </div>
            <div class="col card-header">
                <h4>Engineer</h4>
            </div>
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID: 2</li>
                <li class="list-group-item">Email: Breonna@gmail.com</li>
                <li class="list-group-item">GitHub: Partial</li>
            </ul>
        </div>
        <div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4>Derek</h4>
            </div>
            <div class="col card-header">
                <h4>Intern</h4>
            </div>
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID: 3</li>
                <li class="list-group-item">Email: Derek@gmail.com</li>
                <li class="list-group-item">School: UofI</li>
            </ul>
        </div>
        <div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4>Riri</h4>
            </div>
            <div class="col card-header">
                <h4>Intern</h4>
            </div>
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID: 4</li>
                <li class="list-group-item">Email: badgirlriri@gmail.com</li>
                <li class="list-group-item">School: UofI</li>
            </ul>
        </div>
    </div>
</body>
</html>`

for (let i in employeeArray) {
    employee = employeeArray[i];
    let cardInfo = {
        name: employee.getName(),
        role: employee.getRole(),
        id: employee.getId(),
        email: employee.getEmail()
    }

    if (employee.getRole() == "Engineer") {
        cardInfo.github = employee.getGithub();
    } else if (employee.getRole() == "Manager") {
        cardInfo.officeNumber = employee.getOfficeNumber();
    } else if (employee.getRole() == "Intern") {
        cardInfo.school = employee.getSchool();
    }

    html += getCardHtml(cardInfo);
}
const fs = require("fs");
fs.writeFile('newfile.html', html, function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
});
run()

function getCardHtml(cardInfo) {
    let html = "<div>";
    return html;
}