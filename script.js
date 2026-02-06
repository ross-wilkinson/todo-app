document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    function addTodo() {
        const text = input.value.trim();
        if (text !== "") {
            const li = document.createElement('li');
            
            const span = document.createElement('span');
            span.textContent = text;
            span.addEventListener('click', () => {
                span.classList.toggle('completed');
            });
            
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            
            deleteBtn.addEventListener('click', () => {
                li.remove();
            });

            li.appendChild(span);
            li.appendChild(deleteBtn);
            todoList.appendChild(li);
            
            input.value = '';
            input.focus();
        }
    }

    addBtn.addEventListener('click', addTodo);

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
});