import { AppState } from '../AppState.js';
import { todoService } from '../services/TodoService.js';
import { setHTML } from '../utils/Writer.js';
import { Pop } from '../utils/Pop.js';

export class TodoController {
    constructor() {
        AppState.on('todos', this.drawTodos.bind(this));
        this.getTodos();
    }


