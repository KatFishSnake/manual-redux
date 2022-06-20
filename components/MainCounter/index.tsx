import { GlobalStateType, useDispatch, useSubscribe } from "../store";

const styles = {
  button: "bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded text-xs",
};

export const MainCounter = () => {
  const dispatch = useDispatch();
  const sliceValue = useSubscribe((state: GlobalStateType) => state.counter);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT", payload: { counter: 1 } });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT", payload: { counter: 1 } });
  };

  return (
    <div>
      <h1>Main Counter</h1>
      <p>{sliceValue}</p>
      <div className="flex flex-row gap-2">
        <button className={styles.button} onClick={handleIncrement}>
          Increment
        </button>
        <button className={styles.button} onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};
