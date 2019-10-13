//Requires
const fs = require('fs');

let listTodo = [];

const saveBD = () =>{
    let data = JSON.stringify(listTodo);
    fs.writeFile( `db/data.json`,data, err => {
        if (err) throw new Error("No se puedo grabar en la base de datos");
    });
} 

const uploadDB = () =>{
    try {
        listTodo = require('../db/data.json');

    } catch (error) {
        listTodo = [];
        
    }
}

 const create = (description) => {

    uploadDB();


    let todo = {
         description,
         completed: false
     }
     listTodo.push(todo);
     saveBD();
     return todo;
 }

 const getList = () => {
     uploadDB();
     return listTodo;
 }

 const update = (description, completed = true) => {
     uploadDB();
     let index = listTodo.findIndex(task => task.description === description);
     if (index >= 0) {
         listTodo[index].completed = completed;
         saveBD();
         return true;
     }else{
         return false;
     }
 }

 const deleteTask = (description) => {
    uploadDB();
    let newList = listTodo.filter(task => task.description !== description);

    if (listTodo.length === newList.length) return false;
    listTodo = newList;
    saveBD();
    return true;

}

 module.exports = {
     create,
     getList,
     update,
     deleteTask
 }