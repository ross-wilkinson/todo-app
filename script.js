document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
    const themeToggle = document.getElementById('theme-toggle');

    // Theme toggle functionality
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });

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
                li.classList.add('removing');
                setTimeout(() => {
                    li.remove();
                }, 300);
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