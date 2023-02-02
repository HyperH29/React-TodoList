import { useSelector, useDispatch } from "react-redux";
import todo, {
  addTodo,
  deleteTodo,
  editTodo,
  completeTodo,
} from "./store/todo";
import { useState } from "react";
import Content from "./Content";
import Button from "react-bootstrap/Button";

function TodoList({ todos, count }) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  count = useSelector((state) => state.todo.nextId);
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
  //console.log(todos);
  // phrase object to string
  // With this value we can see the number of todos in the list
  //console.log(JSON.stringify(count - 1));

  const handleAdd = (e) => {
    e.preventDefault();
    // Remove completed: false
    dispatch(addTodo(input));
    setInput("");
  };

  // I am targeting the id of the todo item that I want to delete.
  const handleEdit = (index) => {
    dispatch(editTodo(index));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleComplete = (id) => { 

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
      </form>
      <div>
        <ul>
          { 
          Object.keys(todos.data).map((index) => {
            let todo = todos.data[index];

            return (
              <div>
                <Content
                  key={index}
                  id={index}
                  text={todo.content}
                  completed={() => handleComplete(index)}
                />
                <Button onClick={handleAdd}>+</Button>
                <Button onClick={() => handleEdit(index)}>Edit</Button>
                <Button onClick={() => handleDelete(index)}>Delete</Button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
