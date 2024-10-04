import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

function CCI({ children }) {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((count) => count + 1);
  }

  function decrease() {
    setCount((count) => count - 1);
  }

  // const compoundComponents = React.Children.map(children, (child) => {
  //   return React.cloneElement(child, { increase, decrease, count });
  // });

  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      <div>{children}</div>
    </CounterContext.Provider>
  );
}

function Show() {
  const { count } = useContext(CounterContext);
  return <div>{count}</div>;
}

function Right() {
  const { increase } = useContext(CounterContext);
  return <button onClick={increase}>+</button>;
}

function Left() {
  const { decrease } = useContext(CounterContext);
  return <button onClick={decrease}>-</button>;
}

CCI.Left = Left;
CCI.Right = Right;
CCI.Show = Show;

export default function CompoundComponents() {
  return (
    <CCI>
      <CCI.Left />
      <CCI.Show />
      <CCI.Right />
    </CCI>
  );
}
