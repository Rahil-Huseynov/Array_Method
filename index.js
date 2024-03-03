// name: 'Task 1', priority: 'high', time: 30

let tasks = [];

function addTask(task) {
    tasks.push(task);
}

function completeTask(index) {
    tasks.splice(index, 1);
}

function listTasks() {
    tasks.forEach((task, index) => {
        console.log(`${task.name}, Priority: ${task.priority}, Time: ${task.time} minutes`);
    });
}

function PriorityTasks() {
    return tasks.filter(task => task.priority === 'high');
}

function totalTaskTime() {
    return tasks.reduce((item, task) => total + task.time, 0);
}

function extendTasks(newTasks) {
    tasks = tasks.concat(newTasks);
}

function sliceTasks(start, end) {
    return tasks.slice(start, end);
}


addTask({ name: 'Task 1', priority: 'high', time: 30 });

listTasks();

completeTask(); 

listTasks();

totalTaskTime()

extendTasks([{ name: 'Task 1', priority: 'high', time: 30}]);

listTasks();

