import { forwardRef, useImperativeHandle } from "react";
import { useRef } from "react";

const ImpHandle = () => {
  const ref = useRef();
  return (
    <div>
      <h2>This is a ImperativeParent Component</h2>
      <button onClick={() => ref.current.display()}>Click for request</button>

      <ImperativeChild ref={ref} />
    </div>
  );
};

const ImperativeChild = forwardRef(function ImperativeChild(props, ref) {
  useImperativeHandle(ref, () => {
    return {
      display,
    };
  });

  const display = () => {
    console.log("Please Subscribe to my channel");
  };

  return (
    <div>
      <h2>This is a ImperativeChild Component</h2>
    </div>
  );
});

export default ImpHandle;
