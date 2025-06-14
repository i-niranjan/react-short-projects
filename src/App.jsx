import React from "react";
import Counter from "./Project/Counter";
import BGChanger from "./Project/BGChanger";
import PasswordGenerator from "./Project/PasswordGenerator";
import CurrencyConverter from "./Project/CurrencyConverter";
import ToDo from "./Project/ToDo";
import AddToDo from "./components/todo/AddTodo";

import { Provider } from "react-redux";
import { store } from "./app/store";
import FeedbackForm from "./Project/FeedbackForm";
const Card = ({ children }) => {
  return <div className="p-4 border rounded-md shadow m-20">{children}</div>;
};

const BigHeading = ({ children }) => {
  return (
    <>
      <h2 className="text-6xl text-black shadow-md">{children}</h2>
    </>
  );
};
export default function App() {
  return (
    <>
      {/* <BGChanger />
      {/* <Counter />
      <PasswordGenerator /> */}
      {/* <CurrencyConverter /> */}
      {/* <Provider store={store}>
        <div className="flex flex-col w-full h-[100vh] justify-center items-center">
          <AddToDo />
          <ToDo />
        </div>
      </Provider> */}
      {/* <Card>
        <h1>Hello from inside the Card!</h1>
        <p>This is some more content.</p>
      </Card>
      <BigHeading>Hello</BigHeading> */}

      <FeedbackForm />
    </>
  );
}
