import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h1>React Counter</h1>
      <p>

			count is {count}
      </p>
      {/* increase counter */}
			<button onClick={() => setCount((count) => count + 1)}>Increase Count</button>

      {/* Decrease counter */}
      <button onClick={() => setCount((count) => count - 1)}>
        Decrease Count
      </button>

      {/* Reset counter */}
			<button onClick={() => setCount(0)}>Reset</button>

		</div>
	);
}

export default App;

