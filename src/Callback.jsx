import { useCallback } from "react";

export default function Callback() {
  function call1() {
    console.log("helllo");
  }
  const call2 = useCallback(() => {
    console.log("bye");
  }, []);
  return (
    <div>
      <button onClick={() => call1()}>Without Callback</button>
      <button
        onClick={() => {
          call2();
          call3();
        }}
      >
        With Callback
      </button>
    </div>
  );
}
