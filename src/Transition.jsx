import { useState, useTransition } from "react";

export default function Transition() {
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();
  return (
    <div>
      <input
        type="text"
        onChange={(e) =>
          startTransition(() =>
            setList(Array.from({ length: 20_000 }).map(() => e.target.value))
          )
        }
      />
      {!isPending ? (
        list.map((el, i) => (
          <div key={i}>
            {i} : {el}
          </div>
        ))
      ) : (
        <p>isLoading...</p>
      )}
    </div>
  );
}
