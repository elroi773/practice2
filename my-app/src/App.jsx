import { useState } from "react";
import "./App.css";

function App() {
  // useState를 사용해서 count 상태를 생성
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>React + Vite</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1 증가</button>
    </div>
  );
}

export default App;
