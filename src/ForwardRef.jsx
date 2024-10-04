import { forwardRef } from "react";
import { useRef } from "react";

export default function ForwardRef() {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
  }

  return (
    <form>
      <MyInput label="Enter your name:" ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  );
}

const MyInput = forwardRef(function MyInput(props, ref) {
  const { label } = props;
  return (
    <div>
      <label>{label}</label>
      <input ref={ref} />
    </div>
  );
});
