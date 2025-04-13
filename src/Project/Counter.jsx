import { useState, useEffect } from "react";

function Counter() {
  const [counter, setCounter] = useState(5);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
    } else {
      alert("Stop Bro");
    }
  };
  const removeValue = () => {
    if (counter > 0) setCounter(counter - 1);
    else alert("Stop Bro");
  };

  return (
    <>
      <div className="w-full h-[100vh] flex-col items-center flex justify-center bg-blue-400 border ">
        <h2 className="p-4 text-4xl"> Counter Value = {counter}</h2>
        <div className="flex flex-col gap-6">
          <button
            onClick={addValue}
            className="bg-white text-black rounded-sm py-2 px-6 hover:bg-blue-900 hover:text-white ease-in duration-200"
          >
            Add Value
          </button>
          <button
            onClick={removeValue}
            className="bg-white text-black rounded-sm py-2 px-6 hover:bg-blue-900 hover:text-white ease-in duration-200"
          >
            Remove Value
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
