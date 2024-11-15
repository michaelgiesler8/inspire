import { api } from './AxiosService.js';
import { AppState } from '../AppState.js';
import { Todo } from '../models/Todo.js';

class TodoService {
    async getTodos() {
        try {
            const res = await api.get('/api/todos');
            AppState.todos = res.data.map((t) => new Todo(t));
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    }

