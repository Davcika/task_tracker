//apstrada json, vel japafixo!
let fs = require("fs");
var obj = {
    table: []
}
const existingData = fs.readFileSync('./task_tracker_data.json')
const jsonData = JSON.parse(existingData)

//datums
let now = new Date()
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let dateConf = [now.getDate(), months[now.getMonth()], now.getFullYear()]

//nezinu
const readline = require('node:readline');
const { json } = require("node:stream/consumers");
const { callbackify } = require("node:util");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//CLI komandu iegusana
rl.question("Tasks_Tracker : ", command => {
    let text = (isNaN(command.split(" ")[1])) ? command.split(" ")[1] : command.split(" ")[2];
    let id  = (isNaN(command.split(" ")[1]) == false) ? command.split(" ")[1] : command.split(" ")[2];
    command = command.split(" ")[0];

    switch(command.toLowerCase()){
        case "add":
            jsonData.table.push({'desc': text, 'status': "todo", 'date': dateConf.toString().replace(/,/g, ' ')})
            fs.writeFileSync('./task_tracker_data.json', JSON.stringify(jsonData))
            break;

        case "delete":
            console.log("task deleted");
            break;
            
        default:
            console.log("wrong command");
            break;
    }
    rl.close()
})



