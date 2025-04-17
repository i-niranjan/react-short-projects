import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
function ToDo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className=" rounded p-10 w-[500px]">
      <h2 className="text-xl  font-bold mb-4 text-gray-700">To-Do List</h2>

      {todos.length === 0 ? (
        <p className="text-gray-500">No tasks available. Add some tasks!</p>
      ) : (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center justify-between bg-white p-3 rounded shadow-sm hover:shadow-md transition-shadow"
            >
              <li className="text-gray-800">{todo.text}</li>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                X
              </button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ToDo;
