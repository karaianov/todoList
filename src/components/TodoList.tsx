import React from "react";
import { useAppSelector } from "../hook";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const todoList = useAppSelector((state) => state.todos.list);
  return (
    <div className="todoList">
      {todoList.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </div>
  );
};

export default TodoList;
