import React, { useState, SyntheticEvent } from "react";
import { useAppDistatch } from "../hook";
import { addTodo } from "../store/todoSlice";

const NewTodoForm: React.FC = () => {
  const dispatch = useAppDistatch();
  const [title, setTitle] = useState("");

  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault();

    if (title) {
      dispatch(addTodo(title));
      setTitle("");
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          className="titleInput"
          type="text"
          placeholder="New task"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
