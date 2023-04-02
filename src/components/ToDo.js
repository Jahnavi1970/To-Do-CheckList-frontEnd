import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const ToDo = ({ text, updateMode, deleteToDo, isValid }) => {
  return (
    <div className="todo" draggable="true">
      <div className="text">
        <p className={!isValid ? "strike text" : "text"}>{text}</p>
      </div>
      <div className="icons">
        {isValid && <BiEdit className="icon" onClick={updateMode} />}
        <AiFillDelete className="icon" onClick={deleteToDo} />
      </div>
    </div>
  );
};

export const draggables = document.querySelectorAll(".todo");
export const containers = document.querySelectorAll(".list");

draggables.forEach((todo) => {
  todo.addEventListener("drag start", () => console.log("drag start"));
});

export { ToDo };
