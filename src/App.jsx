import React from "react";
import Counter from "./Project/Counter";
import BGChanger from "./Project/BGChanger";
import PasswordGenerator from "./Project/PasswordGenerator";
import CurrencyConverter from "./Project/CurrencyConverter";
import ToDo from "./Project/ToDo";
import AddToDo from "./components/todo/AddTodo";

import { Provider } from "react-redux";
import { store } from "./app/store";
export default function App() {
  return (
    <>
      {/* <BGChanger />
      {/* <Counter />
      <PasswordGenerator /> */}
      {/* <CurrencyConverter /> */}
      <Provider store={store}>
        <div className="flex flex-col w-full h-[100vh] justify-center items-center">
          <AddToDo />
          <ToDo />
        </div>
      </Provider>
    </>
  );
}
