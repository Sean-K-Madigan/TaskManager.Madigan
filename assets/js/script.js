const addBtn = document.getElementById('addBtn')

// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < 4; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    const timestamp = dayjs().toString(36);
    result += timestamp;

    return result; 
}

const uniqueId = generateTaskId();
console.log(uniqueId);

// Todo: create a function to create a task card
function createTaskCard(task) {

    const taskCard = $('<div>')
        .addClass('card project-card draggable my-3')
        .attr('data-project-id', project.id);

    const taskHeader = $('<div>').addClass('card-header h4').text(project.name);
    const taskBody = $('<div>').addClass('card-body');
    const taskDescription = $('<p>').addClass('card-text').text(project.type);
    const taskDueDate = $('<p>').addClass('card-text').text(project.dueDate);
    const deleteBtn = $('<button>')
        .addClass('btn btn-danger delete')
        .text('Delete')
        .attr('data-project-id', project.id)
    
    cardDeleteBtn.on('click', handleDeleteTask);
    }

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

addBtn.addEventListener('click', handleAddTask)

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
