const addBtnWindow = document.getElementById('addBtnWindow');
const formModal = document.getElementById('formModal');
const addBtnModal = document.getElementById('addBtnModal')
const closeBtn = document.getElementById('closeBtn');

const toDoEl = document.getElementById('todo-cards');
const inProgEl = document.getElementById('in-progress-cards');
const doneEl = document.getElementById('done-cards');



// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let taskId = '';

    for (let i = 0; i < 3 ; i++) {
     taskId += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    const timestamp = dayjs();
    taskId += timestamp;

    return taskId;
}

const uniqueId = generateTaskId();
console.log(uniqueId);

// Todo: create a function to create a task card
function createTaskCard(task) {
    console.log('create card');

    const taskCard = $(`<div>`)
        .addClass('card project-card draggable my-3 task-card')
        .attr('data-project-id', task.id);

    const taskHeader = $('<div>').addClass('card-header h4').text(task.name);
    const taskBody = $('<div>').addClass('card-body');
    const taskDescription = $('<p>').addClass('card-text').text(task.type);
    const taskDueDate = $('<p>').addClass('card-text').text(task.dueDate);
    const deleteBtn = $('<button>')
        .addClass('btn btn-danger delete')
        .text('Delete')
        .attr('data-project-id', task.id);
    
    deleteBtn.on('click', handleDeleteTask);

    if (task.dueDate && task.status !== 'done') {
        const now = dayjs();
        const taskDueDate = dayjs(task.dueDate, 'MM/DD/YYYY');
    
        if (now.isSame(taskDueDate, 'day')) {
        taskCard.addClass('bg-warning text-white');
        } else if (now.isAfter(taskDueDate)) {
        taskCard.addClass('bg-danger text-white');
        cardDeleteBtn.addClass('border-light');
        }
    }

    
    taskCard.append(taskHeader);
    taskCard.append(taskBody);
    taskCard.append(taskDescription);
    taskCard.append(taskDueDate);
    taskCard.append(deleteBtn);

    return taskCard;

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    let tasks = taskList;

    if (!tasksList) {
        tasks = [];
    }

    tasks.forEach(task => {
        console.log(task);
        const taskCard = createTaskCard(task);
        taskList.appendChild(taskCard);
    })

    $('.task-card').draggable();

    return tasks;
}

// Todo: create a function to handle adding a new task
function handleAddTask(){
    // check local sotage for tasks, 
    // if none make tasks variable empty array else make value pulled form storage parse.
    // push new object to array.
    //save array to storage
    // re render
    formModal.style.display = 'block';

    $('#task-form').on('submit', function (event) {
        event.preventDefault();


        console.log('Submit');

        const taskName = $('#task-name-input').val();
        const taskType = $('#task-type-input').val();
        const dueDate = $('#taskDueDate').val();

        console.log(taskName, taskType, dueDate);
        const task = {
            id: generateTaskId(),
            name: taskName,
            type: taskType,
            dueDate: dueDate,
        };

        createTaskCard(task);

        closeModal();
    })

};

addBtnModal.addEventListener('click', handleAddTask);

function closeModal() {
    formModal.style.display = 'none';

    $('#task-name-input').val('');
    $('#task-type-input').val('');
    $('#taskDueDate').val('');
};

closeBtn.addEventListener('click', closeModal);

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    const taskId = $(this).attr('<insert yours>');
    const tasks = taskList;

    tasks.forEach((task) => {
    if (task.id === taskId) {
    tasks.splice(tasks.indexOf(task), 1);
    }
});
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {


    $('#taskDueDate').datepicker({
        format: 'mm-dd-yyyy',
        autoclose: true,
        todayHighlight: true
    });
});
