const argv = require ('./config/yargs').argv;
const colors = require ('colors');

const todo = require('./todo/todo');

const command = argv._[0];

switch (command) {
    case "crear":
        let task = todo.create(argv.description);
        console.log(task);
        break;
    case "listar":
        let listed = todo.getList();
        for (let task of listed) {
            console.log('=============Por hacer========'.green);
            console.log(task.description);
            console.log('Estado', task.completed);
            console.log('=============================='.green);
            
        }
    break;

    case "actualizar":
        let updateTask = todo.update(argv.description,argv.completed);
        console.log(updateTask);
        break;

    case "borrar":
            let deleteTask = todo.deleteTask(argv.description);
            console.log(deleteTask);
            break;
    
    default:
        console.log("Comando no reconocido");
        break;
}
