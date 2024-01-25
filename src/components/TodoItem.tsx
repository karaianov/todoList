import React from "react";
import { TTodo, removeTodo, toggleComplete } from "../store/todoSlice";
import { useAppDistatch } from "../hook";

const TodoItem: React.FC<TTodo> = ({ id, title, completed }) => {
  const dispatch = useAppDistatch();
  const toggleCompleteHandler = () => {
    dispatch(toggleComplete(id));
  };
  const removeTodoHandler = () => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="todoItem">
      <input
        type="checkbox"
        checked={completed}
        onChange={toggleCompleteHandler}
      />
      <span>{title}</span>
      <button onClick={removeTodoHandler}>Remove</button>
    </div>
  );
};

export default TodoItem;
