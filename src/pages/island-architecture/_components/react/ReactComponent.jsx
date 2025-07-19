import { useState, useEffect } from "react";

const ReactComponent = () => {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("non-hydrated");

  useEffect(() => {
    setStatus("hydrated");
  }, []);

  return (
    <div
      className={`p-6  border-2  rounded-lg shadow-md ${
        status === "hydrated"
          ? "bg-[#f2fafd] border-[#61DAFB]"
          : "bg-gray-200 border-gray-400"
      }`}
    >
      <h1
        className={`text-3xl text-center font-bold  mb-5 ${
          status === "hydrated" ? "text-[#61DAFB]" : "text-gray-600"
        }`}
      >
        React counter
      </h1>
      <p className="text-9xl text-center font-bold text-gray-800 mb-5">
        {count}
      </p>
      <div className="flex space-x-4 justify-center">
        <button
          className={`px-4 py-2  rounded cursor-pointer hover:opacity-70 transition ${
            status === "hydrated"
              ? "bg-[#61DAFB] text-white"
              : "bg-gray-300 text-gray-800"
          }`}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className={`px-4 py-2  rounded cursor-pointer hover:opacity-70 transition ${
            status === "hydrated"
              ? "bg-[#61DAFB] text-white"
              : "bg-gray-300 text-gray-800"
          }`}
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded cursor-pointer hover:opacity-70 transition"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ReactComponent;
