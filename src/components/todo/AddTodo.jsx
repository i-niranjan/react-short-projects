import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      return alert("Please Enter the To Do First");
    } else {
      dispatch(addTodo(input));
      setInput(""); //Clear the form
    }
  };
  return (
    <form
      onSubmit={addTodoHandler}
      className="space-y-5 flex flex-col p-10 w-[500px]"
    >
      <input
        class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter a Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        class="text-white flex flex-wrap justify-center  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add To Do
      </button>
    </form>
  );
}

export default AddTodo;
