import React from "react";
import useSound from "use-sound";
import tick from "../../public/delete.mp3";
import checked from "../../public/completed.mp3";

const TodoItems = ({
  id,
  completed,
  title,
  deleteTodo,
  toggleTodo,
  showFinished,
}) => {
  const [play] = useSound(tick);
  const [play2] = useSound(checked);
  return (
    (showFinished || !completed) && (
      <li key={id} className="mb-2 ">
        <div className="flex flex-row justify-between">
          <div className="div-1">
            <input
              className="checkboxInput"
              id={id}
              type="checkbox"
              checked={completed}
              onChange={(e) => {
                toggleTodo(id, e.target.checked);
                if (e.target.checked) {
                  play2();
                }
              }}
            />
            <label
              htmlFor={id}
              className={
                !completed
                  ? "ml-2 select-none"
                  : "line-through ml-2 select-none text-zinc-700"
              }>
              {title}
            </label>
          </div>
          <div className="w-6 div-2">
            <button
              className=" relative"
              onClick={() => {
                play();
                deleteTodo(id);
              }}>
              <img src="./public/trash4.png" alt="" />
            </button>
          </div>
        </div>
        <hr />
      </li>
    )
  );
};

export default TodoItems;
