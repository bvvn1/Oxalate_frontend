import type { Component } from "solid-js";
import { createSignal } from "solid-js";

function MyComponent() {
  const [count, setCount] = createSignal(0);

  console.log(count());
  return (
    <div>
      {count() > 5 ? (
        <div>Count limit reached</div>
      ) : (
        <>
          <p>Count: {count()}</p>
          <button onClick={() => setCount((prev) => prev + 1)}>SEX</button>
        </>
      )}
    </div>
  );
}

const App: Component = () => {
  return (
    <p class="text-4xl text-green-700 text-center py-20">
      <MyComponent />
    </p>
  );
};

export default App;
