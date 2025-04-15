import React, { useState, useCallback, useEffect, useRef } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState(null);

  const passwordRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) string += "123456789";
    if (charAllowed) string += "!@#$%^&*()_+[]{}|;:',.<>?/~`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  useEffect(() => {
    PasswordGenerator();
  }, [length, PasswordGenerator, numberAllowed, charAllowed]);

  const copyPass = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <div className="flex gap-10 flex-col bg-black h-screen items-center w-full p-4 ">
      <h1 className="text-orange-500 text-4xl flex justify-center">
        Password Generator
      </h1>
      <div className="flex flex-col w-full gap-y-5 shadow-sm shadow-orange-200 px-6 py-6 rounded-lg max-w-md h-auto my-8 text-orange-500 bg-slate-700">
        <div className="flex ">
          <input
            ref={passwordRef}
            type="text"
            value={password}
            placeholder="Password"
            className="outline-none w-full px-3 py-2 bg-white rounded-bl-lg rounded-tl-lg"
          />
          <button
            onClick={copyPass}
            className="bg-slate-950 hover:bg-slate-200 hover:text-slate-700 duration-300 ease-out px-6 py-2 rounded-br-lg rounded-tr-lg"
          >
            Copy
          </button>
        </div>
        <div className="flex gap-x-2">
          <div className="flex gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer "
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="Length">{length}</label>
          </div>
          <div className="flex gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
        <div className="flex gap-x-2"></div>
      </div>
    </div>
  );
}
