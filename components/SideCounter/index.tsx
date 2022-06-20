import { GlobalStateType, useSubscribe } from "../store";

export const SideCounter = () => {
  const sliceValue = useSubscribe((state: GlobalStateType) => state.counter);

  return (
    <div>
      <h2>Sibling Counter Display</h2>
      <p>{sliceValue}</p>
    </div>
  );
};
