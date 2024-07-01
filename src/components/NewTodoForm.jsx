import { useState } from "react";
import useSound from "use-sound";
import tick from "/tick.mp3";

export function NewTodoForm({ onSubmit }) {
  //* hooks
  const [newItem, setNewItem] = useState("");
  const [play] = useSound(tick);

  //* helper functions
  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    //this function is not the actuall function definition that
    //was passed from the App.jsx as addTodo, but rather It points
    //to the addTodo function (parent Function) with the argument newItem
    //The addTodo function receives this value (newItem) as an argument.
    play();
    onSubmit(newItem);
    setNewItem("");
  }
  return (
    <div className="new-todo-form flex-1">
      <form action="" className="new-item-form" onSubmit={handleSubmit}>
        <div className="label">
          <label htmlFor="item" className="label">
            Add a Task
          </label>
        </div>
        <div className="input-add">
          <div className="form-row">
            <input
              className="text-black px-2 "
              type="text"
              id="item"
              value={newItem}
              onChange={(e) => {
                setNewItem(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-xl text-sm px-2 py-0.55 text-center ml-1">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
