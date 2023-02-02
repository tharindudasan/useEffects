function TodoItem({ todo, isCompleted }) {
    return (
        <>
            {isCompleted == true && <div>{todo}-Completed</div>}
            {!isCompleted && <div>{todo}-Pending</div>}
            <br />
        </>
    );
}
export default TodoItem;
