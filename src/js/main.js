class Task {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}


class UiTask {
    createTask(task) {
        const ui_task = document.getElementById('ui-task');
        const element_ui = document.createElement('div');

        element_ui.innerHTML = `
            <div class="card z-depth-3">
                <div class="card-title">
                    <h3><span>Nombre: </span>${task.name}</h3>
                </div>
                <div class="card-content">
                    <p><span>Descripción: </span>${task.description}</p>
                </div>

                <a href="#" name="delete" class="waves-effect waves-light btn-small button red darken-4">Eliminar</a>
                <br><br>
            </div>
        `;

       ui_task.appendChild(element_ui);
    
    }

    clearForm() {
        const clear_form = document.getElementById('todo-task');

        clear_form.reset();
    }

    deleteTask(element_ui) {
        if(element_ui.name === 'delete') {
            element_ui.parentElement.parentElement.remove();
            alert('Se elimino correctamente la tarea!');
        }
    }

}


document.getElementById('todo-task').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;

    const tasks = new Task(name, description);
    const task_ui = new UiTask();

    task_ui.createTask(tasks);
    task_ui.clearForm();


    e.preventDefault();

    const todo_delete = document.getElementById('ui-task');
    todo_delete.addEventListener('click', function(e) {
        const task_ui = new UiTask();
        task_ui.deleteTask(e.target);

        e.preventDefault();
    })
});