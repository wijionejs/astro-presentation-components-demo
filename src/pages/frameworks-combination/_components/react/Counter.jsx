import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6  border-2 bg-[#f2fafd] border-[#61DAFB] rounded-lg shadow-md">
      <h1 className="text-3xl text-center font-bold text-[#61DAFB] mb-5">
        React
      </h1>
      <p className="text-9xl text-center font-bold text-gray-800 mb-5">
        {count}
      </p>
      <div className="flex space-x-4 justify-center">
        <button
          className="px-4 py-2 bg-[#61DAFB] text-white rounded cursor-pointer hover:opacity-70 transition"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-[#61DAFB] text-white rounded cursor-pointer hover:opacity-70 transition"
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

export default Counter;
