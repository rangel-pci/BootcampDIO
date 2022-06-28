const getById = (id) => {
    const element = document.getElementById(id);
    return element;
};

const getByClass = (className) => {
    const elements = document.getElementsByClassName(className);
    return elements;
};

const handleTodoItemChange = (item) => {
    const key = item.dataset.key;
    if(item.checked){
        getById('to-do-label-' + key).style.textDecoration = 'line-through';
    }else{
        getById('to-do-label-' + key).style.textDecoration = 'none';
    }
}

const handleDeleteTodo = (item) => {
    item.parentNode.remove();
}

const addTodo = () => {
    const todo = getById('input-to-do').value;
    if(todo.length > 0){
        let key = (getByClass('to-do-item').length + 1);
        let li = document.createElement('li');
        let btn = document.createElement('button');
        let input = document.createElement('input');
        let label = document.createElement('label');

        li.className = 'to-do-item';
        btn.className = 'delete';
        btn.title = 'Deletar';
        input.type = 'checkbox';
        input.name = 'to-do-item';
        input.id = 'to-do-item-'+ key;
        input.setAttribute('data-key', key);
        label.htmlFor = input.id;
        label.id = 'to-do-label-' + key;
        label.className = 'to-do-label';
        label.title = 'Marcar';

        getById('to-do-list').appendChild(li);
        li.appendChild(btn);
        li.appendChild(input);
        li.appendChild(label);
        btn.appendChild(document.createTextNode('❌'));
        label.appendChild(document.createTextNode(todo));
        
        btn.addEventListener('click', (e) => handleDeleteTodo(e.target), false);
        input.addEventListener('change', (e) => handleTodoItemChange(e.target),false);

        getById('to-do-list').appendChild(li);
        getById('input-to-do').value = '';
    }
}

window.onload = () => {
    getById('add').addEventListener('click', addTodo, false);
};