export class Todo {
    constructor(data) {
        this.id = data.id;
        this.description = data.description;
        this.completed = data.completed || false;
    }

    get Template() {
        return `
            <div class="list-group-item d-flex align-items-center">
                <input type="checkbox" class="form-check-input me-2" ${this.completed ? 'checked' : ''} onchange="app.todoController.toggleTodoStatus('${this.id}')">
                <span class="flex-grow-1 ${this.completed ? 'text-decoration-line-through' : ''}">${this.description}</span>
                <button class="btn btn-danger btn-sm" onclick="app.todoController.deleteTodo('${this.id}')">Delete</button>
            </div>
        `;
    }
}