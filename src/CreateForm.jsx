import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
export function CreateForm() {
  const navigate = useNavigation();
  const err = useActionData();
  console.log("form", navigate);
  return (
    <div>
      <Form method="POST" action="/home/form">
        <label htmlFor="name">Name</label>
        {err?.err && <p>{err.err}</p>}
        <input type="text" name="name" id="name" />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
        <button>Submit</button>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  console.log("hi");
  const data = await request.formData();
  console.log("data" + data);
  const dataFinal = Object.fromEntries(data);
  if (dataFinal.name == "abc") return { err: "Please give other name" };
  return redirect("/home/show/21");
  //   return null;
}
