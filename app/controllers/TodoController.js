import { AppState } from '../AppState.js';
import { todoService } from '../services/TodoService.js';
import { setHTML } from '../utils/Writer.js';
import { Pop } from '../utils/Pop.js';

export class TodoController {
    constructor() {
        AppState.on('todos', this.drawTodos.bind(this));
        this.getTodos();
    }

    async getTodos() {
        try {
            await todoService.getTodos();
        } catch (error) {
            console.error('Error getting todos:', error);
        }
    }

    drawTodos() {
        const todos = AppState.todos;
        const incompleteCount = todos.filter((t) => !t.completed).length;
        let template = todos.map((t) => t.Template).join('');
        setHTML('todos', template);
        setHTML('todo-count', `<p>${incompleteCount} tasks remaining</p>`);
    }

    async addTodo() {
        event.preventDefault();
        const form = event.target;
        const description = form.description.value.trim();
        if (!description) {
            Pop.toast('Please enter a todo description', 'warning');
            return;
        }
        form.reset();
        try {
            await todoService.addTodo(description);
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    }

    async toggleTodoStatus(id) {
        try {
            await todoService.toggleTodoStatus(id);
        } catch (error) {
            console.error('Error toggling todo status:', error);
        }
    }




