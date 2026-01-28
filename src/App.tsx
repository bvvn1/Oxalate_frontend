import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import LogTable from "../components/LogTable";

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
          <button
            class="btn w-64 rounded-full"
            onClick={() => setCount((prev) => prev + 1)}
          >
            JAS JEWS
          </button>
        </>
      )}
    </div>
  );
}

const data = [
  {
    id: 1,
    username: "night_owl",
    active: true,
  },
  {
    product: "Wireless Mouse",
    price: 24.99,
    currency: "USD",
    inStock: false,
  },
  {
    event: "concert",
    location: {
      city: "Berlin",
      venue: "Arena",
    },
    date: "2026-05-12",
  },
  {
    temperature: 18.4,
    unit: "C",
    recordedAt: "2026-01-28T14:32:00Z",
  },
  {
    taskId: "a9f3",
    priority: "high",
    tags: ["backend", "api", "urgent"],
  },
  {
    randomNumbers: [4, 17, 23, 89],
    generatedBy: "system",
  },
];

const App: Component = () => {
  return (
    <div>
      <p class="text-4xl text-green-700 text-center py-20">
        <MyComponent />
      </p>

      <LogTable data={data} />
    </div>
  );
};

export default App;
