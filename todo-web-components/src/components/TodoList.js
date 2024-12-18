class TodoList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.todos = [];
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  setupEventListeners() {
    const form = this.shadowRoot.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = this.shadowRoot.querySelector('input');
      this.addTodo(input.value);
      input.value = '';
    });
  }

  addTodo(text) {
    if (text.trim()) {
      this.todos.push({ text, completed: false, id: Date.now() });
      this.render();
    }
  }

  toggleTodo(id) {
    this.todos = this.todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: Arial, sans-serif;
          max-width: 500px;
          margin: 0 auto;
          padding: 20px;
        }
        .todo-item {
          display: flex;
          align-items: center;
          padding: 8px;
          border-bottom: 1px solid #eee;
        }
        .completed {
          text-decoration: line-through;
          color: #888;
        }
        form {
          display: flex;
          margin-bottom: 20px;
        }
        input {
          flex-grow: 1;
          padding: 8px;
          margin-right: 8px;
        }
        button {
          padding: 8px 16px;
          background-color: #4CAF50;
          color: white;
          border: none;
          cursor: pointer;
        }
      </style>
      <form>
        <input type="text" placeholder="Add a new todo">
        <button type="submit">Add</button>
      </form>
      <div id="todo-list">
        ${this.todos.map(todo => `
          <div class="todo-item ${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
            <input type="checkbox" ${todo.completed ? 'checked' : ''}>
            <span>${todo.text}</span>
          </div>
        `).join('')}
      </div>
    `;

    this.shadowRoot.querySelectorAll('.todo-item').forEach(item => {
      const id = parseInt(item.dataset.id);
      const checkbox = item.querySelector('input[type="checkbox"]');
      checkbox.addEventListener('change', () => this.toggleTodo(id));
    });
  }
}

customElements.define('todo-list', TodoList); 