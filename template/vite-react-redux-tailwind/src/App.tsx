import { useAppDispatch, useAppSelector } from "./lib/redux";
import { decrementCount, incrementCount } from "./slice/count";

function App() {
  const count = useAppSelector((state) => state.count.count);
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl text-blue-400">
          this is vite-react-tailwind-redux template
        </p>
        <div> count: {count}</div>
        <div className="flex flex-col gap-2">
          <button
            className="bg-gray-300 p-2 rounded"
            onClick={() => dispatch(incrementCount())}
          >
            increment
          </button>
          <button
            className="bg-gray-300 p-2 rounded"
            onClick={() => dispatch(decrementCount())}
          >
            decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
