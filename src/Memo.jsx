import { useEffect, useMemo, useState } from "react";

export default function Memo() {
  const [count, setCount] = useState(0);
  const [noCount, setNoCount] = useState(0);
  function call(c) {
    for (let i = 0; i < 900_000_000; i++);
    console.log(c);
  }
  //   useMemo(() => {
  //     call(count);
  //   }, [count]);
  const RealCount = useMemo(() => {
    call(count);
    return count;
  }, [count]);

  useEffect(() => {
    console.log("useEffect");
  }, [RealCount]);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count</button>
      <p>{count}</p>
      <button onClick={() => setNoCount((c) => c + 1)}>NoCount</button>
      <p>{noCount}</p>
      <p>{RealCount}</p>
    </div>
  );
}
