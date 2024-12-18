import { LitElement, html } from 'lit';
import { todoStyles } from '../styles/todo-styles.js';

export class TodoApp extends LitElement {
  static styles = todoStyles;

  static properties = {
    todos: { type: Array },
    newTodoText: { type: String }
  };

  constructor() {
    super();
    this.todos = [];
    this.newTodoText = '';
  }

  render() {
    return html`
      <div class="todo-container">
        <h1>Todo List</h1>
        
        <div class="todo-input">
          <input 
            type="text"
            .value=${this.newTodoText}
            @input=${(e) => this.newTodoText = e.target.value}
            @keyup=${(e) => e.key === 'Enter' && this.addTodo()}
            placeholder="Add a new todo"
          >
          <button @click=${this.addTodo}>Add</button>
        </div>

        <ul class="todo-list">
          ${this.todos.map((todo, index) => html`
            <li class="todo-item">
              <input 
                type="checkbox"
                .checked=${todo.completed}
                @change=${() => this.toggleTodo(index)}
              >
              <span style="text-decoration: ${todo.completed ? 'line-through' : 'none'}">
                ${todo.text}
              </span>
            </li>
          `)}
        </ul>
      </div>
    `;
  }

  addTodo() {
    if (this.newTodoText.trim()) {
      this.todos = [...this.todos, {
        text: this.newTodoText,
        completed: false
      }];
      this.newTodoText = '';
    }
  }

  toggleTodo(index) {
    this.todos = this.todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
  }
}

customElements.define('todo-app', TodoApp);