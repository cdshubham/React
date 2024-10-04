import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();
  console.log(err);
  console.log(err?.message);
  return (
    <>
      <div>Error</div>
      <div>{err?.message}</div>
    </>
  );
}

export { Error };
