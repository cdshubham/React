//do not use watch

import { useForm } from "react-hook-form";

function Form() {
  //GETVALUES
  function showValues() {
    // console.log(getValues());
    console.log(getValues(["email", "name"]));
  }

  //SETVALUES
  function SetValues() {
    setValue("email", "hello@gmail.com");
  }
  ///FORM INTIALIZATION
  //   const { register, handleSubmit, formState } = useForm();

  ///FORM INTIALIZATION WITH VALUES
  const {
    register,
    handleSubmit,
    formState,
    watch,
    getValues,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      name: "shubham",
      email: "",
      social: {
        google: "as",
        facebook: "as",
      },
      phoneNumber: ["132", "234"],
    },
  });

  //DEFAULT VALUES FROM API
  //   const { register, handleSubmit, formState } = useForm({
  //     defaultValues: async () => {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/users/1"
  //       );
  //       const data = await response.json();
  //       console.log(data);
  //       return {
  //         name: data.name,
  //         email: data.email,
  //       };
  //     },
  //   });
  //   const name = watch("name");
  //   const name = watch(["name", "email"]);

  //FOR FORMSTATE
  const {
    errors,
    dirtyFields,
    isDirty,
    touchedFields,
    isValid,
    isSubmitting,
    isSubmitted,
    isSubmitSuccessful,
  } = formState;

  //ONSUBMIT
  const onSubmit = (data) => {
    console.log(data);
  };

  //WHEN ERROR ON SUBMIT
  const onError = (errors) => {
    console.log(errors);
  };
  //STATUS
  console.log({ isSubmitting, isSubmitted, isSubmitSuccessful });
  console.log({ errors, dirtyFields, isDirty, touchedFields });

  //FORM
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      {/**  USED WITH WATCH */}
      {/* <div>Name is : {name}</div> */}
      <label>Name:</label>
      <input
        type="text"
        {...register("name", {
          required: {
            value: true,
            message: "Name is required",
          },
          validate: {
            sam: (fieldValue) => {
              return fieldValue !== "sam" || "Not Sam";
            },
            daniel: (fieldValue) => {
              return fieldValue !== "daniel" || "Not Daniel";
            },
            emailAvailability: async (fieldValue) => {
              const response = await fetch(
                `https://jsonplaceholder.typicode.com/users/name=${fieldValue}`
              );
              const data = await response.json();
              return data.length == 0 || "Name is enrolled Already";
            },
          },
          //   disabled: true,
        })}
      />
      <p>{errors.name?.message}</p>

      <label>Email</label>
      <input
        type="text"
        {...register("email", {
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: "Invalid email",
          },
          validate: (fieldValue) => {
            return (
              fieldValue !== "admin@example.com" ||
              "Enter a different email address"
            );
          },
        })}
      />
      <label>Social</label>
      <input type="text" {...register("social.facebook")} />
      <input type="text" {...register("social.google")} />
      <p>{errors.email?.message}</p>
      <label>Number:</label>
      <input type="text" {...register("phoneNumber.0")} />
      <input type="text" {...register("phoneNumber.1")} />
      <label>Image:</label>
      <input type="file" {...register("image")} />
      <label>Age:</label>
      <input
        type="number"
        {...register("age", {
          valueAsNumber: true,
        })}
      />
      <label>Date:</label>
      <input
        type="date"
        {...register("date  ", {
          valueAsDate: true,
        })}
      />
      <button onClick={showValues}>Get Values</button>
      <button onClick={SetValues}>Set Values</button>
      <input type="submit" disabled={!isDirty || !isValid} />
      <button onClick={() => reset()}>reset</button>
    </form>
  );
}

export default Form;
