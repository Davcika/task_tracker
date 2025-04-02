//izlasa json un ieliek obj
var fs = require("fs");
var obj = JSON.parse(fs.readFileSync('./task_tracker_data.json', 'utf8'))

//id parbaude
if(obj[0] == undefined){
    var id = 1
}
else{
    var id = obj[obj.length - 1].id + 1
}

//datums
let now = new Date()
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let dateConf = [now.getDate(), months[now.getMonth()], now.getFullYear()]

//plusma
const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//CLI komandu iegusana
rl.question("Tasks_Tracker : ", command => {
    let text = (isNaN(command.split(" ")[1])) ? command.split(" ")[1] : command.split(" ")[2];
    let selectedId  = (isNaN(command.split(" ")[1]) == false) ? command.split(" ")[1] : command.split(" ")[2];
    selectedId = parseInt(selectedId)
    command = command.split(" ")[0];

    switch(command.toLowerCase()){
        case "add": //ir
            var data = {'id': id, 'desc': text, 'status': "todo", 'date': dateConf.toString().replace(/,/g, ' ')}
            obj.push(data)
            break;

        case "delete"://ir
            if(!selectedId){
                console.log("no id selected")
                break
            }
            for(let i = 0; i < obj.length; i++){
                if(obj[i].id == selectedId){
                    obj.splice(obj.indexOf(obj[i]), 1)
                    for(i; i < obj.length; i++){
                        obj[i].id --;
                    }
                }
            }
            break;
            
        default:
            console.log("wrong command");
            break;
    }

    console.log(obj)
    var output = "[\n" + obj.map(entry => JSON.stringify(entry)).join(",\n") + "\n]";
    fs.writeFileSync('./task_tracker_data.json', output)
    rl.close()
})