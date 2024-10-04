import { useLoaderData, useNavigation } from "react-router-dom";

export function Show() {
  const c = useNavigation();
  console.log(c);
  const x = useLoaderData();
  console.log(x);
  if (!x) throw Error("Nhi mila");
  return <div>chal hatt</div>;
}
