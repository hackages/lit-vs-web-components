import { html, fixture, expect } from '@open-wc/testing';
import { TodoApp } from './todo-app.js';

describe('TodoApp', () => {
  let element;

  beforeEach(async () => {
    element = await fixture(html`<todo-app></todo-app>`);
  });

  it('renders with default empty todo list', () => {
    const todoList = element.shadowRoot.querySelector('.todo-list');
    expect(todoList.children.length).to.equal(0);
  });

  it('adds a new todo when input is filled and add button is clicked', async () => {
    const input = element.shadowRoot.querySelector('input');
    const addButton = element.shadowRoot.querySelector('button');

    // Simulate typing in the input
    input.value = 'Test todo';
    input.dispatchEvent(new Event('input'));

    // Click the add button
    addButton.click();

    // Wait for the update to complete
    await element.updateComplete;

    // Check if todo was added
    const todoList = element.shadowRoot.querySelector('.todo-list');
    expect(todoList.children.length).to.equal(1);
    expect(todoList.querySelector('span').textContent.trim()).to.equal('Test todo');
  });

  it('toggles todo completion status when checkbox is clicked', async () => {
    // Add a todo first
    element.todos = [{ text: 'Test todo', completed: false }];
    await element.updateComplete;

    // Find and click the checkbox
    const checkbox = element.shadowRoot.querySelector('input[type="checkbox"]');
    checkbox.click();
    await element.updateComplete;

    // Verify the todo was marked as completed
    expect(element.todos[0].completed).to.be.true;
    
    // Check if the span has line-through style
    const todoText = element.shadowRoot.querySelector('.todo-item span');
    expect(todoText.style.textDecoration).to.equal('line-through');
  });

  it('does not add empty todos', async () => {
    const input = element.shadowRoot.querySelector('input');
    const addButton = element.shadowRoot.querySelector('button');

    // Try to add empty todo
    input.value = '   ';
    input.dispatchEvent(new Event('input'));
    addButton.click();
    await element.updateComplete;

    // Check that no todo was added
    const todoList = element.shadowRoot.querySelector('.todo-list');
    expect(todoList.children.length).to.equal(0);
  });

  it('adds todo when pressing Enter key', async () => {
    const input = element.shadowRoot.querySelector('input');

    // Simulate typing and pressing enter
    input.value = 'Test todo';
    input.dispatchEvent(new Event('input'));
    input.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));
    
    await element.updateComplete;

    // Check if todo was added
    const todoList = element.shadowRoot.querySelector('.todo-list');
    expect(todoList.children.length).to.equal(1);
    expect(todoList.querySelector('span').textContent.trim()).to.equal('Test todo');
  });

  it('clears input after adding todo', async () => {
    const input = element.shadowRoot.querySelector('input');
    const addButton = element.shadowRoot.querySelector('button');

    // Add a todo
    input.value = 'Test todo';
    input.dispatchEvent(new Event('input'));
    addButton.click();
    
    await element.updateComplete;

    // Check if input was cleared
    // expect(input.value).to.equal('');
    expect(element.newTodoText).to.equal('');
  });
});