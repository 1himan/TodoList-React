import { useEffect, useState } from "react";
import "../Style/style.css";
import "../Style/root.css";
import { NewTodoForm } from "./NewTodoForm.jsx";
import TodoList from "./TodoList.jsx";

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });
  const [showFinished, setshowFinished] = useState(true);
  const [eye, seteye] = useState(
    <i className="fas fa-eye-slash" style={{ color: "#ffffff;" }}></i>
  );

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  const toggleFinish = () => {
    if (showFinished) {
      seteye(<i className="fa-solid fa-eye" style={{ color: "#ffffff;" }}></i>);
    }
    if (!showFinished) {
      seteye(
        <i className="fas fa-eye-slash" style={{ color: "#ffffff;" }}></i>
      );
    }
    setshowFinished(!showFinished);
  };
  function addTodo(title) {
    setTodos((currentTodo) => {
      return [
        ...currentTodo,
        { id: crypto.randomUUID(), title: title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          // React then efficiently compares the old and new states to determine what needs to be re-rendered.
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <div className="container m-auto">
      <div className="show-finished fle">
        <input
          type="checkbox"
          className="text-sm hidden "
          id="showFinished"
          checked={showFinished}
          onChange={toggleFinish}
        />
        <label
          htmlFor="showFinished"
          className="text-sm absolute top-2 left-2 select-none">
          {eye}
        </label>
      </div>
      <TodoList
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        todos={todos}
        showFinished={showFinished}
      />
      <NewTodoForm onSubmit={addTodo} />
    </div>
  );
}

export default App;
