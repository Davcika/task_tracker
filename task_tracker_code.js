//Reads json file
var fs = require("fs");
var obj = JSON.parse(fs.readFileSync('./task_tracker_data.json', 'utf8'))

//Get index for needed value
function indexById(selectedId){
    for (i = 0; i < obj.length; i++){
        if(obj[i].id == selectedId){
            return i
        }
    }
    return undefined
}

//Checks if id is written by user
function idExists(selected){
    if(!selected){
        console.log("Id is not selected!")
        return false
    }
    return true
}

//First id check
var id = (obj[0] == undefined) ? 1 : obj[obj.length - 1].id + 1;

if(obj[0] == undefined){
    var id = 1
}
else{
    var id = obj[obj.length - 1].id + 1
}

//Date handlerer
let now = new Date()
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let dateConf = [now.getDate(), months[now.getMonth()], now.getFullYear()]

//cmd
const readline = require('node:readline');
const { describe } = require("node:test");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//CLI
rl.question("Tasks_Tracker : ", command => {
    let text = (isNaN(command.split(",")[1])) ? command.split(",")[1] : command.split(",")[2];
    let selectedId  = (isNaN(command.split(",")[1]) == false) ? command.split(",")[1] : command.split(",")[2];
    selectedId = parseInt(selectedId)
    command = command.split(",")[0];
    let index = indexById(selectedId)

    switch(command.toLowerCase()){
        case "add": //done
            var data = {'id': id, 'desc': text, 'status': "todo", 'date': dateConf.toString().replace(/,/g, ' ')}
            obj.push(data)
            break;
            
        case "delete"://done
            idExists(selectedId)
            obj.splice(index, 1)
            for(let i = index; i < obj.length; i++){
                obj[i].id --;
            }
            break;
        
        case "update"://done
            if(!selectedId || !text){
                console.log("no id or description selected")
                break;
            }
            obj[index].desc = text;
            break;
        
        case "mark-in-progress"://done
            idExists(selectedId)
            obj[index].status = "done"
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