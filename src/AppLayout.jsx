import { Outlet } from "react-router-dom";

function AppLayout() {
  const a = "hello";
  return (
    <div>
      <p>{a}</p>
      <Outlet />
    </div>
  );
}

export { AppLayout };
