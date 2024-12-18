import { css } from 'lit';

export const todoStyles = css`
  :host {
    display: block;
    padding: 1rem;
    max-width: 600px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
  }

  .todo-input {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  input {
    flex-grow: 1;
    padding: 0.5rem;
    font-size: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .todo-list {
    list-style: none;
    padding: 0;
  }

  .todo-item {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-bottom: 1px solid #ddd;
  }

  .todo-item input[type="checkbox"] {
    margin-right: 1rem;
  }
`;