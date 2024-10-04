import { useDeferredValue, useEffect, useState } from "react";

export default function Deffered() {
  const [list, setList] = useState([]);
  const defferedValue = useDeferredValue(list);
  function handleChange(value) {
    setList(Array.from({ length: 20_000 }).map(() => value));
  }
  useEffect(() => {
    console.log("defferedValue", defferedValue);
    console.log("list", list[10]);
  }, [list, defferedValue]);
  return (
    <div>
      <input type="text" onChange={(e) => handleChange(e.target.value)} />
      {defferedValue.map((el, i) => (
        <div key={i}>
          {i} : {el}
        </div>
      ))}
    </div>
  );
}
