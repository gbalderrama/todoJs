import Model from './model.js';
import View from './view.js';
import AddTodo from './components/add-todo.js';

document.addEventListener('DOMContentLoaded', () => {
    const model = new Model();
    const view = new View();

    model.setView(view);
    view.setModel(model);
    view.render();


});