import { useEffect, useLayoutEffect, useState } from "react";

export default function LayoutEffect() {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  useEffect(() => {
    console.log("useEffect");
  }, [state1, state2]);
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, [state1, state2]);
  return (
    <div>
      <button onClick={() => setState1((s) => s + 1)}>state1 : {state1}</button>
      <button onClick={() => setState2((s) => s + 1)}>state2 : {state2}</button>
    </div>
  );
}
