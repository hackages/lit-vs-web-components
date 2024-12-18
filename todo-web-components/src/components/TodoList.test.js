describe('TodoList', () => {
  let todoList;

  beforeEach(() => {
    // Load the web component
    require('./TodoList.js');
    
    // Create a new instance of the component
    todoList = document.createElement('todo-list');
    document.body.appendChild(todoList);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should create empty todo list', () => {
    expect(todoList.todos).toEqual([]);
  });

  test('should add new todo', () => {
    todoList.addTodo('Test todo');
    expect(todoList.todos).toHaveLength(1);
    expect(todoList.todos[0].text).toBe('Test todo');
    expect(todoList.todos[0].completed).toBe(false);
  });

  test('should toggle todo completion', () => {
    todoList.addTodo('Test todo');
    const todoId = todoList.todos[0].id;
    
    todoList.toggleTodo(todoId);
    expect(todoList.todos[0].completed).toBe(true);
    
    todoList.toggleTodo(todoId);
    expect(todoList.todos[0].completed).toBe(false);
  });

  test('should not add empty todo', () => {
    todoList.addTodo('');
    todoList.addTodo('   ');
    expect(todoList.todos).toHaveLength(0);
  });
}); 