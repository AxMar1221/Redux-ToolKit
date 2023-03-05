import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementBy, increment, incrementBy } from "./store/slices/counter/counterSlice";

import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
          <img src={reactLogo} className="logo react" alt="React logo" />
          <p>count is: { counter }</p>
        <button type="button" onClick={() => dispatch( increment() )}>
          Increment
        </button>
        <button type="button" onClick={() => dispatch( incrementBy(2) )}>
          Increment +2
        </button>
        <button type="button" onClick={() => dispatch( decrement(-1) )}>
          Decrement
        </button>
        <button type="button" onClick={() => dispatch( decrementBy(-2) )}>
          Decrement by 2
        </button>
      </header>
    </div>
  );
}

export default App;
