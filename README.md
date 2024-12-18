# Lit Elements vs Web Components

This repository contains two example implementations of a Todo application to demonstrate the differences between vanilla Web Components and Lit Elements.

## What are Web Components?

Web Components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML elements. They consist of three main technologies:

1. **Custom Elements**: JavaScript APIs to define custom elements and their behavior
2. **Shadow DOM**: Encapsulated DOM and styling, scoped to the component
3. **HTML Templates**: HTML markup templates that can be reused

Check out the `todo-web-components` folder for an example of a Todo application built with vanilla Web Components.

## What is Lit?

Lit is a simple library for building fast, lightweight web components. It provides a set of features that make it easier to work with Web Components:

- **Declarative Templates**: Write HTML templates using JavaScript template literals
- **Reactive Properties**: Simple property management with automatic updates
- **Lifecycle Management**: Easy-to-use lifecycle hooks
- **Efficient Updates**: Smart rendering system that only updates what changed
- **TypeScript Support**: Built with TypeScript for better developer experience

### Why Choose Lit over Vanilla Web Components?

- Less boilerplate code
- Better performance through efficient rendering
- Enhanced developer experience
- Built-in property management
- Simpler event handling
- Better TypeScript support

## Example Applications

### todo-lit

The `todo-lit` folder contains a complete Todo application built with Lit Elements. This example includes:

- Full implementation of a Todo application
- Unit tests demonstrating how to test Lit components
- Best practices for component structure
- Property management examples
- Event handling patterns

### todo-web-components

The `todo-web-components` folder contains the same Todo application built with vanilla Web Components. This implementation helps understand:

- Basic Web Component structure
- How to implement custom elements without a framework
- Shadow DOM usage
- HTML template implementation

## Getting Started

To run either example:

1. Navigate to the desired folder (`todo-lit` or `todo-web-components`)
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Run tests (for todo-lit): `npm test`


## Examples of UI Libraries built with Lit

1. https://lion-web.netlify.app/
2. https://sap.github.io/ui5-webcomponents/


## Further Reading

- [Lit Documentation](https://lit.dev/)
- [Web Components on MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Custom Elements Specification](https://html.spec.whatwg.org/multipage/custom-elements.html) 