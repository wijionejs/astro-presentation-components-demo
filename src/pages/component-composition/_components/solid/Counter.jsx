import { createSignal } from "solid-js";

const Counter = () => {
  const [counterValue, setCounterValue] = createSignal(0);

  return (
    <div className="p-6 bg-[#d6edf8] border-2 border-[#006B9E] rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl text-center font-bold text-[#006B9E]">
          Solid: <span>{counterValue()}</span>
        </h1>
        <div className="flex gap-2">
          <button
            className="py-2 px-4 bg-[#006B9E] text-white rounded cursor-pointer hover:opacity-70 transition"
            onClick={() => setCounterValue(counterValue() + 1)}
          >
            +
          </button>
          <button
            className="py-2 px-4 bg-[#006B9E] text-white rounded cursor-pointer hover:opacity-70 transition"
            onClick={() => setCounterValue(counterValue() - 1)}
          >
            -
          </button>
          <button
            className="py-2 px-4 bg-gray-300 text-gray-800 rounded cursor-pointer hover:opacity-70 transition"
            onClick={() => setCounterValue(0)}
          >
            ↺
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
