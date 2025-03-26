const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Tasks_Tracker : ", command => {
    console.log("command accepted")
    rl.close()
})

switch(command.toLoverCase()){
    case "add":
        console.log("task added");
        break;
    case "delete":
        console.log("task deleted")
        break;
    default:
        console.log("wrong command")
}

