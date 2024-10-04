import { useId } from "react";

export default function Id() {
  return (
    <div>
      <FormId />
      <FormId />
    </div>
  );
}

//Wrong
// function FormId() {
//   return (
//     <div>
//       <label htmlFor="name">Name: </label>
//       <input type="text" id="name" />
//     </div>
//   );
// }

//Correct Way
function FormId() {
  const id = useId();
  return (
    <div>
      <label htmlFor={id + "name"}>Name: </label>
      <input type="text" id={id + "name"} />
    </div>
  );
}
