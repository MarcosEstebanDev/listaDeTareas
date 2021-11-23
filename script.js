// Info date
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

//taks container, donde alojamos las tareas
const tasksContainer = document.getElementById('tasksContainer');

//Setear la fecha actual, modificamos los datos que nos devuelve Date.
const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });

};
//evento para agregar nueva tarea

const addNewTask = event => {
//evitar el submit
    event.preventDefault();
    
//accedemos con el target del evento

    const { value } = event.target.taskText;
    if (!value) return;
    
    
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    //agregamos al principio de la lista
    tasksContainer.prepend(task);
    event.target.reset();
};


//Cambiamos el estado de hecha por hacer
const changeTaskState = event => {
    event.target.classList.toggle('done');
};

//Ordenamos las tareas 
const order = () => {
    const done = [];
    const toDo = [];
    
    //aceedemos a las tareas y iteramos
    tasksContainer.childNodes.forEach(el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];
}
//Iteramos cada elemento del array y lo ubicamos en el container
const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el))
}
setDate();
