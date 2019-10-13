const description = {
    demand: true,
    alias: 'd',
    desc : "Descripción de la tarea por hacer"
};

const completado = {
    alias: 'c',
    default: true,
    desc : "Marca la tarea hecha"       
};


const argv = require("yargs")

.command('crear','Crea un elemento por hacer',{
    description
})
.command('borrar','Borrar una tarea',{
    description
})
.command('actualizar','Actualiza el estado completado de una tarea',{
    description,
    completado
})
.help()
.argv;

module.exports = {
    argv
}