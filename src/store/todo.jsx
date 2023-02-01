// Add Slice here
import { createSlice } from "@reduxjs/toolkit";

// The example we are following put this method in tot the createSlice method
// We do we need to reference the initial state here?
const initialTodoState = {
  nextId: 2,
  data: {
    1: {
      content: "Content.jsx 1",
      completed: false,
    },
  },
};
export const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodoState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        content: action.payload,
        completed: false,
      };
      state.data[state.nextId] = newTodo;
      state.nextId += 1;
    },

    // Need to work out how to add a new todo to the list
    // Not printing out the new todo atm
    // The initial value is not being updated. It is undefined

    // Check this first

    editTodo: (state, action) => {
      // check box is clicked and button is clicked to edit
      //  Edit the todo of the id and set completed to true
      const index = state.data.findIndex((todo) => todo.id === action.payload);
      index.content = action.payload;
    },

    deleteTodo: (state, action) => {
      //  Delete the todo of the id and set completed to true
      return state.data.filter((todo) => {
        state.nextId -= 1;
        return todo.id !== action.payload;
      });
      //  Unsure if the code below works.
      // state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      // state.count -= 1;
    },
    // Unsure of how to complete a todo
    completeTodo: (state, action) => {
      const index = state.data.findIndex((todo) => todo.id === action.payload);
      state.data[index].completed = true;
    },
  },
});

export const { addTodo, editTodo, deleteTodo, completeTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
