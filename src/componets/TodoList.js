import TodoItem from "./TodoItem";

function TodoList() {
    const todos = ["go shopping", "do home work", "play Cricket", "Go Dancing"];
    return (
        <>
            <h2>My ToDo List</h2>
            {todos.map((item, index) =>
                <TodoItem key={index} todo={item} isCompleted={false} />
            )}
        </>
    );
}
export default TodoList;
