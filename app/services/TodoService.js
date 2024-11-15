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

    async addTodo(description) {
        try {
            const res = await api.post('/api/todos', { description });
            const newTodo = new Todo(res.data);
            AppState.todos = [...AppState.todos, newTodo];
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    }

    async toggleTodoStatus(id) {
        try {
            const todo = AppState.todos.find((t) => t.id === id);
            if (todo) {
                todo.completed = !todo.completed;
                await api.put(`/api/todos/${id}`, { completed: todo.completed });
                AppState.emit('todos', AppState.todos);
            }
        } catch (error) {
            console.error('Error toggling todo status:', error);
        }
    }


