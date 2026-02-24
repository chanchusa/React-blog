// Get todos from localStorage
function get() {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
}

// Add a new todo
function add(item) {
    const todos = get();        // get existing todos
    todos.push(item);           // add new item
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Delete a todo
function deleteTodo(item) {
    const todos = get();
    const updatedTodos = todos.filter(todo => todo !== item);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
}


export { get, add, deleteTodo }
