import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <h1>Todo List</h1>
      <div className="card">
        <NewTodoForm />
      </div>
      <div className="card">
        <TodoList />
      </div>
    </>
  );
}

export default App;
