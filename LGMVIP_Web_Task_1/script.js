document.addEventListener('DOMContentLoaded', function() {
    var addButton = document.getElementById('add-button');
    var todoInput = document.getElementById('todo-input');
    var todoList = document.getElementById('todo-list');
  
  
    addButton.addEventListener('click', function() {
      var task = todoInput.value;
      if (task.trim() !== '') {
        var li = document.createElement('li');
        li.classList.add('task-item');
  
  
        var circle = document.createElement('span');
        circle.classList.add('circle');
        circle.addEventListener('click', function() {
          toggleCompletion(li, circle);
        });
  
  
        var taskText = document.createElement('span');
        taskText.classList.add('task-text');
        taskText.textContent = task;
        taskText.addEventListener('click', function() {
          toggleEditable(taskText);
        });
  
  
        var cross = document.createElement('span');
        cross.classList.add('cross');
        cross.textContent = 'X';
        cross.addEventListener('click', function() {
          li.remove();
        });
  
  
        li.appendChild(circle);
        li.appendChild(taskText);
        li.appendChild(cross);
        todoList.appendChild(li);
  
  
        todoInput.value = '';
      }
    });
  
  
    function toggleCompletion(li, circle) {
      li.classList.toggle('completed');
      circle.classList.toggle('completed');
      circle.classList.toggle('orange');
    }
  
  
    function toggleEditable(taskText) {
      taskText.contentEditable = true;
      taskText.classList.add('editable');
      taskText.focus();
  
  
      taskText.addEventListener('blur', function() {
        taskText.contentEditable = false;
        taskText.classList.remove('editable');
      });
    }
  });
  