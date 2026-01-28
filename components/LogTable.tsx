import { createSignal, createEffect, createMemo } from "solid-js";
import { For, Show } from "solid-js";

type JsonRow = Record<string, unknown>;

const LogTable = (props: { data: JsonRow[] }) => {
  let [searchParameters, setSearchParameters] = createSignal("");

  const filteredData = createMemo(() => {
    if (!searchParameters()) return props.data;

    return props.data.filter((row) => {
      const rowValues = Object.values(row)
        .map((value) => {
          if (value == null || value == undefined) return "";
          if (typeof value === "object") return JSON.stringify(value);
          return String(value);
        })
        .join(" ")
        .toLowerCase();
      return rowValues.includes(searchParameters());
    });
  });

  const formatValue = (value: unknown) => {
    if (value === null) return "null";
    if (typeof value === "object") return JSON.stringify(value);
    return String(value);
  };
  createEffect(() => {
    console.log(searchParameters());
  });
  // implementirai <Show> po nadolu i moje bi sus fallback po natatuk ako nqma filtrirani danni
  return (
    <div class="overflow-x-auto">
      <input
        type="text"
        placeholder="Type here"
        class="input"
        value={searchParameters()}
        onChange={(e) => setSearchParameters(e.currentTarget.value)}
      />
      <table class="table table-zebra table-sm">
        <tbody>
          <For each={props.data}>
            {(row) => (
              <tr>
                <td>
                  <div class="flex flex-wrap gap-2">
                    <For each={Object.entries(row)}>
                      {([key, value]) => (
                        <span class="badge badge-outline gap-1 font-mono">
                          <span class="opacity-60">{key}:</span>
                          <span>{formatValue(value)}</span>
                        </span>
                      )}
                    </For>
                  </div>
                </td>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  );
};

export default LogTable;
