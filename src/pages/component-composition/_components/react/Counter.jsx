import { useStore } from "@nanostores/react";
import { counter } from "../../_store/counterStore";

const Counter = ({ children }) => {
  const $counter = useStore(counter);

  return (
    <div className="p-6 bg-[#f2fafd] border-2 border-[#61DAFB] rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-xl text-center font-bold text-[#61DAFB]">
          React: <span>{$counter}</span>
        </h1>
        <div className="flex gap-2">
          <button
            className="py-2 px-4 bg-[#61DAFB] text-white rounded cursor-pointer hover:opacity-70 transition"
            onClick={() => counter.set($counter + 1)}
          >
            +
          </button>
          <button
            className="py-2 px-4 bg-[#61DAFB] text-white rounded cursor-pointer hover:opacity-70 transition"
            onClick={() => counter.set($counter - 1)}
          >
            -
          </button>
          <button
            className="py-2 px-4 bg-gray-300 text-gray-800 rounded cursor-pointer hover:opacity-70 transition"
            onClick={() => counter.set(0)}
          >
            ↺
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Counter;
