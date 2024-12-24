document.getElementById('add-task-btn').addEventListener('click', function () {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
  
    if (taskText === '') {
      alert('Please enter a task!');
      return;
    }
  
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
  
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
  
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
  
    deleteBtn.addEventListener('click', function () {
      taskList.removeChild(taskItem);
    });
  
    taskSpan.addEventListener('click', function () {
      taskItem.classList.toggle('completed');
    });
  
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
  
    taskInput.value = '';
  });