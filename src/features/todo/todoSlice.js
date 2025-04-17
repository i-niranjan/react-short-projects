//Create Slice - > Helps us to create State, Reducers , Actions Creators in one go
//nanoid() - > Generates a randome unique ID

import { createSlice, nanoid } from "@reduxjs/toolkit";

// This is just a default data
const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

const sayHello = () => {
  console.log("Hello World");
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // we are gonna get access of state action every fcking time
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    // State - > Current State | Data - > Data Pass
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos.find((todo) => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.text;
        }
      });
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
