import { useState } from "react";

export default function HOC() {
  const Final = wrapper(Hello);
  return <Final name="chal hatt" />;
}

function Hello({ name = "sam", rollNo = "64" }) {
  return (
    <>
      <div>Hello</div>
      <div>{name}</div>
      <div>{rollNo}</div>
    </>
  );
}

function wrapper(Wrapped) {
  return function WrapperComponent(props) {
    console.log(props); //{name:"chal hatt"}
    return (
      <div>
        <h1>HOC</h1>
        <Wrapped {...props} rollNo="45" />
      </div>
    );
  };
}
