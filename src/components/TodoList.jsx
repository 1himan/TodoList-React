import TodoItems from "./TodoItems";

const TodoList = ({ deleteTodo, toggleTodo, todos, showFinished }) => {
  return (
    <>
      <div className="todo-list flex-2 overflow-auto">
        <h1 className="header mb-3 mt-2 font-bold text-2xl select-none">
          Tasks
        </h1>
        {/* rest of the code */}
        <ul className="list">
          {todos.length === 0 && "What do You want to Acheive Today?"}
          {todos.map((todo) => {
            return (
              <div className="todo-items wrapper">
                <TodoItems
                  {...todo}
                  key={todo.id}
                  deleteTodo={deleteTodo}
                  toggleTodo={toggleTodo}
                  showFinished={showFinished}
                />
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
