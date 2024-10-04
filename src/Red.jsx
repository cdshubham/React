import { useDispatch, useSelector } from "react-redux";
import { getPosts, increment, requestLoan, randomIncrement } from "./account";
function Red() {
  const advice = useSelector((state) => state.counter);
  console.log(advice);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{advice}</p>
      <button onClick={() => dispatch(getPosts())}>Click Me!!</button>
      <button onClick={() => dispatch(increment())}>Click ME aLSO!!</button>
      <button onClick={() => dispatch(requestLoan(3, 2))}>
        Click me Again
      </button>
      <button onClick={() => dispatch(randomIncrement(5))}>
        Click me Please
      </button>
    </div>
  );
}

export default Red;
