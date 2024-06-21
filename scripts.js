document.getElementById('add-task-button').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date-input');
    const priorityInput = document.getElementById('priority-input');
    const categoryInput = document.getElementById('category-input');

    if (taskInput.value === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('task-list');

    const newRow = document.createElement('tr');

    const taskCell = document.createElement('td');
    taskCell.innerText = taskInput.value;

    const dueDateCell = document.createElement('td');
    dueDateCell.innerText = dueDateInput.value;

    const priorityCell = document.createElement('td');
    priorityCell.innerText = priorityInput.value;

    const categoryCell = document.createElement('td');
    categoryCell.innerText = categoryInput.value;

    const statusCell = document.createElement('td');
    const statusCheckbox = document.createElement('input');
    statusCheckbox.type = 'checkbox';
    statusCheckbox.addEventListener('change', function() {
        if (this.checked) {
            taskCell.classList.add('completed');
        } else {
            taskCell.classList.remove('completed');
        }
    });
    statusCell.appendChild(statusCheckbox);

    const actionsCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(newRow);
    });
    actionsCell.appendChild(deleteButton);

    newRow.appendChild(taskCell);
    newRow.appendChild(dueDateCell);
    newRow.appendChild(priorityCell);
    newRow.appendChild(categoryCell);
    newRow.appendChild(statusCell);
    newRow.appendChild(actionsCell);

    taskList.appendChild(newRow);

    taskInput.value = '';
    dueDateInput.value = '';
    priorityInput.value = 'Low';
    categoryInput.value = '';
});
