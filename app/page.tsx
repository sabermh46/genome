// "use client"; // This is a client component

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "./lib/store";
import { decrement, increment, incrementAsync } from "./redux/features/counterSlice";


export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const count = useSelector((state: AppState) => state.counter.value);
  const status = useSelector((state: AppState) => state.counter.status);

  const handleAsyncIncrement = () => {
    dispatch(incrementAsync(5));
  };

  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Next.js with Redux</h1>
      <h2>Counter: {count}</h2>
      <div>
        <button onClick={() => dispatch(increment())} style={{ margin: "10px" }}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())} style={{ margin: "10px" }}>
          Decrement
        </button>
        <button onClick={handleAsyncIncrement} style={{ margin: "10px" }}>
          Increment Async
        </button>
      </div>
      {status === "failed" && <p style={{ color: "red" }}>Async operation failed.</p>}
    </main>
  );
}
