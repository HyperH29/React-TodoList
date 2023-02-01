import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, editTodo, completeTodo } from "./store/todo";
import { useState } from "react";
import Content from "./Content";
import Button from "react-bootstrap/Button";

function TodoList({ todos, count }) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  count = useSelector((state) => state.nextId);
  todos = useSelector((state) => state.todo);

  // const todoMap = [
  //     {
  //         id: 1,
  //         text: "Learn React",
  //         completed: true,
  //     },
  //     {
  //         id: 2,
  //         text: "Learn Redux",
  //         completed: false,
  //     },
  //     {
  //         id: 3,
  //         text: "Learn Redux-Toolkit",
  //         completed: false,
  //     },
  // ];
  console.log(todos);
  // console.log(count);
  // console.log(todoMap);

  const handleAddTodo = (e) => {
    e.preventDefault();
    // Remove completed: false
    dispatch(addTodo(input));
    setInput("");
  };

  // I am targeting the id of the todo item that I want to delete.
  const handleTodoDone = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleTodoEdit = (id) => {
    dispatch(editTodo);
  };

  const handleTodoComplete = (id) => {
    dispatch(completeTodo);
  };
  return (
    <div className="App">
      <h1> Todo List</h1>

      {/*<button onClick={() => dispatch(addTodo)}>Add Todo</button>*/}
      {/*<button onClick={() => dispatch(deleteTodo)}>Delete Todo</button>*/}
      <form>
        {/*  Should update from here*/}
        <input
          type="text"
          placeholder="Type here"
          onChange={(e) => setInput(e.target.value)}
        />
        {/*  Add Works*/}
        <Button onClick={handleAddTodo}>+</Button>
        {/*  Edit and Delete do not work*/}
        <Button onClick={handleTodoEdit}>Edit</Button>
        <Button onClick={handleTodoDone}>Delete</Button>
      </form>
      <div>
        <ul>
          {Object.keys(todos.data).map((todo) => (
            <Content
              key={todo}
              id={todo}
              text={todos.data[todo].content}
              completed={handleTodoComplete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
