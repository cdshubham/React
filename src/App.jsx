import { useRouteError } from "react-router-dom";

function App() {
  const err = useRouteError();
  return (
    <div>
      <div>Bye</div>
      {err?.data + "hello"}
    </div>
  );
}

export default App;
