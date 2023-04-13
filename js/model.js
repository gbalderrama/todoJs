export default class Model {
    constructor() {
        this.view = null;
        //console.log(JSON.parse(localStorage.getItem('todos')),'los tood')
        if (JSON.parse(localStorage.getItem('todos')) === undefined) {
            this.todos = [];
            this.currentId = 0;
        } else {
            this.todos = JSON.parse(localStorage.getItem('todos'));
            this.currentId = JSON.parse(localStorage.getItem('todos')).length;

        }
        
    }

    setView(view) {
        this.view = view
    }

    getTodos() {
        return this.todos.map((todo) =>({...todo}));
    }

    addTodo(title, description) {
        const todo = {
            id: this.currentId++,
            title,
            description,
            completed: false
        }

        this.todos.push(todo);
        this.save();
        return { ...todo };

    };


    toggleCompleted(id) {
        if (this.todos[this.todos.findIndex((todo) => todo.id === id)].completed) {
            this.todos[this.todos.findIndex((todo) => todo.id === id)].completed = false;
            this.save();
            return;
        }
        
        this.todos[this.todos.findIndex((todo) => todo.id === id)].completed = true;
        this.save();
        console.log(this.todos);

    }

    removeTodo(id) {
        this.todos.splice(this.todos.findIndex((todo) => todo.id === id), 1);
        this.save();
    }

    editTodo(id, values) {
        const index = this.todos.findIndex((todo) => todo.id == id);
        console.log(values);
        Object.assign(this.todos[index], values);
        console.log(this.todos);

        this.save();
    

    }


    save() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }


}